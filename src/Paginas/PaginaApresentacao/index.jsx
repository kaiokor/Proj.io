import Banner from "../../Componente/Banner";
import CardDev from "../../Componente/CardDev";
import Carrosel from "../../Componente/carrossel";
import Nav from "../../Componente/nav";
import Secao from "../../Componente/secao";

import InputPesquisa from "../../Componente/InputPesquisa";
import BotaoPesquisa from "../../Componente/botaoPesquisa";
import InputPadrao from "../../Componente/input";

import { useNavigate } from "react-router-dom";

import { bootConnectionFirebase, checkLink } from "../../Componente/Firebase";
import { useState } from "react";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDm0PbgJj0SF_5XiqdLjN4Y3mf75OnHpFI",
  authDomain: "proj-io-748e0.firebaseapp.com",
  projectId: "proj-io-748e0",
  storageBucket: "proj-io-748e0.firebasestorage.app",
  messagingSenderId: "679470448660",
  appId: "1:679470448660:web:5338eeb2f836a2b12f2701",
};

const PaginaApresentacao = () => {
  const [link, setLink] = useState("");
  const [reply, setReply] = useState(
    "Atente-se para as letras maiúsculas e minúsculas do link do projeto!"
  );
  const navigate = useNavigate();

  const goToProject = (link) => {
    console.log("redirecionando...");
    navigate(`/projeto/${link}`);
  };

  return (
    <>
      <Nav />
      <Banner>
        <InputPesquisa>
          <InputPadrao
            placeholder="Digite o nome do link do projeto"
            onChange={(event) => setLink(event.target.value)}
          />
          <BotaoPesquisa
            onClick={async () => {
              const projCollection = bootConnectionFirebase();
              const results = await checkLink(projCollection, link);

              results == true
                ? goToProject(link)
                : setReply("ERRO! Projeto não encontrado!");
            }}
          />
        </InputPesquisa>
        <p>{reply}</p>
      </Banner>
      <Carrosel />
      <Secao titulo="Desenvolvedores">
        <CardDev
          nome="kaio"
          linkGithub="https://github.com/kaiokor"
          linkLinkedin="https://www.linkedin.com/in/kaio-gomes-805253282/"
        ></CardDev>
        <CardDev
          nome="David - O incrível"
          linkGithub="https://github.com/dvdriscado"
          linkLinkedin="https://www.linkedin.com/in/david-torquato/"
        ></CardDev>
        <CardDev nome="kaio" linkGithub="#" linkLinkedin="#"></CardDev>
      </Secao>
    </>
  );
};

export default PaginaApresentacao;
