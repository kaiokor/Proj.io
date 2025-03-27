import styled from "styled-components"
import CardLink from "../../Componente/CardLink"
import CardDocumentacao from "../../Componente/CardDocumentacao"
import Editar from "../../Componente/assets/Editar.png"

const EstiloProjeto = styled.div`
    background-color: #272727;
    width: 100%;
    height: 100%;
`

const PaginaProjetoEstilizada = styled.div`
    width: 1100px;
    margin: auto;
    
`
const DivHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const TituloEstilizado = styled.p`
    color:#5DC91B;
    font-family: sans-serif;
    
    font-size: 36px;
    font-weight: bold;
    margin: 0;
    padding: 24px 0;
`
const BotaoEditar = styled.button`
    background-color: #5DC91B;
    width: 90px;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    border: none;
    box-shadow: 6px 5px 4px rgba(0,0,0,0.25);
    font-family: sans-serif;
    color: white;
    cursor: pointer;
    font-size:24px;

`

const TituloEstilizadoProjeto = styled.p`
    color:#5DC91B;
    font-family: sans-serif;
    font-size: 36px;
    font-weight: bold;
    margin: 24px;
`

const ProjetoEstilizado = styled.div`
    background-color: white;
    border-radius: 10px;
`

const CapaEstilizada = styled.div`
    width: 100%;
    border-radius: 10px 10px 0px 0px;
    height: 175px;
    background-color: #c9c9c9;
`
const DescricaoEstilizada = styled.div`
    margin: 0 32px;
    font-family: sans-serif;
    padding: 24px;
    font-size: 18px;
`

const DivLinksEstilizada = styled.div`
    gap: 16px;
`

const DivDocumentacao = styled.div`
    margin: 0 32px;
    display: flex;
    gap: 32px;
`

const PaginaProjeto = ({ TituloProjeto="Titulo do Projeto"}) => {
    return (
        <EstiloProjeto>
            <PaginaProjetoEstilizada>
                <TituloEstilizado>Proj.io</TituloEstilizado>
                <DivHeader>
                    <TituloEstilizado>{ TituloProjeto }</TituloEstilizado>
                    <BotaoEditar><img src={Editar}/></BotaoEditar>
                </DivHeader>
                
                <ProjetoEstilizado>
                    <CapaEstilizada></CapaEstilizada>
                    <TituloEstilizadoProjeto>Descricao</TituloEstilizadoProjeto>
                    <DescricaoEstilizada>Ai que não sei oq, não sei oq la. A ideia do projetinho é fazer algo simples pra salvar coisas relacionadas ao próprio projeto, como links de algumas coisas uteis para usar dps e alguns arquivos pra deixar tudo juntinho</DescricaoEstilizada>
                    
                    <TituloEstilizadoProjeto>Links</TituloEstilizadoProjeto>
                    <CardLink></CardLink>
                    <CardLink></CardLink>
                    
                    <TituloEstilizadoProjeto>Documentação</TituloEstilizadoProjeto>
                    <DivDocumentacao>
                        <CardDocumentacao></CardDocumentacao>
                        <CardDocumentacao></CardDocumentacao>
                    </DivDocumentacao>
                </ProjetoEstilizado>

            </PaginaProjetoEstilizada>
        </EstiloProjeto>
    )
}

export default PaginaProjeto
