import { Router } from "express";
import { render } from "../core/template.js";

export const planner_router = Router()

planner_router.get('/', (req, res) => {
    render(req, res, 'planner.ejs', 'Planner');
})