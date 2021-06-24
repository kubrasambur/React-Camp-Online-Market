import React from "react";
import { useParams } from "react-router-dom";
import { Button, Card, Image } from "semantic-ui-react";
import { useState, useEffect } from "react";
import ProductService from "../services/productService";

export default function ProductDetail() {
  let { pname } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    let productService = new ProductService();

    productService
      .getByProductName(pname)
      .then((result) => setProduct(result.data));
  }, [pname]);
  return (
    <div>
      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src="https://react.semantic-ui.com/images/avatar/large/jenny.jpg"
            />
            <Card.Header>{pname}</Card.Header>
            <Card.Meta>{product.productID}</Card.Meta>
            <Card.Description>
              Jenny requested permission to view your contact details
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Sepete Ekle
              </Button>
              <Button basic color="red">
                Sepetten Çıkar
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}
