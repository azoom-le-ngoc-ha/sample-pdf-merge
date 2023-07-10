declare module "easy-pdf-merge" {
  type callback = (error: Error) => void;
  function merge(
    source_files: string[],
    dest_file_path: string,
    callback: callback
  ): void;

  export = merge;
}
