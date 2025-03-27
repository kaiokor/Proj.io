import styled from "styled-components"

const DivCardDocumentacao = styled.div`
    width: 244px;
    
`
const ImgCardDocumentacao = styled.div`
    background-color: #D9D9D9;
    width: 244px;
    height: 136px;
    width: 100%;
    border-radius: 10px;
`

const TituloCardDocumentacao = styled.p`
    font-family: sans-serif;
    font-size: 16px;
    font-weight: bold;
`


const CardDocumentacao = () => {
    return (
        <DivCardDocumentacao>
            <ImgCardDocumentacao> </ImgCardDocumentacao>
            <TituloCardDocumentacao>Titulo do documento.png</TituloCardDocumentacao>
        </DivCardDocumentacao>
            
    )
}   

export default CardDocumentacao