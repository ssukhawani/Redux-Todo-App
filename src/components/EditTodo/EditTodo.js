import './EditTodo.style.css'
import Header from '../Header/Header'
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import { ToastContainer, toast } from "material-react-toastify";
import "material-react-toastify/dist/ReactToastify.css";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import {useState,useEffect} from 'react'
import {connect } from 'react-redux'

function EditTodo (props){
    const [temp, setTemp] = useState({});
    const { id } = props.match.params
    const { todoList, flexRevert, updateTodo } = props; 


    useEffect(()=>{
        var newobj = todoList[id-1]
        setTemp(newobj)
    },[id, todoList])

    const handelOpen = () => {
      toast.info("Task Updated !!");
    };

    const handelSubmit = (e) => {
      e.preventDefault();
        updateTodo({id:Number(id)-1, object:temp});
        flexRevert(true);
        props.history.push('/TodoApp')  
    };



    const handelChange = (e)=>{
        setTemp({...temp,[e.target.name]:e.target.value})
    }
 
    return (
      <div>
        <Header />
        <form className="create-note" onSubmit={handelSubmit}>
          <input
            name="title"
            placeholder="Title"
            onChange={handelChange}
            value={
              temp.title ? temp.title.slice(0, 20) : temp.title
            }
          />

          <textarea
            name="content"
            onChange={handelChange}
            value={temp.content}
            placeholder="Add your to do..."
            rows="3"
          />

          <div className="btn">
            <Zoom in={true}>
              <Tooltip
                title="Update"
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
                  <ChevronLeftIcon />
                </Fab>
              </Tooltip>
            </Zoom>
          </div>
          <ToastContainer />
        </form>
      </div>
    );

}

const mapStateToProps = state =>({
    todoList:state.todoDetails
})

const mapDispatchToProps = (dispatch) => ({
  flexRevert: (val) => dispatch({ type: "FLEX_REVERT", payload: val }),
  updateTodo : val => dispatch({type:"UPDATE_TODO",payload:val})
});

export default connect(mapStateToProps, mapDispatchToProps)(EditTodo);


