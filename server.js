const http = require("http");
const app = require("./app");
const dotenv = require("dotenv");
//const products = require("./src/rest-api/data/products-data");
dotenv.config();

const port = process.env.PORT
const server = http.createServer(app);

server.listen(port);


