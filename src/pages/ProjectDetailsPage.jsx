import { Link, useParams } from "react-router-dom";
import AddTask from "../components/AddTask"; // for rendering Task Add Form
import TaskCard from "../components/TaskCard"; // for rendering Task List
import { useEffect, useState } from "react";
import axios from "axios";

function ProjectDetailsPage () {

  // Paso 13: buscar parametros dinamicos
  const params = useParams()

  // Paso 15: crear un estado de UN SOLO PROJECT (singular)
  const [project, setProject] = useState(null)
  
  // Paso 12: hacer lo mismo que en ProjectListPage
  // usamos useEffect cuando queremos que en la misma pantalla se muestre info que se tiene que traer de manera automática del server externo. Si se trae esa info por un boton u otra interaccion en otra pantalla, no se usa useEffect
  useEffect(() => {

    // Paso 14: agregar parametros dinamicos en el url *(hacer esto o paso 22)
    // axios.get(`${import.meta.env.VITE_SERVER_URL}/projects/${params.projectId}?_embed=tasks`)
    // .then((response) => {
    //   console.log (response)
    //   setProject(response.data)
    // })
    // .catch((error) => {
    //   console.log(error)
    // })

    // Paso 23:
    getData()
    // Paso 24: ir a CreateProjectPage

  }, [])

  // Paso 22:
  const getData = async() => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/projects/${params.projectId}?_embed=tasks`)
      setProject(response.data)
    } catch (error) {
      console.log(error)
    }
  }


  // Paso 6:
  if (project === null){
    return <h3>... buscando data</h3>
  }

  return (
    <div className="ProjectDetailsPage">

      <div>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </div>

      {/* ... list of all Tasks for this Project should be rendered here */}

      {/* example of a single TaskCard being rendered */}

      {/* Paso 20: corto circuito de condicional */}
      {project.tasks.length === 0 ? <h4>No hay tareas!</h4> : null}

      {/* Paso 21: crear archivo .env.local */}

      {/* Paso 16: */}
      {project.tasks.map((eachTask) => {
        return (
          <TaskCard key={eachTask.id} eachTask={eachTask} />
          /* Paso 17: ir a TaskCard */
        )
      })}

      {/* <TaskCard /> */}

      {/* ... form for adding a new Task should be rendered here    */}

      {/* Paso 35: en ProjectDetailsPage pasar por props la función de getData */}
      <AddTask getData={getData}/>

      <Link to="/projects">
        <button>Back to projects</button>
      </Link>

      {/* Paso 36: agregar parametro dinámico en el url */}
      {/* Paso 37: ir a EditProjectPage */}
      <Link to={`/projects/edit/${project.id}`}>
        <button>Edit Project</button>
      </Link>      
      
    </div>
  );
}

export default ProjectDetailsPage;
