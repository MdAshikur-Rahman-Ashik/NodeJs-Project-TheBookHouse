const { fetchAllProducts, getProductById } = require("../models/product");

exports.getHomePage = (req, res) => {
  fetchAllProducts((products) => {
    const viewsData = {
      admin: false,
      products,
      pageTitle: "Home Page - Dashboard",
    };
    res.render("home-page", viewsData);
  });
};

exports.productListPage = (req, res) => {
  fetchAllProducts((products) => {
    const viewsData = {
      admin: false,
      products,
      pageTitle: "Home Page - Product List",
    };
    res.render("product-list", viewsData);
  });
};

exports.getProductDetailsPage = (req, res) => {
  const productId = req.params.productId;
  getProductById(productId, (product) => {
    const viewsData = {
      product,
      pageTitle: product.title,
    };
    res.render("productDetails", viewsData);
  });
};
