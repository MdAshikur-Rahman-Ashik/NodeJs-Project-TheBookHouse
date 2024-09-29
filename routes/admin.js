const express = require('express');

const {postDeleteProductPage,getAddProductPage,postEditProductPage,
    postAddProductPage,getAdminProductsPage,getEditProductPage
}=require('../controllers/admin/productController')
const router=express.Router();
router.get('/', getAdminProductsPage)
router.get('/add', getAddProductPage);
router.post('/add', postAddProductPage);
router.get('/edit/:productId',getEditProductPage);
router.post('/edit',postEditProductPage);
router.post('/delete',postDeleteProductPage);
module.exports=router;