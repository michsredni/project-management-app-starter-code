import { Link } from "react-router-dom";

function ProjectCard (props) {
  
  // Paso 10: destrructurar el props
  // Paso 11: agregar id en destructuracion
  const {title, description, id} = props.eachProject
  
  return (
    <div className="ProjectCard card">
      {/* Paso 12: redireccionar el link al id */}
      <Link to={`/projects/${id}`}>
      {/* Paso 9: agregar dentro de h3*/}
        <h3>{title}</h3>
      </Link>
      <p>{description}</p>
    </div>
  );
}

export default ProjectCard;