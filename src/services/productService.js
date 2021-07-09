import axios from "axios"

export default class productService{
    getProducts(){
        return axios.get("https://localhost:44340/api/Products")
    }
    getByProductName(productName){
        return axios.get("http://localhost:3000/products?productName="+productName)
    }

}