import { defineStore } from "pinia";
import productsStore from './productsStore.js'

export default defineStore('cart', {
    // methods
    // actions
    state: () => ({
        cart: []
    }),
    actions: {
        addToCart(productId, qty = 1) {
            // console.log(productId, qty);

            // 取得已經有加入購物車的項目
            // 進行判斷，如果購物車有該項目則 +1，如果沒有則是新增一個購物車項目
            const currentCart = this.cart.find((item) => item.productId === productId)

            if (currentCart) {
                currentCart.qty += qty;
            } else {
                this.cart.push({
                    id: new Date().getTime(),
                    productId,
                    qty
                })
            }
            console.log('this.cart:',this.cart);
        },
        setCartQty(id, event) {
            // console.log(id, event);
            // console.log('event :>> ', event.target.value, typeof event.target.value);
            const currentCart = this.cart.find((item) => item.id === id)
            // console.log('currentCart :>> ', currentCart);
            currentCart.qty = event.target.value * 1
        },
        removeCartItem(id) {
            const index = this.cart.findIndex((item) => item.id === id)
            this.cart.splice(index, 1)
        }
    },
    getters: {
        cartList: ({ cart }) => {
            // 1.購物車的品項資訊，需要整合產品資訊
            // 2.必須計算小計的金額
            // 3.必須提供總金額
            const { products } = productsStore()
            // console.log(products);
            // console.log(cart);
            const carts = cart.map((item) => {
                console.log('item :>> ', item);
                // 單一產品取出
                const product = products.find((product) => product.id === item.productId)
                console.log('相同ID的產品 :>> ', product);
                return {
                    ...item,
                    product,
                    subtotal: product.price * item.qty
                }
            })
            console.log('carts :>> ', carts);
            const total = carts.reduce((a, b) => a + b.subtotal ,0)
            console.log('total :>> ', total);

            return {
                carts, // 列表
                total
            }
        }
    }
})