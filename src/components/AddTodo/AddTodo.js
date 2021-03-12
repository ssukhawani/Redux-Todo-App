import './AddTodo.style.css'
import {useState} from 'react'
import {connect} from 'react-redux'
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import { ToastContainer, toast } from "material-react-toastify";
import "material-react-toastify/dist/ReactToastify.css";



const AddTodo = (props)=>{
    var no = 0;
    const [isexpanded, setExpanded] = useState(false)
    const [tempTodo, setTempTodo] = useState({checked:false,title:"",content:"",todoid:no})
    const { addTodoDetails, flexRevert, setDisplayMenu } = props;


    const handelClickTA = ()=>{
        setExpanded(true)
        setDisplayMenu(false) 
    }

    const handelChange = (e)=>{

        setTempTodo({...tempTodo,[e.target.name]:e.target.value})
        // console.log(tempTodo)
    }

    const handelSubmit = (e)=>{
        e.preventDefault();
        addTodoDetails(tempTodo)
        setTempTodo({ ...tempTodo, title: "", content: "", todoid: tempTodo.todoid+1 });
        flexRevert(true)
    }

    const handelOpen = ()=>{
      toast.success("New Task Added !!");
    }




    return (
      <div className="main">
        <form className="create-note" onSubmit={handelSubmit}>
          {isexpanded && (
            <input
              name="title"
              placeholder="Title"
              onChange={handelChange}
              value={
                tempTodo.title ? tempTodo.title.slice(0, 20) : ''
              }
            />
          )}

          <textarea
            name="content"
            onClick={handelClickTA}
            onChange={handelChange}
            value={tempTodo.content? tempTodo.content : ""}
            placeholder="Add your to do..."
            rows={isexpanded ? "3" : "1"}
          />
          <div className="btn">
            {isexpanded && (
              <Zoom in={isexpanded}>
                <Tooltip
                  title="Add To-Do"
                  aria-label="add"
                  TransitionComponent={Zoom}
                  arrow
                >
                  <Fab
                    color="primary"
                    type="submit"
                    className="button"
                    onClick={handelOpen}
                  >
                    <AddIcon />
                  </Fab>
                </Tooltip>
              </Zoom>
            )}
          </div>
          <ToastContainer />
        </form>
      </div>
    );
}


const mapDispatchToProps = (dispatch) => ({
  addTodoDetails: (val) => dispatch({ type: "Add_TODO_DETAILS", payload: val }),
  flexRevert: (val) => dispatch({ type: "FLEX_REVERT", payload: val }),
  setDisplayMenu: (val) => dispatch({ type: "SET_DISPLAY_MENU", payload: val }),
});

export default connect(null, mapDispatchToProps)(AddTodo);
