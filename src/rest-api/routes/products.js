const express = require("express");
const productsData = require("../data/products-data")
const router = express.Router();

router.get("/", (req, res, next) => {
    res.status(201).json({
        message: "Handling GET requests for /products",
        product: productsData.product1
    })
})

router.post("/", (req, res, next) => {
    res.status(201).json({
        message: "Handling POST requests for /products",
        product: productsData.product2
    })
})

router.get("/:productId", (req, res, next) => {
    const id = req.params.productId;
    if(id === "UNIQUE_ID") {
        res.json({
            message: `We've got a ${id} id.`
        })
    } else if(id === productsData.product1 .id) {
        res.json({
            message: `We've got a ${productsData.product1.id} id`
        })
    } else {
        res.send({
            message: `I don't know what to do with this ${id}.`
        })
    }
})

module.exports = router;