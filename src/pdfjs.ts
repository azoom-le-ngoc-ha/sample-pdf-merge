import fs from "fs";
import pdf from "pdfjs";

export async function pipeToRes(res: any) {
  const doc = new pdf.Document({
    font: require("pdfjs/font/Helvetica"),
    padding: 10,
  });
  const src = fs.readFileSync("dummy.pdf");
  const ext = new pdf.ExternalDocument(src);
  doc.addPagesOf(ext);
  const src_1 = fs.readFileSync("dummy.pdf");
  const ext_1 = new pdf.ExternalDocument(src_1);
  doc.addPagesOf(ext_1);
  doc.pipe(res);
  await doc.end();
}

// light, pip to res, beta-version

// 346 kB - Published a month ago - 24,085


