import { Component } from 'react';
import { NavLink} from 'react-router-dom';
import '../CSS/Style.css';

/**
 * Pagination class implementation allow a particular people page
 * to be display when a page number is selected.
 */
class Pagination extends Component {
    
    render() {
        let active = 0;
        let items = [];

        //Loop to display pagination page number with NavLink element
        for (let number = 1; number <= 9; number++) {
            active = number
            items.push( 
                <NavLink 
                    to={{ pathname: '/', hash: `/Home/page=${active}`}}
                    onClick={() => localStorage.setItem('currentPage', number)}
                    key={number} 
                    activeClassName={items[number]?"active":null} >{number}
                </NavLink>    
            );
        }
        return(
            <div className="pagination">
                <h4 style={{}}>Page: {localStorage.getItem('currentPage')} of 9</h4>
                <NavLink 
                    activeStyle={{fontWeight: "bold",color: "red", backgroundColor: "#F4F6F7"}} 
                    activeClassName={null} to="#">{"<"}
                </NavLink> 
                    {items}
                <NavLink
                    activeStyle={{fontWeight: "bold",color: "red", backgroundColor: "#F4F6F7"}}
                    activeClassName={null}to="#">{">"}
                </NavLink>
            </div>
        );
    }       
}
export default Pagination;