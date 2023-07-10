import express from "express";

import PDFMerge from "pdf-merge";

import { pipeToRes } from "./pdfjs";
import pipeToResPdfLib from "./pdfLib";
import mergePdfFile from "./pdfMergerJs";
import easyPdfMerge from "./easyPdfMerge";
import { Stream } from "stream";

const app = express();

app.get("/", (req, res) => {
  for(let i = 0; i < 1000000; i ++){
    console.log(i)
  }
  res.send("ok")
})

app.use((_req, res, next) => {
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "attachment; filename=quote.pdf");
  next();
});

app.get("/pdfjs", (_req, res) => {
  pipeToRes(res);
});

app.get("/pdf-lib", async (_req, res) => {
  const data = await pipeToResPdfLib();
  res.send(data);
});

app.get("/pdf-merger-js", async (_req, res) => {
  const data = await mergePdfFile();
  res.send(data);
});

app.get("/easy-pdf-merger", async (_req, res) => {
  // install java
  (await easyPdfMerge()).pipe(res);
});

app.get("/pdf-merge", async (req, res) => {
  // apt-get install pdftk
  PDFMerge(["./dummy.pdf", "./dummy.pdf"]).then((stream: Stream) =>
    stream.pipe(res)
  );
  // .catch((err) => res.send(err.message));
});

app.listen(4000, () => console.log("App is running at port 4000"));
