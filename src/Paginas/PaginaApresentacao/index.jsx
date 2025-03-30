import Banner from "../../Componente/Banner";
import CardDev from "../../Componente/CardDev";
import Carrosel from "../../Componente/carrossel";
import Nav from "../../Componente/nav";
import Secao from "../../Componente/secao";

import InputPesquisa from "../../Componente/InputPesquisa";
import BotaoPesquisa from "../../Componente/botaoPesquisa";
import InputPadrao from "../../Componente/input";

import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDm0PbgJj0SF_5XiqdLjN4Y3mf75OnHpFI",
  authDomain: "proj-io-748e0.firebaseapp.com",
  projectId: "proj-io-748e0",
  storageBucket: "proj-io-748e0.firebasestorage.app",
  messagingSenderId: "679470448660",
  appId: "1:679470448660:web:5338eeb2f836a2b12f2701",
};

async function searcLink(projCollection, getLink) {
  const linkQuery = query(projCollection, where("Link", "==", getLink));
  let text = "";

  const getProjects = async () => {
    const data = await getDocs(linkQuery);

    data.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      text =
        doc.data().Titulo +
        " - " +
        doc.data().Descricao +
        " - " +
        doc.data().Link;
      console.log(text);

      return text;
    });
  };
  getProjects();
}

const PaginaApresentacao = () => {
  const [link, setLink] = useState("");
  const [teste, setTeste] = useState("Nenhum link clicado!");

  const firebaseApp = initializeApp(firebaseConfig);
  const dbFirestore = getFirestore(firebaseApp);

  const projCollection = collection(dbFirestore, "project");

  useEffect(() => {
    const getProjects = async () => {
      const data = await getDocs(projCollection);
      console.log(data);
    };
    getProjects();
  }, []);

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
            onClick={() => {
              console.log("clicado");
              console.log(searcLink(projCollection, link));
            }}
          />
        </InputPesquisa>
        <p>{teste}</p>
      </Banner>
      <Carrosel />
      <Secao titulo="Desenvolvedores">
        <CardDev
          nome="kaio"
          linkGithub="https://github.com/kaiokor"
          linkLinkedin="https://www.linkedin.com/in/kaio-gomes-805253282/"
        ></CardDev>
        <CardDev nome="kaio" linkGithub="#" linkLinkedin="#"></CardDev>
        <CardDev nome="kaio" linkGithub="#" linkLinkedin="#"></CardDev>
      </Secao>
    </>
  );
};

export default PaginaApresentacao;
