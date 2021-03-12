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
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";


const TodoCard = (props)=>{
    const {
      item,
      id,
      deleteTodo,
      checkedTrue,
      flexRevert,
      active,
      setActive,
      todoList
    } = props;


    const handelIsDone = (checkid) => {
      toast.info("Task Completed Sucessfully !!");

      if (active[0]) {
        checkedTrue({ id: id, true: true });
      } else if (active[1]) {
        var newid = todoList.findIndex((item, ind) => item.todoid === checkid);
        checkedTrue({ id: newid, true: true });
      }

      if (active[1]) {
        setActive([true, false, false]);
      }
    };

    const handelDelete = (checkid)=>{
        toast.error("Task Deleted !!");

        if(active[0]){
          deleteTodo(id);
        }else if (active[1]){
          var newid = todoList.findIndex((item,ind) => item.todoid === checkid);
          deleteTodo(newid)
        }else if(active[2]){
          var newid2 = todoList.findIndex(
            (item, ind) => item.todoid === checkid
          );
          deleteTodo(newid2);
        }

         if (active[1] || active[2]) {
              setActive([true, false, false]);
         }
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
            <Tooltip
              title="Complete"
              aria-label="add"
              TransitionComponent={Zoom}
              arrow
            >
              <CheckCircleIcon
                className={`${item.checked ? "hide" : ""} btns`}
                style={{
                  fontSize: "28px",
                  marginBottom: "20px",
                }}
                onClick={() => handelIsDone(item.todoid)}
              />
            </Tooltip>
            <Tooltip
              title="Delete"
              aria-label="add"
              TransitionComponent={Zoom}
              arrow
            >
              <DeleteIcon
                className="btns"
                style={{ fontSize: "28px" }}
                onClick={() => handelDelete(item.todoid)}
              />
            </Tooltip>
            <Tooltip
              title="Edit"
              aria-label="add"
              TransitionComponent={Zoom}
              arrow
            >
              <EditIcon
                className={`${item.checked ? "hide" : ""} btns`}
                style={{ fontSize: "28px" }}
                onClick={handelEdit}
              />
            </Tooltip>
          </div>
        </div>
        <ToastContainer />
      </div>
    );
}

const mapStateToProps = state => ({
  active:state.active,
  todoList:state.todoDetails
})


const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (val) => dispatch({ type: "DELETE_TODO", payload: val }),
  checkedTrue: (val) => dispatch({ type: "CHECKED_TRUE", payload: val }),
  flexRevert: (val) => dispatch({ type: "FLEX_REVERT", payload: val }),
  setActive: (val) => dispatch({ type: "SET_ACTIVE_DIV", payload: val }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(TodoCard));