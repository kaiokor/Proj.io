import styled from "styled-components"


const BannerEstilizado = styled.div`
    width:1100px;
    margin:auto;
`
const TituloBanner = styled.h1`
    color:#5DC91B;
    font-size:64px;
    font-family: sans-serif;
    text-align:center;
`

const DescricaoBanner = styled.p`
    font-size:32px;
    font-family: sans-serif;
    text-align:center;
`

const BannerLoginPrivado = () => {
    return (
        <BannerEstilizado>
            <TituloBanner>Este projeto esta privado!</TituloBanner>
            <DescricaoBanner>Insira a palavra chave e a senha para poder acessá-la.</DescricaoBanner>
            
        </BannerEstilizado>

    )
}

export default BannerLoginPrivado