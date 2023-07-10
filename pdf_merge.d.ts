declare module "pdf-merge" {
  function PDFMerge(
    files: string[],
    options?: { ouput: Object }
  ): Promise<Stream>;
  export = PDFMerge;
}
