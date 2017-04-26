import React from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.css';


function Login(props) {

    return(
      
      <div className="col-md-offset-3 col-md-7">
        <form name="form" className="form-validation" onSubmit={props.handleSubmit}>
          <div className="text-danger wrapper text-center">
          </div>
            <div className="list-group list-group-sm">
            <div className="list-group-item">
                <input type="email" placeholder="Email" className="form-control no-border" required/>
            </div>
            <div className="list-group-item">
               <input type="password" placeholder="Password" className="form-control no-border" required/>

            </div>
              <button type="submit" className="btn btn-lg btn-primary btn-block">Log in</button>

            </div>
            <div className="text-center"><a>Forgot password?</a></div>
            <div className="line line-dashed"></div>
              <Link to="/Signup"><button className="btn btn-lg btn-default btn-block">Create a new account</button></Link>
          </form>
        </div>
    )
}
export default Login;
