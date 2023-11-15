// import React,{useState} from 'react'
// import DynamicRender from './DynamicRender'
// export default function UserC(props) {

//     const[user,setUser]=useState('usera')
// // const[username,setuserName]=useState("Hello")
// // const[password,setpassword]=useState("12345")
//     const onButtonClick =(username,password)=>{     
//         if (username==='Message from child2' && password=='12345') {
//         setUser(`${username} and ${password} ======= matched`)
//         } 
//         else{
//             setUser(`${username} and ${password} ======= matched`)
//         }
//         }    
//     return (
//     <div>
//         <h1>login Creds</h1>
//         <input type='text' placeholder='Enter username'  />
//         <input type="number" placeholder="enterpassword" />
//         <button onClick={()=>onButtonClick('Message2 from child2')}>Child 2</button>
//                     <DynamicRender user={user}/>

//     </div>
//     )   
// }

// import React, { createContext, useState } from 'react';
// import DynamicRender from './DynamicRender';
// import UserA from './UserA';

// const userDetails ={
//     username:"ankita",
//     password:"12345"
// };

// createContext()

// export default function Login() {
//     const [username, setUserName ] = useState("");
//     const [password,setPassword] = useState("");
//     const [user,setUser] = useState('User');
    

//     const handleSubmit =(event) =>{
//         event.preventDefault();
//         console.log(username,password);

//         if(username == userDetails.username && password == userDetails.password){
//             setValidation("loggedIn")
//             //console.log('user logged in'+username)
//             console.log(validation)
//         }
//         else{
//             setValidation("invalidUser")
//             console.log(validation)

//         }

//     }

//     return (
//         <div>
//         <form onSubmit ={handleSubmit}>
//             <h1>User Information Form</h1>
//             {/* <p>
//                 {validation}
//             </p> */}
//             <label>UserName</label>
//             <input 
//             type ="text" 
//             value ={username} 
//             placeholder ="enter username"
//             onChange ={(event)=>setUserName(event.target.value)}/><br></br>
//             <br></br>
            
//             <label>Password</label>
//             <input
//             type ="password"
//             value ={password} 
//             placeholder ="enter password"
//             onChange ={(event) => setPassword(event.target.value)}/><br></br>
//             <br></br>
            
//             <button type ="submit">Login</button>
//         </form>
//         <DynamicRender  validation = {validation} />
        
//     </div>
//     )
// }



