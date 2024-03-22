import { homepagePage, javascriptPage, nodePage, expressPage } from "../util/readPages.js";
import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send(homepagePage);
});

router.get("/javascript", (req, res) => {
    res.send(javascriptPage);
});

router.get("/node", (req, res) => {
    res.send(nodePage);
});

router.get("/express", (req, res) => {
    res.send(expressPage);
});

export default router;