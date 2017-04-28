import React from 'react';
import './LoginForm.css';
import Signup from './Signup';

function Login(props) {

    return(

      <div className="col-md-offset-3 col-md-7">
        <form name="form" className="form-validation">
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

          </form>
        </div>
    )
}
export default Login;
