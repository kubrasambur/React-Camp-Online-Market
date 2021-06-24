//TÜM STATE LERİN TOPLANDIĞI YER
//STATE LERİ TEK BİR YERDE TOPLAYIP UYGULAMAYA BURADAN EKLEYECEĞİZ

import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";

const rootReducer = combineReducers({
    //tüm reducer larımızı buraya yazacağız
    cart :cartReducer
})

export default rootReducer