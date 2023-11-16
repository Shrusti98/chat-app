import React from 'react'
import { auth } from '../Firebase'

const LogOut = () => {

  const style = {
    button: 'bg-gray-200 px-5 py-3 hover:bg-gray-100'
  }

  const LogOut = () => {
    const signOut = () => {
      signOut(auth);
    }
  }

  return (
    <button onClick={() => auth.signOut()} className={style.button}  >LogOut</button>
  )
}

export default LogOut