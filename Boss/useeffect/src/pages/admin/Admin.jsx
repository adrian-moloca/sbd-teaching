import React from 'react'

const Admin = () => {
  return (
    <div>
        <h2>Admin (Protected)</h2>
        <h5>Logged in as {window.localStorage.getItem('user')}</h5>
    </div>
    
  )
}

export default Admin