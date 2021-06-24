import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown,Label } from "semantic-ui-react";
import { useSelector } from "react-redux";

export default function CartSummary() {
  //state deki cart ı const olarak tanımladığımız cartItems a kullanabilmesi için atadık
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div>
      <Dropdown item text="Sepetiniz">
        <Dropdown.Menu>
          {cartItems.map((cartItem) => (
            <Dropdown.Item key={cartItem.product.productID}>
              {cartItem.product.name}
              <Label>
                {cartItem.quantity}
              </Label>
              <Label>
                {cartItem.unitPrice} TL
              </Label>
            </Dropdown.Item>
          ))}
            
          <Dropdown.Divider />
          <Dropdown.Item as={NavLink} to="/cart">
            Sepete Git
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
