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
  let productList = await productEntity.find().populate("category");
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
  try {
    let {name,price,image,category} = req.body;
    let product=new productEntity({name,price,image,category});
    await product.save();
    res.json(new ResponseType(product).success());
  } catch (error) {
    res.json(new ResponseType(null).error());
  }
};

exports.getDetailProductByApi = async (req, res) => {
  try {
    let { id } = req.params;
    let product = await productEntity.findById(id).populate("category");
    res.json(new ResponseType(product).success());
  } catch (error) {
    res.json(new ResponseType(null).error());
  }
};

exports.updateProducts = async (req, res) => {
  console.log(req.body);
  try {
    let body= req.body;
    let { id } = req.params;
    let updateProduct = await productEntity.findByIdAndUpdate(id,{
      name:body.name,
      price:body.price,
      image:body.image,
      category:body.category.id
    },{
      returnDocument: 'after',
      runValidators:true,
    });
    if(!updateProduct){
      res.json(new ResponseType(null).error())
    };
    res.json(new ResponseType(updateProduct).success());
  } catch (error) {
    res.json(new ResponseType(null).error());
  }
};
exports.deleteProducts = async (req, res) => {
  try {
    let { id } = req.params;
    let deleteProduct= await productEntity.findByIdAndDelete(id).populate("category");
    if(!deleteProduct){
      res.json(new ResponseType(null).error())
    }
    res.json(new ResponseType(deleteProduct).success());
  } catch (error) {
    res.json(new ResponseType(null).error());
  }
};
