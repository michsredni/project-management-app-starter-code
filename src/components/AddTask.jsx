
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";

function aAddTask(props) {

  // Paso 31:
  const params = useParams()
  // console.log(params.projectId)

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    // ...logic for creating a new Task should be here
    // ... the ID of the Project should be part of the Task data
    
    // Paso 32:
    const newTask = {
      title: title,
      description: description,
      projectId: Number (params.projectId) // si utilizamos Params, debemos cambiarlo a numero
    }

    //Paso 33:
    try {
      
      await axios.post(`${import.meta.env.VITE_SERVER_URL}/tasks`, newTask)

      // Paso 34: indicar a React que vuelva a buscar la información actualizada
      // Paso 35: en ProjectDetailsPage pasar por props la función de getData
      // Paso 36: ir a ProjectDetailsPage
      props.getData()
    } catch (error) {
      console.log(error)
    }
  };
  
  return (
    <div className="AddTask">
      <h3>Add New Task</h3>
      
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

        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default AddTask;