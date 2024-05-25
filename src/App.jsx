import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import './App.css'
import UserCard from './components/UserCard'

function App() {
  const [users, setUsers] = useState()
   const [number, setnumber] = useState(1)

    useEffect(()=>{
      const url=`https://randomuser.me/api/?results=${number}`
      axios.get(url)
      .then(res=>setUsers(res.data.results))
      .catch(err=> console.log(err))
      
    },[number])

    const textInput = useRef()
    
    const handleSubmit=(e)=>{
      e.preventDefault()
      console.log(textInput.current.value)
      setnumber(textInput.current.value)
    }
console.log(users)

  return (
    <>
      <div  className='main'>
        <h1 className='heart'>usuarios</h1>
        <form onSubmit={handleSubmit}>
        <input className='input' type="number" placeholder='Enter the Number' ref={textInput}/>
        <button className="button" >Search</button>
        </form>
        <div className="cards">
        {
          users?.map(user =>(
            <UserCard
            key={user.email}
            user={user}
            ></UserCard>
          )
          )
        }
        </div>

      </div>
    </>
  )
}

export default App
