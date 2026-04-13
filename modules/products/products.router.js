const express = require("express");
const router = express.Router();
const productsController = require("./products.controller");
const prefix = "/products";

router.get(prefix, productsController.getAllProducts);
router.get(`${prefix}/detail/:id`, productsController.getProductsById);
router.get(`${prefix}/create`, productsController.createProducts);
router.get(`/api${prefix}/detail/:id`,productsController.getDetailProductByApi)
router.post(`${prefix}/create`, productsController.postCreateProducts);
router.put(`${prefix}/create/:id`, productsController.updateProducts);
router.delete(`${prefix}/detail/:id`, productsController.deleteProducts);

module.exports = router;
