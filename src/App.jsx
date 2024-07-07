import React, { useState } from 'react'
import './App.css'
function App() {
  const[input, setInput]= useState('')
  const[data, setdata]=useState([])
  const [IsSubmitbtn, setIsSubmitbtn]= useState(true);
  const [Editbtn, setEditbtn] = useState(null);

  const handleClick = () =>{
    if(!input){
      alert("Please enter a feild")
    } else if(input && !IsSubmitbtn){
      setdata(
        data.map((elem,id)=>{
         if(id===Editbtn){
          return input   
         }
         return elem;
        })
      )
      setIsSubmitbtn(true);
      setInput('');
      setEditbtn(null);

    }
    else{
      const updated = [...data, input]
    setdata(updated)
    setInput('')
    }
   
  }

  const handleEdit = (i) => {
    const updatedEdit = data[i]
    setIsSubmitbtn(false);
    setInput(updatedEdit);
    setEditbtn(i);
  }

  const handleRemove = (i) =>{
    const Remove = data.filter((ele, id)=>{
      return i!=id
    })
    setdata(Remove)
  }

  const handleDelete = ()=>{
    setdata([])
  }
  return (
    <div>
      <div className='background'>
        <div className='container'>
          <div className='header'>
            <h2>Todo List</h2>
          </div>
          <div className='input'>
            <input type='text' placeholder='Enter a todo...' value={input} onChange={(e)=> setInput(e.target.value)}/>
            {IsSubmitbtn? <div className='btn'><button onClick={handleClick}>Add</button></div>:
            <div className='btn'><button onClick={handleClick}>Edit</button></div>}
          </div>
          {data!=[] && data.map((Ele,i)=>{
            return(
              <>
              <div className='details'>
                <p>{Ele}</p>
                <div className='icons'>
                <i class="ri-edit-circle-line"  onClick={()=>handleEdit(i)}></i>
                <i class="ri-delete-bin-6-line" onClick={()=>handleRemove(i)}></i>
                </div>
                
              </div>
              </>
            )
          })}
          {data.length>=1 && <div className='btn btn-2'><button onClick={handleDelete}>Remove All</button></div>}
        </div>
      </div>
    </div>
  )
}

export default App
