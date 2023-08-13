import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
import Styles from "./ProjectForm.module.css";

function ProjectForm({btnText}) {
  return (
    <form className={Styles.form}>
      <Input
        type="text"
        text="Nome do Projeto"
        name="name"
        placeholder="Insira o nome do projeto"
      ></Input>
      <Input
        type="number"
        text="Orçamento do Projeto"
        name="budget"
        placeholder="Insira o Orçamento Total"
      ></Input>
      <Select
        name="category_id" text="selecione a categoria"
      />
      <SubmitButton text={btnText}/>
    </form>
  );
}

export default ProjectForm;
