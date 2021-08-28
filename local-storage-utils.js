import { findById } from './render-product-utils.js';
import { swords } from './products/product-data.js';

export const PRODUCTS = 'PRODUCTS';
export const CART = 'CART';

export function getCart() {
    const stringyCart = localStorage.getItem('CART');    
    if (!stringyCart){
        return [];
    }
    const finalCart = JSON.parse(stringyCart);
    return finalCart;
}

export function setCart(cartArray){
    const stringyCart = JSON.stringify(cartArray);
    localStorage.setItem('CART', stringyCart);    
}

export function addToCart(someId){
    const cart = getCart();
    const productInCart = findById(cart, someId);
    if (productInCart){
        productInCart.quantity++; 
    } else {
        const newItem = { id: someId, quantity:1 }; 
        cart.push(newItem);
    }
    setCart(cart);
}

export function clearCart(){
    const cart = getCart();
    const stringyCart = JSON.stringify(cart, true, 2);
    alert(stringyCart);
    localStorage.removeItem('CART');
    window.location = '../index.html';
}

export function setProducts(productsArray){
    const stringyProduct = JSON.stringify(productsArray);
    localStorage.setItem(PRODUCTS, stringyProduct);
}

export function getProducts(){
    const stringyProduct = localStorage.getItem(PRODUCTS);    
    if (!stringyProduct){
        return swords;
    }
    const finalProduct = JSON.parse(stringyProduct);
    return finalProduct;
}

export function addProduct(newProduct){
    const products = getProducts();
    products.push;
    setProducts(newProduct);
}

