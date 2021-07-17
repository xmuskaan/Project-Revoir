import {useEffect,useState} from 'react';
import {useHistory} from 'react-router-dom';
const Users = () => {

    const [userData, setuserData] = useState([]);
    
    const history= useHistory();
    
    useEffect(() => {
      const fetchingData = async () => {
        fetch('https://gorest.co.in/public/v1/users')
        .then(res => {
        return res.json();
        })
       .then(data => {
         setuserData(data.data);
        }) 
      }
      fetchingData();
    }, [])

    return ( 
         <div className="userData">
      {userData.map((user)=> {
        return <div className="uData" key={user.id} 
         onClick = {()=>{
           history.push('/users/user-id', 
           { 
             userID:user.id,
             username:user.name,
             useremail:user.email,
             usergender:user.gender,
             userstatus:user.status
           })
        }}>
        <p className="userName"> {user.name} </p>
        <p className="userEmail"><a href={"mailto:" + user.email}>{user.email}</a></p>
   
        
        </div>
        })}
        
    </div>
  
     );
}
 
export default Users;