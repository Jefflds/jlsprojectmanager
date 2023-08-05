import Styles from './ProjectForm.module.css';

function ProjectForm(){
    return (
        <form className={Styles.form}>
            <div>
            <input type="text" placeholder="Insira o Nome do Projeto"/>
            </div>
            <div>
            <input type="number" placeholder="Insira o Orçamento Total"/>
            </div>
            <div>
            <select name="category_id">
                <option disabled>Selecione a Categoria</option>
            </select>
            </div>
            <div>
                <input type="submit" value="Criar Projeto" />
            </div>
            
        </form>
    )
}

export default ProjectForm