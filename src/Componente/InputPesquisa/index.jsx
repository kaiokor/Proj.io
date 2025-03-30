import styled from "styled-components";

const PesquisaEstilizada = styled.div`
  display: flex;
  gap: 16px;
`;

const InputPesquisa = (props) => {
  return <PesquisaEstilizada>{props.children}</PesquisaEstilizada>;
};

export default InputPesquisa;
