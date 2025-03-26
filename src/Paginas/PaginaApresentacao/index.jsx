import Banner from "../../Componente/Banner"
import CardDev from "../../Componente/CardDev"
import Carrosel from "../../Componente/carrossel"
import Nav from "../../Componente/nav"
import Secao from "../../Componente/secao"


const PaginaApresentacao = () => {
    return(
        <>
            <Nav/>
            <Banner/>
            <Carrosel/>
            <Secao titulo="Desenvolvedores">
                <CardDev nome="kaio" linkGithub="https://github.com/kaiokor" linkLinkedin="https://www.linkedin.com/in/kaio-gomes-805253282/"></CardDev>
                <CardDev nome="kaio" linkGithub="#" linkLinkedin="#"></CardDev>
                <CardDev nome="kaio" linkGithub="#" linkLinkedin="#"></CardDev>
            </Secao>
        </>
    )
}

export default PaginaApresentacao