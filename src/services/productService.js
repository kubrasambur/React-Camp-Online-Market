import axios from "axios"

export default class productService{
    getProducts(){
        return axios.get("http://localhost:3000/products")
    }
    getByProductName(name){
        return axios.get("http://localhost:3000/products?name="+name)
    }

}