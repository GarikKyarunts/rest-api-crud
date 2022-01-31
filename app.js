const express = require("express");
const productRoutes = require("./src/rest-api/routes/products");
const app = express();

app.use("/products", productRoutes);
app.use((req, res, next) => {
    const error = new Error("Request Not Found :(");
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({error: error.message})
})
// app.use((req, res, next) => {
//     res.json({
//         message: "Server started"
//     })
// })


module.exports = app;