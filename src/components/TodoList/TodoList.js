import './TodoList.style.css'
import {connect} from 'react-redux'
import TodoCard from '../TodoCard/TodoCard'


const TodoList = (props) =>{
    const { todoList } = props;



    return (
      <div className="todo-list-container">
        {todoList &&
          todoList
            .map((item, ind) => <TodoCard item={item} key={ind} id={ind} />)}
        
      </div>
    );
}

const mapStateToProps = (state) => ({
  todoList: state.todoReplica ? state.todoReplica : [],
});


export default connect(mapStateToProps,null)(TodoList);