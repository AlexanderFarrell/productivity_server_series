import { Router } from "express";
import { render } from "../core/template.js";

export const wiki_router = Router()

wiki_router.get('/', (req, res) => {
    render(req, res, 'wiki.ejs', 'Wiki');
})