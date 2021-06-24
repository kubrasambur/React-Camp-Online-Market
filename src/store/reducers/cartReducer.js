import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";
import { cartItems } from "../initialValues/cartItems";

//REDUX DA PUSH KULLANMA

const initialState = {
  cartItems: cartItems,
};
//push referansı değişmez.Bunun için de redux a göre sepet değişmemiş oluyo
export default function cartReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_TO_CART:
      //cartItem daki ilgili product ın id si ile benim payload ile gönderdiğim id aynı ise bu ürünü daha önce sepete eklemişim
      let product = state.cartItems.find((c) => c.product.productID === payload.productID);
      if (product) {
        product.quantity++;
        return {
          //spread operatörü
          ...state, // = cartItems
        };
      } else {
        return {
          //cartItems ı yeni bir array olarak buraya eklediğimiz halde tekrar spread operatarü ile yazıyoruz çünkü başka stateler olsaydı onlaru ayırmak için
          ...state,
          //köşeli parantezin içi cartItems ın objelerini ayırmak için
          cartItems: [...state.cartItems, { quantity: 1, product: payload }],
        };
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        //payload : silmek istediğimiz ürün
        cartItems: state.cartItems.filter((c) => c.product.productID !== payload.productID),
      };

    default:
      return state;
  }
}