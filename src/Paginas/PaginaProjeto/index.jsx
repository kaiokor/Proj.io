import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import {
  bootConnectionFirebase,
  checkLink,
  getInfoProject,
} from "../../Componente/Firebase";

const PaginaProjeto = () => {
  const { link } = useParams();
  const [project, setProject] = useState({});

  useEffect(() => {
    const getDataProjects = async () => {
      const projCollection = bootConnectionFirebase();
      const results = await checkLink(projCollection, link);

      results == true
        ? setProject(await getInfoProject(projCollection, link))
        : setProject({});
    };

    getDataProjects();
  }, []);

  return (
    <div>
      <p> Titulo: - {project.Titulo}</p>
      <p> Descricao: - {project.Descricao}</p>
      <p> Link do Projeto: - {project.Link}</p>
    </div>
  );
};

export default PaginaProjeto;
