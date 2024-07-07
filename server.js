// require('dotenv').config();
// Connect to the database
require("./src/server/connect");

const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const next = require("next");
// const jwt = require("jsonwebtoken");
const secretKey = "your-256-bit-secret";


const server = express();
const port = 3000;



// Middleware
server.use(cookieParser());
server.use(bodyParser.json());

// Routes
const productRouter = require("./src/server/controllers/product.controllers");
const bodyRouter = require("./src/server/controllers/body.contollers");
const passRouter = require("./src/server/controllers/pass.controllers");
const authRouter = require("./src/server/controllers/auth.controllers");

server.use("/api/products", productRouter);
server.use("/api/bodies", bodyRouter);
server.use("/api/passes", passRouter);
server.use("/api/auth", authRouter);


// Next.js setup
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port,"192.168.1.3", () => {
    console.log(`Server running on http://192.168.1.3:${port}`);
  });
});
