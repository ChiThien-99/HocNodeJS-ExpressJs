const ResponseType = require("../../dto/response.type");
const categoryEntity = require("../../Models/category.model");

exports.getAllCategory = async (req, res) => {
  try {
    let categoryList = await categoryEntity.find();
    res.json(new ResponseType(categoryList).success());
  } catch (error) {
    res.json(new ResponseType(null).error());
  }
};
exports.getCategoryById = async (req, res) => {
  try {
    let { id } = req.params;
    let category = await categoryEntity.findById(id);
    res.json(new ResponseType(category).success());
  } catch (error) {
    res.json(new ResponseType(null).error());
  }
};
