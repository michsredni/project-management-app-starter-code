import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateProjectPage() {

  // Paso 28-29:
  const navigate = useNavigate()

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // ...logic for creating a new Project should be here

    //  Paso 25: recopilar la data a crear para el nuevo objeto
    const newProject = {
      title: title,
      description: description
    }

    // Paso 26: hacer try/catch y funcion async
    try {
      // Paso 27: pedirle a la API que cree un nuevo proyecto y pasarle info con 2 argumentos (1: url y 2:body para crear/editar, que es donde se va a agregar el nuevo proyecto)
      await axios.post(`${import.meta.env.VITE_SERVER_URL}/projects`, newProject)

    // Paso 28-29: redireccionar a la página de /projects
    // Paso 30: ir a AddTask
      navigate("/projects")

    } catch (error) {
      console.log(error)
    }

  };  

  return (
    <div className="CreateProjectPage">
      <h3>Add Project</h3>

      <form onSubmit={handleSubmit}> 
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateProjectPage;