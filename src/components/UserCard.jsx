import React from 'react'

const UserCard = ({user}) => {

  console.log(user)
  return (
    <div className='card'>
      <section>
        <img src={user?.picture.large} alt="" />
      </section>
        <h2>{user?.name.first} {user?.name.last} </h2>
        <ul>
          <li><span>Numero:</span><span>{user?.cell}</span></li>
          <li><span>Email:</span> <span>{user?.email} </span></li>
          <li><span>Genero:</span><span>{user?.gender}</span></li>
          <li><span>Pais:</span> <span>{user?.location.country}</span></li>
          <li><span>Ciudad:</span><span>{user?.location.city}</span> </li>
        </ul>
        
    </div>
  )
}

export default UserCard
