import styled from "styled-components"

const CardLinkEstilizado = styled.div`
    width: 928px;
    height: 100px;
    margin: 32px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #D9D9D9;
    border-radius: 10px;
    font-family: sans-serif;
    font-size: 14px;
    
`
const CardDescricaoEstilizado = styled.div`
    padding: 16px 24px;
`

const CardTituloEstilizado = styled.p`
    font-family: sans-serif;
    font-size: 18px;
    font-weight: bold;
    margin: 0;
`
const CardTextoEstilizado = styled.p`
    color: rgba(0, 0, 0, 0.2);
`

const CardNomePaginaEstilizado = styled.div`
       color: rgba(0, 0, 0, 0.5);
`

const CardImgLinkEstilizado = styled.div`
    width: 164px;
    height: 100px;
    background-color: #c9c9c9;
    border-radius: 0 10px 10px 0;
    
`

const CardLink = () => {
    return (
        <CardLinkEstilizado>
            <CardDescricaoEstilizado>
                <CardTituloEstilizado>Nome do Link</CardTituloEstilizado>
                <CardTextoEstilizado>Texto do link</CardTextoEstilizado>
                <CardNomePaginaEstilizado>Nome da Pagina</CardNomePaginaEstilizado>
            </CardDescricaoEstilizado>
            <CardImgLinkEstilizado>   </CardImgLinkEstilizado>
        </CardLinkEstilizado>
    )
}

export default CardLink