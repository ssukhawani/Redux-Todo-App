import './ButtonDiv.style.css'
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import '../TodoCard/TodoCard.style.scss'

function ButtonDiv(){


    return (
      <div className="Buttons-div">
        <CheckCircleIcon className="btns" style={{ fontSize: "30px", marginBottom:"20px",}} />
        <DeleteIcon className="btns" style={{ fontSize: "30px" }} />
        <EditIcon className="btns" style={{ fontSize: "30px" }} />
      </div>
    );
}
export default ButtonDiv;