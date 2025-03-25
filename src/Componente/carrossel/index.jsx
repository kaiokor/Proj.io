
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled from "styled-components"
import { Autoplay, FreeMode, Grid, Navigation, Pagination, Scrollbar } from "swiper/modules"

const DivBanner = styled.div`
    max-width:1200px;
    margin: 32px auto;
`
const ImgEstilizada = styled.div`
    background-color: #c9c9c9;
    width: 677px;
    height: 381px;
    margin: auto;

    
`

const TextoEstilizado = styled.p`
    font-size: 32px;
    font-family: sans-serif;
    max-width: 1113px;
    margin: 16px auto;
    text-align:center;
    
`

const Carrosel = () => {
    return(
        <DivBanner>
             <Swiper
                modules={[Navigation, Autoplay ]}
                spaceBetween={2}
                slidesPerView= {1.6}
                autoplay={{ delay: 5000 }}
                centeredSlides={true}
                loop={true}
                
                >
        <SwiperSlide><ImgEstilizada>img1</ImgEstilizada></SwiperSlide>
        <SwiperSlide><ImgEstilizada>img2</ImgEstilizada></SwiperSlide>
        <SwiperSlide><ImgEstilizada>img3</ImgEstilizada></SwiperSlide>
        <SwiperSlide><ImgEstilizada>img4</ImgEstilizada></SwiperSlide>
      </Swiper>
            <TextoEstilizado>Proj.io é um projeto que busca salvar dados sobre projetos de maneira rápida, podendo acessar a página do seu projeto por meio da URL vinculada a ele. Simples, rápido e ágil, podendo acessar seu projeto apenas com um link</TextoEstilizado>
        </DivBanner>
    )
}
export default Carrosel;
