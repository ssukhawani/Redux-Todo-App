import './Header.style.css'
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import {connect} from 'react-redux'
// import {useState} from 'react'




function Header(props) {

  const {
    logedUser,
    flex,
    completeactivated,
    incompleteActivated,
    allActivated,
    initialTodo,
    active,
    setActive,
    displayMenu,
    setDisplayMenu,
  } = props;


  const completeActivated=()=>{
    var todoReplica = initialTodo.filter(item=>item.checked === true)
    completeactivated(todoReplica);
    setActive([false, false, true]);
  }

  const handelIncomplete=()=>{
    var todoReplica = initialTodo.filter((item) => item.checked !== true);
    incompleteActivated(todoReplica);
    setActive([false,true,false])
  }

  const handelAll = ()=>{
    var todoReplica = initialTodo;
    allActivated(todoReplica);
    setActive([true, false, false]);
  }

  
  return (
    <div className="headerWrapper">
      <header>
        <h1>To Do Keeper</h1>
        <AccountCircleIcon
          style={{ fontSize: "40px", margin: "0 20px" }}
          onClick={() => setDisplayMenu(!displayMenu)}
        />
      </header>
      <div className={`${displayMenu ? "block" : ""} menu`}>
        {logedUser.map((item) => {
          return (
            <>
              <h3>{item.username}</h3>
              <span>{item.email}</span>
            </>
          );
        })}
      </div>
      <div className={`${flex ? "flex" : ""} visibility-filter`}>
        <div
          className={`${active[0] ? "activated" : ""} all`}
          onClick={handelAll}
        >
          All
        </div>

        <div
          className={`${active[1] ? "activated" : ""} all`}
          onClick={handelIncomplete}
        >
          Incomplete
          <div className="red before heartbeat">
            {initialTodo.length !== 0
              ? initialTodo.filter((item) => item.checked !== true).length
              : 0}
          </div>
        </div>

        <div
          className={`${active[2] ? "activated" : ""} all`}
          onClick={completeActivated}
        >
          Complete
          <div className="before heartbeat">
            {initialTodo.length !== 0
              ? initialTodo.filter((item) => item.checked === true).length
              : 0}
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  logedUser: state.loginDetails,
  flex: state.flex,
  initialTodo: state.todoDetails,
  active:state.active,
  displayMenu:state.displayMenu
});

const mapDispatchToProps = (dispatch) => ({
  completeactivated: (val) => dispatch({ type: "COMPLETE", payload: val }),
  incompleteActivated: (val) =>
    dispatch({ type: "COMPLETE_DATV", payload: val }),
  allActivated: (val) => dispatch({ type: "ALL_ACT", payload: val }),
  setActive: (val) => dispatch({ type: "SET_ACTIVE_DIV", payload: val }),
  setDisplayMenu: (val) => dispatch({ type: "SET_DISPLAY_MENU", payload: val }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
