import Styles from './Home.module.css';
import savings from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton';

function Home(){
    return (
        <section className={Styles.home_container}>
            <h1>Seja Bem-Vindo ao <span>JLS Project Manager</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <LinkButton to="/newproject" text="Criar Projeto"/>
            <br/>
            <img src={savings} alt="Imagem de um porco que remete ao dinheiro" />
        </section>
    )
}

export default Home
