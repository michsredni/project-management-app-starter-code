import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditProjectPage() {

  //Paso 38:
  const params = useParams()

  // Paso 43:
  const navigate = useNavigate()

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  //Paso 39: llamar la función getData() que ya está creada en ProjectDetailsPage para que busque otra vez la data en el servidor
  useEffect(() => {
    getData()
  }, [])

  // Paso 37:
  const getData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/projects/${params.projectId}`)
      console.log (response.data)
      setTitle(response.data.title)
      setDescription(response.data.description)
    } catch (error) {
      console.log(error)
    }
  }

  //Paso 40:
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // ...updated logic should be here

    //Paso 41: updatedProject es el body
    const updatedProject = {
      title: title,
      description: description
    }

    //Paso 42: esto es para inicializar una llamadada asincronas
    try {
      await axios.put(`${import.meta.env.VITE_SERVER_URL}/projects/${params.projectId}`, updatedProject)

      // Paso 44:
      navigate(`/projects/${params.projectId}`)

    } catch (error) {
      console.log (error)
    }

  };

  const deleteProject = async () => {
    // ...delete logic should be here

    // Paso 45:
    try {
      
      await axios.delete(`${import.meta.env.VITE_SERVER_URL}/projects/${params.projectId}`)
      navigate("/projects") // dónde queremos redireccionar al usuario al hacer click al boton de delete
      
    } catch (error) {
      console.log (error)
    }
    
  }; 

  return (
    <div className="EditProjectPage">
      <h3>Edit the Project</h3>

      <form onSubmit={handleFormSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Update Project</button>
      </form>

      <button onClick={deleteProject}>Delete Project</button>      
    </div>
  );
}

export default EditProjectPage;
