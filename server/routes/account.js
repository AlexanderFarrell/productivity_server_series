import { Router } from "express";
import { render } from "../core/template.js";

export const account_router = Router()

account_router.get('/', (req, res) => {
    render(req, res, 'account.ejs', 'Account');
})