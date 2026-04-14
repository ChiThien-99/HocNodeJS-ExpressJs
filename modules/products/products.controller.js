// let products = [
//   {
//     id: 1,
//     image: "/img/campuchia.jpg",
//     name: "Du lịch Campuchia",
//     price: "1.000.000 vnđ",
//   },
//   {
//     id: 2,
//     image: "/img/lao.png",
//     name: "Du lịch Lào",
//     price: "2.000.000 vnđ",
//   },
//   {
//     id: 3,
//     image: "/img/thailan.jpg",
//     name: "Du lịch Thái Lan",
//     price: "3.000.000 vnđ",
//   },
//   {
//     id: 4,
//     image: "/img/trungquoc.jpg",
//     name: "Du lịch Trung Quốc",
//     price: "4.000.000 vnđ",
//   },
//   {
//     id: 5,
//     image: "/img/indonesia.jpg",
//     name: "Du lịch Indonesia",
//     price: "2.000.000 vnđ",
//   },
// ];
const ResponseType = require("../../dto/response.type");
const productEntity = require("../../Models/product.model");
exports.getAllProducts = async (req, res) => {
  let productList = await productEntity.find();
  res.render("products/index", {
    title: "Học NodeJs-ExpressJs",
    products: productList,
  });
};
exports.getProductsById = async (req, res) => {
  let { id } = req.params;
  let product = await productEntity.findById(id);
  res.render("products/detail", { product });
};
exports.createProducts = (req, res) => {
  res.render("products/create");
};
exports.postCreateProducts = async (req, res) => {
  let productList = await productEntity.find();
  try {
    let { body } = req;
    console.log(body);
    productList.push({
      ...body,
    });
    res.json(new ResponseType(200).success().data);
  } catch (error) {
    res.json(new ResponseType(404).success().data);
  }
};

exports.getDetailProductByApi = (req, res) => {
  try {
    let { id } = req.params;
    let product = products.find((item) => item.id == id);
    res.json(product);
  } catch (error) {
    res.json("404");
  }
};

exports.updateProducts = (req, res) => {
  try {
    let { body } = req;
    let { id } = req.params;
    let index = products.findIndex((item) => item.id == id);
    products[index].name = body.name;
    products[index].price = body.price;
    products[index].image = body.image;
    res.json(200);
  } catch (error) {
    res.json("404");
  }
};
exports.deleteProducts = (req, res) => {
  try {
    let { id } = req.params;
    products = products.filter((item) => item.id !== Number(id));
    res.render("products/index", { products });
    res.json(200);
  } catch (error) {
    res.json("404");
  }
};
