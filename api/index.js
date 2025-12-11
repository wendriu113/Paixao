import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.set("views", join(__dirname, "../views"));
app.use(express.static(join(__dirname, "../public")));

app.get("/", (req, res) => res.render("home"));
app.get("/linha", (req, res) => res.render("linha"));
app.get("/motivos", (req, res) => res.render("motivos"));
app.get("/surpresa", (req, res) => res.render("surpresa"));

export default app;
