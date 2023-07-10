import fs from "fs";
import merge from "easy-pdf-merge";

export default function easyPdfMerge(): Promise<fs.ReadStream> {
  return new Promise((res, rej) => {
    merge(["dummy.pdf", "dummy.pdf"], "easy_pdf_merge.pdf", (error: Error) => {
      if (error) return rej(error);
      res(fs.createReadStream("easy_pdf_merge.pdf"));
    });
  });
}

// must be installed Java on machine
