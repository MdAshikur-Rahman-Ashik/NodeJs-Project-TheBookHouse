const {
  deleteProductById,
  saveProduct,
  fetchAllProducts,
  getProductById,
  updateProduct,
} = require("../../models/product");

exports.getAddProductPage = (req, res) => {
  const viewsData = {
    edit: false,
    pageTitle: "Add New Rooms",
  };
  res.render("addproduct", viewsData);
};
exports.postAddProductPage = (req, res) => {
  const product = {
    id: Date.now(),
    title: req.body.title,
    price: req.body.price,
    image: req.body.image,
    description: req.body.description,
  };
  saveProduct(product);
  res.redirect("/");
};
exports.getAdminProductsPage = (req, res) => {
  fetchAllProducts((products) => {
    const viewsData = {
      admin: true,
      pageTitle: "Admin Panal",
      products,
    };
    res.render("product-list", viewsData);
  });
};
exports.getEditProductPage = (req, res) => {
  const productId = req.params.productId;
  getProductById(productId, (product) => {
    const viewsData = {
      edit: true,
      product,
      pageTitle: "Edit Room",
    };
    res.render("addproduct", viewsData);
  });
};
exports.postEditProductPage = (req, res) => {
  const product = {
    id: req.body.productId,
    title: req.body.title,
    image: req.body.image,
    description: req.body.description,
    price: req.body.price,
  };
  updateProduct(product, req.body.productId);
  res.redirect("/products");
};
exports.postDeleteProductPage = (req, res) => {
  const productId = req.body.productId;
  deleteProductById(productId, () => {
    res.redirect("/products");
  });
};
