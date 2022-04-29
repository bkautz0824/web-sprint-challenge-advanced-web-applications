import React, { useState } from 'react'
import PT from 'prop-types'
import { useHistory } from 'react-router-dom'

const initialFormValues = {
  username: '',
  password: '',
}
export default function LoginForm(props) {
  const [values, setValues] = useState({username:"", password: ""})
  // ✨ where are my props? Destructure them here
  const { push } = useHistory()

  const onChange = evt => {
    const { id, value } = evt.target
    setValues({ ...values, [id]: value })
  }

  const onSubmit = evt => {
    evt.preventDefault()
    axios.post('http://localhost:9000/api/login', value)
    .then(res => {
      console.log(res)
      localStorage.setItem('token', res.data.payload)
    })
    .catch(err => {
      console.log({err})
    })
    // ✨ implement
  }

  const isDisabled = () => {
    // ✨ implement
    // Trimmed username must be >= 3, and
    // trimmed password must be >= 8 for
    // the button to become enabled
  }

  return (
    <form id="loginForm" onSubmit={onSubmit}>
      <h2>Login</h2>
      <input
        maxLength={20}
        value={values.username}
        onChange={onChange}
        placeholder="Enter username"
        id="username"
      />
      <input
        maxLength={20}
        value={values.password}
        onChange={onChange}
        placeholder="Enter password"
        id="password"
      />
      <button disabled={isDisabled()} id="submitCredentials">Submit credentials</button>
    </form>
  )
}

// 🔥 No touchy: LoginForm expects the following props exactly:
LoginForm.propTypes = {
  login: PT.func.isRequired,
}
