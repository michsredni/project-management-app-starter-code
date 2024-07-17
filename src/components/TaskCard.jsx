
function TaskCard(props) {

  // Paso 18: destrructurar el props
  const {title, description} = props.eachTask
  // Paso 19: ir a ProjectDetailsPage
  
    return (
      <div className="TaskCard card">
        <h3>{title}</h3>
        <h4>Description:</h4>
        <p>{description}</p>
      </div>
    );
  }
  
  export default TaskCard;