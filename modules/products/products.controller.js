let products = [
  {
    id: 1,
    image: "/img/campuchia.jpg",
    name: "Du lịch Campuchia",
    price: "1.000.000 vnđ",
  },
  {
    id: 2,
    image: "/img/lao.png",
    name: "Du lịch Lào",
    price: "2.000.000 vnđ",
  },
  {
    id: 3,
    image: "/img/thailan.jpg",
    name: "Du lịch Thái Lan",
    price: "3.000.000 vnđ",
  },
  {
    id: 4,
    image: "/img/trungquoc.jpg",
    name: "Du lịch Trung Quốc",
    price: "4.000.000 vnđ",
  },
  {
    id: 5,
    image: "/img/indonesia.jpg",
    name: "Du lịch Indonesia",
    price: "2.000.000 vnđ",
  },
];
exports.getAllProducts = (req, res) => {
  res.render("products/index", {
    title: "Học NodeJs-ExpressJs",
    products,
  });
};
exports.getProductsById = (req, res) => {
  let { id } = req.params;
  res.json(`Đây là id:${id}`);
};
exports.createProducts = (req, res) => {
  res.render("products/create");
};
exports.postCreateProducts = (req, res) => {
  try {
    let { body } = req;
    products.push({
      id: products[products.length - 1].id + 1,
      ...body,
    });
    res.json(200);
  } catch (error) {
    res.json("404");
  }
};
exports.updateProducts = (req, res) => {
  res.json("update");
};
exports.deleteProducts = (req, res) => {
  res.json("delete");
};
