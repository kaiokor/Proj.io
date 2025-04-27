import React from "react";

import { useParams } from "react-router-dom";

const PaginaProjeto = () => {
  const { link } = useParams();
  return <p> TA MALUCO! - {link}</p>;
};

export default PaginaProjeto;
