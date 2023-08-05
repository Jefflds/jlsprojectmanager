import Styles from './NewProject.module.css';
import ProjectForm from '../project/ProjectForm';


function NewProject(){
    return (
        <div className={Styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie Seu Projeto para Depois Adicionar os Serviços</p>
            <ProjectForm/>
        </div>
    )
}

export default NewProject
