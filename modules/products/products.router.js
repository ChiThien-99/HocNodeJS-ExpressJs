const express = require("express");
const router = express.Router();
const productsController = require("./products.controller");
const prefix = "/products";

router.get(prefix, productsController.getAllProducts);
router.get(`${prefix}/detail/:id`, productsController.getProductsById);
router.get(`${prefix}/create`, productsController.createProducts);
router.post(`${prefix}/create`, productsController.postCreateProducts);
router.put(prefix, productsController.updateProducts);
router.delete(prefix, productsController.deleteProducts);

module.exports = router;
