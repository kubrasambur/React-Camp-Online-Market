//sepet ile ilgili aksiyonlar burada tutulur
//reducer lar gönderilen aksiyon hangi state de ise onu tetikikler

export const ADD_TO_CART = "ADD_TO_CART"
export const REMOVE_FROM_CART = "REMOVE_FROM_CART"

export function addToCart(product){
    //bir aksiyon varsa obje gönderilir
    //objenin içinde aksiyonun ismi olmalı :type
    return{
        //bu işlem reducerların içerisinden ADD_TO_CART ın hangi state leri etkilediğini bulur
        //payload : state i etkileyecek olan veri - state e göndermek istediğin değer
        type : ADD_TO_CART,
        payload : product
    }
}

export function removeFromCart(product){
    return{
        type : REMOVE_FROM_CART,
        payload : product
    }
}