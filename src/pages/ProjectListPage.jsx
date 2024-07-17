import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard"; // used to render each Project
import { useEffect, useState } from "react";
import axios from "axios";

function ProjectListPage() {
  // Paso 3:
  // projects es un array de muchos projects (por eso plural)
  const [projects, setProjects] = useState(null) 
  
  // Paso 1:
  useEffect(() => {
    
    // Paso 2:
    //* en vez de fetch, usaremos axios. Resuelve promesas
    // Paso extra 22: {import.meta.env.VITE_SERVER_URL} variable creada en .env.local
    axios.get(`${import.meta.env.VITE_SERVER_URL}/projects`)
    .then((response)=> {
      // con axios ya tenemos la data de API (no es necesario json)
      console.log(response)
      // Paso 4:
      // con axios la data requerida SIEMPRE se ubica en response.data (buscar en la consola)
      setProjects(response.data)
    })
    .catch((error) => {
      console.loge(error)
    })

  }, []) //se ejecuta cuando el componente haya sido creado correctamente (ComponentDidMount)

  // Paso 6:
  if (projects === null){
    return <h3>... buscando data</h3>
  }
  return (
    <div className="ProjectListPage">

      <Link to="/projects/create">
        <button>Create Project</button>
      </Link>     

      {/* ... list of all projects should be rendered here   */}
      {/* ... for each project, we should render one ProjectCard */}
      {/* Paso 5: */}
      {projects.map((eachProject) => {
        // eachProject representa cada objeto
        return (
          //* Paso 7:
          // en react no se puede pintar objetos ({eachProject} no funciona pero {eachProject.title} sí)
          // <li>{eachProject.title}</li>
          //* Paso 8: pasar props (eachProject)
          //* Paso 9: ir a projectCard
          <ProjectCard key={eachProject.id} eachProject={eachProject}/>
        )
      })}
    </div>
  );
}

export default ProjectListPage;