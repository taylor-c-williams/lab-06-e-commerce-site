import { findById } from './render-product-utils.js';

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