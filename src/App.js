import { useState } from 'react';
import{data} from './data'
import './App.css';
import Slider from './Slider';

function App() {
  const[present, setPresent]=useState(data);

  const removePresent=(id)=>{
  let newPresent=present.filter((present)=>present.id!==id);
    setPresent(newPresent)
  }
  return (<div>
    <div className='container'>
      <h1>Wish list of my daughter</h1>
    </div>
    {present.map((element=>{
      const{id,gift,image}=element;
      return(<div key={id}>
        <div className='container'>
          <h2>{id}-{gift}</h2>
        </div>
        <Slider imageProps={image}/>
        <div className='container'>
          <button onClick={()=>removePresent(id)}>remove</button>
        </div> 
      </div>
      )
    }))}
    <div className='container'>
      <button className='cta' onClick={()=>setPresent([])}>delete all</button>
    </div>
    </div>
  );
}

export default App;
