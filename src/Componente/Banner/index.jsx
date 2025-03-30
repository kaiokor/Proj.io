import styled from "styled-components";

const BannerEstilizado = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: sans-serif;
`;

const NomeEstilizado = styled.h1`
  font-size: 128px;
  color: #5dc91b;
`;
const DescricaoEstilizada = styled.h2`
  text-align: center;
  font-weight: lighter;
  max-width: 900px;
`;

const Banner = (props) => {
  return (
    <BannerEstilizado>
      <NomeEstilizado>Proj.io</NomeEstilizado>
      <DescricaoEstilizada>
        Aqui você pode salvar informações sobre seus projetos de maneira ágil e
        acessar mais rápido ainda
      </DescricaoEstilizada>
      {props.children}
    </BannerEstilizado>
  );
};

export default Banner;
