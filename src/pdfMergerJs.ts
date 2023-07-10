import PDFMerger from "pdf-merger-js";

// import PDFMerger from 'pdf-merger-js/browser';


export default async function mergePdfFile(){
    const merger = new PDFMerger()
    await merger.add('dummy.pdf')
    await merger.add('dummy.pdf')
    await merger.add('dummy.pdf')
    await merger.add('dummy.pdf')
    await merger.add('dummy.pdf')
    await merger.add('dummy.pdf')
    return merger.saveAsBuffer()
}

// 2.54 MB - Published 4 months ago - 35,354 dependons pdf-lib - buffer

 