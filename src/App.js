import './App.css';
import {useState} from 'react';
//import DynamicRender from './Components/DynamicRenering/DynamicRender'
import DynamicRender from './Components/DynamicRender/DynamicRender';
 export default function App() {
  const[user,setUser]=useState('usera')

  return (
    <div className="App">
     <DynamicRender user={user}/>
      <button onClick={()=>setUser('usera')}>Switch to User A</button>
      <button onClick={()=>setUser('userb')}>Switch to User B</button>
      <button onClick={()=>setUser('userc')}>Switch to User c</button>
    </div>
  );
}







