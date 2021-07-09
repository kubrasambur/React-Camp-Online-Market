import React from "react";
import ProductList from "../pages/ProductList";
import Categories from "./Categories";
import { Grid } from "semantic-ui-react";
import { Route } from "react-router-dom";
import ProductDetail from "../pages/ProductDetail";
import CartDetail from "../pages/CartDetail"
import { ToastContainer } from "react-toastify";
import ProductAdd from "../pages/ProductAdd";

export default function Dasboard() {
  return (
    <div>
      <ToastContainer position="bottom-right"/>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={12}>
            <Route exact path="/" component={ProductList}/>
            <Route exact path="/Products" component={ProductList}/>
            <Route path="/Products/:pname" component={ProductDetail}/>
            <Route path="/cart" component={CartDetail}/>
            <Route path="/Products/add" component={ProductAdd}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
