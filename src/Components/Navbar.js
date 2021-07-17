import {Link} from "react-router-dom"; 

const Navbar = () => {

    
    return (
        
        <nav className="navbar">
        
        <Link to = "/users">User List</Link>
        <p className="click">Click above to begin!</p>
        </nav> 
    
     );
}
 
export default Navbar;