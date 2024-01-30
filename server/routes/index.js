import { Router } from "express";
import { render } from "./../core/template.js";

export const index_router = Router()

index_router.get('/', (req, res) => {
    render(req, res, 'index.ejs', 'Home');
})

index_router.get('/about', (req, res) => {
    render(req, res, 'about.ejs', 'About');
})

index_router.get('/contact', (req, res) => {
    render(req, res, 'contact.ejs', 'Contact');
})