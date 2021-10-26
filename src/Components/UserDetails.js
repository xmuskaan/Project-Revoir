import { useLocation, useParams } from "react-router-dom";
import { useEffect,useState } from "react";
const UserDetails = () => {
    
    const [postShow, setpostShow] = useState([]);
    const location=useLocation();
    const { id } = useParams();
    
    useEffect(() => {
        const fetchingPost = async () => {
          fetch(`https://gorest.co.in/public/v1/users/${id}/posts`)
          .then(res => {
          return res.json();
          })
         .then(data => {
           setpostShow(data.data);
          }) 
        }
        fetchingPost();
      }, [location.state.userID])
      
    
     
    return (  
    <div className="userDe">

        <div className="uDetails" key={location.state.userID}>       
        <p className="userID">ID: {location.state.userID}</p>
        <p className="userName">Name: {location.state.username} </p>
        <p className="userMail">Email: {location.state.useremail}</p>
        <p className="userGender">Gender: {location.state.usergender}</p>
        <p className="userStatus">Status :{location.state.userstatus}</p>
        </div>
      
            {
                postShow.map(post => {
                    return   <div className="post" key={post.id}>
                                <p>Title: {post.id}</p>
                                <p>Body: <br/> {post.body}</p>
                            </div>
                })
            }
       
    </div>
    );
}
 
export default UserDetails;