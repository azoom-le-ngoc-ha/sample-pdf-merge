import got from "got";
import PDFMerger from "pdf-merger-js";

function getFile(url) {
  return got.get(url, { encoding: "binary" }).buffer();
}

(async () => {
  const files = await Promise.all([
    getFile("https://www.africau.edu/images/default/sample.pdf"),
    getFile("https://pdfobject.com/pdf/sample.pdf"),
  ]);

  const merger = new PDFMerger();
  for(const file of files){
    await merger.add(file)
  }
  
  await merger.save("data.pdf");
})();
