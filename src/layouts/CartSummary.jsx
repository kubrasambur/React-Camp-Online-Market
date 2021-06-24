import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown, Label } from "semantic-ui-react";
import { useSelector } from "react-redux";

export default function CartSummary() {
  //state deki cart ı const olarak tanımladığımız cartItems a kullanabilmesi için atadık
  const { cartItems, totalAmount } = useSelector((state) => state.cart);
  
  function fiyat(quantity, price) {
    return quantity * price
  }

  return (
    <div>
      <Dropdown item text="Sepetiniz">
        <Dropdown.Menu>
          {cartItems.map((cartItem) => (
            <Dropdown.Item key={cartItem.product.productID}>
              {cartItem.product.name}
              <Label>
                {cartItem.quantity}-Adet
              </Label>
              <Label>
                {fiyat(cartItem.product.unitPrice, cartItem.quantity)} TL
              </Label>
            </Dropdown.Item>           
          ))}
          <Dropdown.Divider />
          <Dropdown.Item >
            Sepet Toplamı : {totalAmount}
          </Dropdown.Item>
          <Dropdown.Item as={NavLink} to="/cart">
             Sepete Git 
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
