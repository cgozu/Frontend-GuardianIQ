export class ShoppingCartEntity {
    constructor() {
        this.products = [];
    }

    addToCart(product) {
        this.products.push(product);
    }
}
