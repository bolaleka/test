import {useQuery} from '@apollo/client';
import { NavLink} from 'react-router-dom';
import Pagination from './Pagination';
import PAGE_QUERY from '../GraphQL/Queries';
import '../CSS/Style.css';


//This function retrieve graphql data and set a table to display on browser.
 function GetPages() {

   //Get the current page number from Pagination component
   //and pass it as a value to useQuery funtion.
   let pageID = localStorage.getItem('currentPage')
   let defaultID = 1;
   
    const {error, loading, data} = useQuery(PAGE_QUERY, {variables: {id: !pageID?defaultID:pageID}});

    if (loading) return <h5 className="title">Loading...</h5>;
    if (error) return `Error! ${error.message}`
    
    //This checks if we sucessfully retrieve data from GraphQL server
    //and display the date in table format.
    if(data) {
        return (
            <div>
               <h1 id='title'>React Dynamic Table</h1>
               <Pagination/>
               <table id='table'>
                  <tbody>
                     <tr>{renderTableHeader(data)}</tr>
                     {renderTableData(data)}
                  </tbody>
               </table>
            </div>
         )
    }
    return null
   
}

//Function to render the table header
function renderTableHeader(data) {
    
    let header = Object.keys(data.page.results[0])
    return header.map((key, index) => {
       return <th key={index}> {key.toUpperCase()}</th>
    })
 }

 //Render the require deatails from the data and 
 //set person name to navigate profile component when click.
 function renderTableData(data) {  
    return data.page.results.map((result) => {
       const { name, mass, height, gender, homeworld} = result;

       return (
          <tr key={name}>
            <td>
            <NavLink to={{
                pathname: `/Profile/search=${name}`,
                aboutProps: result
                  }}
            style={{ textDecoration: 'none'}}>{name}
            </NavLink>
             </td> 
             <td>{mass}</td>
             <td>{height}</td>
             <td>{gender}</td>
             <td>{homeworld}</td>
          </tr>
       )
    })
 }
export default GetPages;