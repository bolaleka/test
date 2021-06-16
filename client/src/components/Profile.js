import React, { Component } from "react";

/**
 * The function get props data from Homepage and display person details in format table.
 */
class Profile extends Component {

  //Set header for the table
  renderTableHeader() {
    const data = this.props.location.aboutProps;
      let header = Object.keys(data)
      return header.map((key, index) => {
         return <th key={index}> {key.toUpperCase()}</th>
      })
    
 }

  renderTableData() {  
    const data = this.props.location.aboutProps;
       const { name, mass, height, gender, homeworld} = data //destructuring
       return (
          <tr key={name}>
            <td>{name}</td> 
             <td>{mass}</td>
             <td>{height}</td>
             <td>{gender}</td>
             <td>{homeworld}</td>
          </tr>
       )
  }

  render() {
    const data = this.props.location.aboutProps;
    //If name is not clicked and data is undefine, user should go back to home page to
    //select a name
    if(data === undefined) {
      return (
        <div>
            <h1 id='title'>React Dynamic Table</h1>
            <h4 id='title' style={{color: "red"}}>Please click a name from HomePage to view details.</h4>
        </div>
      )
    }
    
    return (
      <div>
      <h1 id='title'>React Dynamic Table</h1>
      <table id='table'>
         <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.renderTableData()}
         </tbody>
      </table>
   </div>
    );
  }
}

export default Profile;