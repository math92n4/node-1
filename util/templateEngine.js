import fs from "fs";

export function readPage(path) {
    return fs.readFileSync(path).toString();
}

export function renderPage(page, config={}) {
    const header = fs.readFileSync("./public/components/header.html").toString();
    return header.replace("$TAB_TITLE$", config.tabTitle ?? "NodeCourse")

     + page;
}