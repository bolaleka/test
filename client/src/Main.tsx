import React, { Component } from "react";
import {
    Route,
    NavLink,
    BrowserRouter as Router
  } from "react-router-dom";
  import Home from "./Home";
  import Profile from "./components/Profile";

  /**
   * The main component that implement all other component using route to modify url navigation.
   */
class Main extends Component {

  
  render() {
    return (
      <Router>
            <div>
                <h1 className="title">Star Wars API Integration. 🚀</h1>
                <ul className="header">
                    <li><NavLink  to="/" onClick={() => 
                    
                    //Set to first page index whenever home navlink is click
                      localStorage.setItem('currentPage', String(1))}>Home</NavLink></li>
                    <li><NavLink to="/Profile">Profile</NavLink></li>
                </ul>
                <div className="content"> 
                  <Route exact path="/" component={Home}/> 
                  <Route  path="/Profile" component={Profile}/>
                </div>
            </div>
      </Router>
    );
  }
}
 
export default Main;