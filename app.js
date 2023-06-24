const express = require("express");
const session = require("express-session");

const app = express();

const methodOverride =  require('method-override');

let mainRoutes = require("./routes/main");

app.use(methodOverride('_method'));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.use(session({secret: "session", resave: false, saveUninitialized: false}));

app.use("/", mainRoutes);

app.listen(3030, () => console.log("Servidor Abierto en puerto 3030"));