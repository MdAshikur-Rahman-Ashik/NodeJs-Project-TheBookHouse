const express = require('express');
const router=express.Router();
const {getAdminProductsPage}=require('../controllers/admin/productController')
const{getHomePage,getProductDetailsPage,productListPage}=require('../controllers/homeController');
const{postCartPage,getCartPage,deleteCartItem}=require('../controllers/cartController')
router.get('/',getHomePage);

router.get('/',getHomePage);

router.get('/product/details/:productId',getProductDetailsPage);
router.get('/', getAdminProductsPage)
router.post('/cart',postCartPage);
router.get('/cart',getCartPage);

router.get('/productlist',productListPage);

router.post('/cart/delete-item',deleteCartItem);
module.exports=router;