import { readPage, renderPage } from "./templateEngine.js";

const homepage = readPage("./public/pages/home.html");
const javascript = readPage("./public/pages/javascript.html")
const node = readPage("./public/pages/node.html")
const express = readPage("./public/pages/express.html")

export const homepagePage = renderPage(homepage, {
    tabTitle: "Home"
});

export const javascriptPage = renderPage(javascript, {
    tabTitle: "Javascript"
});

export const nodePage = renderPage(node, {
    tabTitle: "Node"
});

export const expressPage = renderPage(express, {
    tabTitle: "Express"
});
