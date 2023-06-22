import Home from "../../image/home.png"
import Logo from "../../image/LOGO.jpg"
import Carrinho from "../../image/cart.png"
import styles from "./Header.module.css"

export function Header() {

    return( 
    <div className={styles.headerCss}>
 
     <img src = {Home} alt = "Home"/>
     <img src={Logo} className={styles.logo} alt ="logotipo"/>
     <img src={Carrinho} className={styles.carrinho} alt ="Cart"/>
   
    </div>
    
    )
}

