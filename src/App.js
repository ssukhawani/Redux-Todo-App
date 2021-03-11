import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer/reducer";
import { HashRouter, Switch, Route } from "react-router-dom";
import Login from './components/Login/Login'
import EditTodo from "./components/EditTodo/EditTodo";
const { default: TodoApp } = require("./components/TodoApp/TodoApp");


const initVal = {
  todoDetails: [],
  loginDetails: [],
  flex: false,
  todoReplica: [],
  active: [true, false, false],
};
console.log(initVal.todoDetails)
const store = createStore(reducer,initVal)


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/TodoApp" component={TodoApp} />
            <Route path="/TodoApp/:id" component={EditTodo} />
          </Switch>
        </HashRouter>
      </Provider>
    </div>
  );
}

export default App;
