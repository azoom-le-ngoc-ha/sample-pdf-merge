import { PDFDocument } from "pdf-lib";
import fs from "fs";
export default async function pipeToResPdfLib() {

  const mergedPdf = await PDFDocument.create();
  const pdfA = await PDFDocument.load(fs.readFileSync("dummy.pdf"));
  const pdfB = await PDFDocument.load(fs.readFileSync("dummy.pdf"));

  const copiedPagesA = await mergedPdf.copyPages(pdfA, pdfA.getPageIndices());
  copiedPagesA.forEach((page) => mergedPdf.addPage(page));

  const copiedPagesB = await mergedPdf.copyPages(pdfB, pdfB.getPageIndices());
  copiedPagesB.forEach((page) => mergedPdf.addPage(page));

  const pdfFile = await mergedPdf.save();
  return Buffer.from(pdfFile);
}

// 2.54 MB  - Published 4 months ago  - Array8Unit - 35,354


