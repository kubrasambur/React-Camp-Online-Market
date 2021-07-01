//hook react ın yaşam döngüsüne müdahalede bulunur
import React, { useState, useEffect } from "react";
import { Table,Button } from "semantic-ui-react";
import ProductService from "../services/productService";
import {Link} from "react-router-dom"
import { useDispatch } from "react-redux";
import {addToCart,removeFromCart} from "../store/actions/cartActions"
import { toast } from "react-toastify";

export default function ProductList() {
  //dispatch : fonksiyon(action) çağırmak için kullanılır
  const dispatch = useDispatch()

  const [products, setProducts] = useState([]);

  useEffect(() => {
    //component yüklendiğinde yapılması istenen kod buraya yazılır
    let productService = new ProductService();
    //getProducts() ı çalıştır başarılı  olur ise then in içini çalıştır olmazsa yanındakini
    //başarılı olursa : her bir result için setProducts() ı çalıştır. dataları getir
    productService.getProducts().then((result) => setProducts(result.data));
  }, []);

  const handleAddToCart=(product)=>{
    
    dispatch(addToCart(product))
    toast.success(`${product.name} sepete eklendi!`)
    
  }
  const handleRemoveFromCart=(product)=>{
    dispatch(removeFromCart(product))
    console.log("product")
    console.log(product)
    toast.error(`${product.name} sepetten silindi!`)
    
  }

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Ürün Adı</Table.HeaderCell>
            <Table.HeaderCell>Birim fiyatı</Table.HeaderCell>
            <Table.HeaderCell>Stok adedi</Table.HeaderCell>
            <Table.HeaderCell>Açıklama</Table.HeaderCell>
            <Table.HeaderCell>Kategori Id</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {products.map((product) => (
            <Table.Row key={product.productID}>
              <Table.Cell><Link to={`/products/${product.name}`}>{product.name}</Link></Table.Cell>
              <Table.Cell>{product.unitPrice}</Table.Cell>
              <Table.Cell>{product.unitsInStock}</Table.Cell>
              <Table.Cell>{product.quantityPerUnit}</Table.Cell>
              <Table.Cell>{product.categoryID}</Table.Cell>
              <Table.Cell> <Button onClick={()=>handleAddToCart(product)}>Sepete Ekle</Button></Table.Cell>
              <Table.Cell> <Button onClick={()=>handleRemoveFromCart(product)}>Sepetten Sil -EKLEDİĞİNİZ ÜRÜNLERİ ÇIKARDIKTAN SONRA BİDA BASMAYIN BURAYA-</Button></Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
