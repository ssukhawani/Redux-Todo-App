import './Login.style.css'
import PersonIcon from "@material-ui/icons/Person";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import LockIcon from "@material-ui/icons/Lock";
import {connect} from 'react-redux'
import {useState} from 'react'




function Login(props) {
  const { addLoginDetails } = props;

  const [tempLogin, setTempLogin] = useState({});

  const handelSubmit = (e) => {
    e.preventDefault();
    addLoginDetails(tempLogin);
    props.history.push("/TodoApp");
    localStorage.setItem("tempLogin",JSON.stringify(tempLogin))
  };

  const handelOnchange = (e) => {
    setTempLogin({ ...tempLogin, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="container">
        <div>
          <h2>Login</h2>
        </div>
        <form onSubmit={handelSubmit}>
          <div className="input-wrapper">
            <div className="allthree">
              <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={handelOnchange}
                required
              />
              <PersonIcon />
            </div>
            <div className="allthree">
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handelOnchange}
                required
              />
              <AlternateEmailIcon />
            </div>
            <div className="allthree">
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handelOnchange}
                required
              />
              <LockIcon />
            </div>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
    addLoginDetails: val => dispatch({type:"ADD_LOGIN_USER", payload:val})
})
export default connect(null, mapDispatchToProps)(Login);