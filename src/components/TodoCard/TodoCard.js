import '../TodoList/TodoList.style.css'
import {connect} from 'react-redux'
import './TodoCard.style.scss'
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { ToastContainer, toast } from "material-react-toastify";
import "material-react-toastify/dist/ReactToastify.css";
import { withRouter } from "react-router";
import {Link} from 'react-router-dom'


const TodoCard = (props)=>{
    const { item, id, deleteTodo, checkedTrue, flexRevert } = props;


    const handelIsDone= ()=> {
        toast.info("Task Completed Sucessfully !!");
        checkedTrue({id:id,true:true})
    }

    const handelDelete = ()=>{
        deleteTodo(id);
        toast.error("Task Deleted !!");
    }

    const handelEdit=()=>{
      props.history.push(`/TodoApp/${id+1}`);
      flexRevert(false)
    }
        

    return (
      <div>
        <div className={`${item.checked ? "taskdone" : ""} todo-card`}>
          <h3 className={`${item.checked ? "doneh3" : ""} title`}>
            {item.title.length !== 0 && item.title.slice(0, 20)}
          </h3>
          <div className="overflow">
            <p className={`${item.checked ? "donep" : ""} para`}>
              {item.content.length !== 0 && item.content.slice(0, 45)}
              {item.content.length > 45 ? (
                <Link to={`/TodoApp/${id + 1}`} style={{ marginLeft: "5px" }}>
                  ...Read
                </Link>
              ) : null}
            </p>
          </div>
          <div id="buttons">
            <CheckCircleIcon
              className={`${item.checked ? "hide" : ""} btns`}
              style={{
                fontSize: "28px",
                marginBottom: "20px",
              }}
              onClick={handelIsDone}
            />
            <DeleteIcon
              className="btns"
              style={{ fontSize: "28px" }}
              onClick={() => handelDelete()}
            />
            <EditIcon
              className={`${item.checked ? "hide" : ""} btns`}
              style={{ fontSize: "28px" }}
              onClick={handelEdit}
            />
          </div>
        </div>
        <ToastContainer />
      </div>
    );
}


const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (val) => dispatch({ type: "DELETE_TODO", payload: val }),
  checkedTrue: (val) => dispatch({ type: "CHECKED_TRUE", payload: val }),
  flexRevert: (val) => dispatch({ type: "FLEX_REVERT", payload: val }),
});

export default connect(null, mapDispatchToProps)(withRouter(TodoCard));