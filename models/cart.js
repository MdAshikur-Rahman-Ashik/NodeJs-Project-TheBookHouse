const fs=require('fs');
const path = require('path');
const rootDir = require('../utils/path');

exports.getCartDetailsFromFile=(callback)=>{
    const cartPath=path.join(rootDir,'data','cart.json');
    fs.readFile(cartPath,(error, cartContent)=>{
        let cart={products:[]}
        if(!error){
            cart=JSON.parse(cartContent);
        }
        return callback(cart);
    })
}
exports.addProductToCart=(productId, productPrice)=>{
    const cartPath=path.join(rootDir,'data','cart.json');
    this.getCartDetailsFromFile((cart)=>{
        let existingProductIndex=cart.products.findIndex(prod=>prod.id.toString()==productId);
        let updatedProduct;
        if(existingProductIndex !=-1){
            updatedProduct={ ...cart.products[existingProductIndex]};
            updatedProduct.quantity += 1;
            cart.products=[...cart.products];
            cart.products[existingProductIndex]=updatedProduct;
        }else{
            updatedProduct={id:productId,quantity:1};
            cart.products=[...cart.products, updatedProduct];
        }
        fs.writeFile(cartPath, JSON.stringify(cart), error=>{
            console.log(error);
           })
    });
    
}
exports.deleteProductFromCart=(productId,callBack='')=>{
    const cartPath=path.join(rootDir,'data','cart.json');
    this.getCartDetailsFromFile((cart)=>{
        let cartProducts=cart.products;
        let updatedCartProducts =cartProducts.filter
        (prod=>prod.id.toString()!= productId);

        fs.writeFile(cartPath, 
            JSON.stringify({products:updatedCartProducts}), error=>{
            console.log(error);
        });
        if(callBack){
            callBack();
        }
    });
};