import React,{useState} from "react";
import { Container, Menu } from "semantic-ui-react";
import CartSummary from "./CartSummary";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
import {NavLink, useHistory} from "react-router-dom"
import { useSelector } from "react-redux";

//bir componentte  bir şarta göre birşeyler yapılacaksa ""STATE"" kullanmalıyız
//STATE : o component in datası

export default function Navi() {
  const { cartItems } = useSelector((state) => state.cart);

  //isAuthenticated : state in adı
  //setIsAuthenticated : state i değiştirecek method
  //useState(false) yaptığımız zaman setIsAuthenticated methodunun default değerini false yapmış oluyoruz
  const [isAuthenticated, setIsAuthenticated] = useState(true) //destructor işlemi 
  const history = useHistory()

  function handleSignOut() {
    setIsAuthenticated(false)
    history.push("/")
  }
  
  function handleSignIn() {
    setIsAuthenticated(true)
  }
  return (
    <div> 
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" as={NavLink} to="/"/>
          <Menu.Item name="messages" />
          
          <Menu.Menu position="right">
            {/*cartSumarry i eleman sayısı 0 dan büyük ise render et*/}
            {cartItems.length>0 && <CartSummary/>}
            {/* SignedIn signOut={handleSignOut} :  signIn in içerisinde signOut diye bir fonksiyon var da o da handleSignOut u tetikliyor gibi */}
            {/* signOut={handleSignOut} : alt component e data geçtik */}
            {/* hanleSignOut : prop */}
            {isAuthenticated?<SignedIn signOut={handleSignOut}/>:<SignedOut signIn={handleSignIn}/>}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
