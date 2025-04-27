import { initializeApp } from "firebase/app";
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
  limit,
} from "firebase/firestore";

// Retorna o collection "project"
export const bootConnectionFirebase = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyDm0PbgJj0SF_5XiqdLjN4Y3mf75OnHpFI",
    authDomain: "proj-io-748e0.firebaseapp.com",
    projectId: "proj-io-748e0",
    storageBucket: "proj-io-748e0.firebasestorage.app",
    messagingSenderId: "679470448660",
    appId: "1:679470448660:web:5338eeb2f836a2b12f2701",
  };

  const firebaseApp = initializeApp(firebaseConfig); // Iniciará a conexão com o firebase
  const dbFirestore = getFirestore(firebaseApp); // Receberá o firestore (banco de dados)
  const projCollection = collection(dbFirestore, "project"); // Receberá o collection presente no firestore chamado de "project"

  return projCollection;
};

// Confere se o link existe e retorna True ou False
export const checkLink = async (projCollection, getLink) => {
  const linkQuery = query(
    projCollection,
    where("Link", "==", getLink),
    limit(1)
  );

  const data = await getDocs(linkQuery);

  if (data.size == 1) {
    console.log("ATENÇÃO! Resultado da pesquisa: " + data.size);
    return true;
  }

  console.log("ATENÇÃO! Não houve resultado para essa pesquisa!");
  return false;
};

// Retorna os dados do projeto conectado ao link
export const getInfoProject = async (projCollection, getLink) => {
  let link = {};

  const linkQuery = query(
    projCollection,
    where("Link", "==", getLink),
    limit(1)
  );

  const data = await getDocs(linkQuery);

  data.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
    link = doc.data();
  });

  return link;
};
