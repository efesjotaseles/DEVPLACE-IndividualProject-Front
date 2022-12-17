import React from 'react'

export default function RegisterForm() {
  return (
    <div>
        <form>
            <input type='email' placeholder='email' ></input>
            <input type='password' placeholder='password'></input>
            <input type='password' placeholder='repeat password' ></input>
            <button type='button' >Register</button>
        </form>
    </div>
    
  )
}
