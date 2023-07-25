import {Link} from "react-router-dom";
import Container from "./Container";
import Styles from "./Navbar.module.css"
import Logo from "../../img/logo.png"

function Navbar(){
    return (
    <nav className={Styles.navbar}>
        <Container customClass="w-100">
            <Link to="/">
                <img src={Logo} alt="Logo da JLS Project Manager" className={Styles.logo}/>
            </Link>
            <ul className={Styles.list}>
                <li className={Styles.item}><Link to="/">Home</Link></li>
                <li className={Styles.item}><Link to="/projects">Projetos</Link></li>
                <li className={Styles.item}><Link to="/contact">Contato</Link></li>
                <li className={Styles.item}><Link to="/company">Empresa</Link></li>
            </ul>
        </Container>
    </nav>
    )
}

export default Navbar