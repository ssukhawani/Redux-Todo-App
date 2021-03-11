import Header from '../Header/Header'
import AddTodo from '../AddTodo/AddTodo'
import TodoList from '../TodoList/TodoList'
import {connect} from 'react-redux'
import {useEffect} from 'react'

 
 function TodoApp(props){
     
    const { addLoginDetails } = props

   useEffect(() => {
     var newtempLogin = JSON.parse(localStorage.getItem("tempLogin"));
     if (newtempLogin != null) {
       addLoginDetails(newtempLogin);
     }else{
         props.history.push("/")
     }
   },[addLoginDetails, props.history]);

   return (
     <div>
       <Header />
       <AddTodo />
       <TodoList />
     </div>
   );
 }

 const mapStateToProps =state =>({
     todoList:state.todoDetails
 })

 const mapDispatchToProps = (dispatch) => ({
   addLoginDetails: (val) => dispatch({ type: "ADD_LOGIN_USER", payload: val }),
 });

 export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);