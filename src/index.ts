import { globSync } from "glob";
import express from "express";

const router = express();

const rootDirs = "./src/routes";

const filePatterns = "**/*.{ts,js}";

type Routes = {
  middlewares: string[];
  routes: string[];
};

type Methods = "get" | "head" | "post" | "put" | "delete" | "patch";

const routeObject = globSync(filePatterns, { cwd: rootDirs }).reduce(
  (obj: Routes, path: string) => {
    if (!/.*(get|head|post|put|delete|patch|middleware)\.(ts|js)$/.test(path))
      return obj;
    if (/.*middleware\.(ts|js)$/.test(path))
      return {
        ...obj,
        middlewares: [...obj.middlewares, path],
      };
    return {
      ...obj,
      routes: [...obj.routes, path],
    };
  },
  { middlewares: [], routes: [] }
);

routeObject.middlewares.forEach((middleware) => {
  const lastIndexSlash = middleware.lastIndexOf("/");
  console.log(lastIndexSlash, "=====");
  if (lastIndexSlash === -1) {
    router.use(require(`./routes/${middleware}`).default);
  } else {
    router.use(
      "/" + middleware.slice(0, lastIndexSlash),
      require(`./routes/${middleware}`).default
    );
  }
});

routeObject.routes.forEach((path) => {
  const matches = path.match(
    /(.*)\/(get|head|post|put|delete|patch)\.(ts|js)$/
  );
  console.log(matches, "=========")
  if (!matches) return;
  const [_path, route, method, _extension] = matches;

  console.log("/" + (route || ""), "===========")

  router[method as Methods](
    "/" + (route || ""),
    require(`./routes/${path}`).default
  );
});

router.listen(6000, () => console.log("App is running at port 6000"));
