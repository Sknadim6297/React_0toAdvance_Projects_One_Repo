import React, { useState } from 'react'

const FormHandeling = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: ''
    })
    const [error,setError]=useState({})

    const handleOnChange  = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })
        setError({
            ...error,
            [e.target.name]: ''
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {}
       if(!formData.username) return setError({username: 'Username is required'})
        if(!formData.email) return setError({email: 'Email is required'})
            else if(!formData.email.includes('@')) return setError({email: 'Email is not valid'})
        setError(newErrors)
    
    if(!Object.keys(newErrors).length){
        alert('Form Submitted')
        console.log(formData);
        setFormData({
            username: '',
            email: ''
        })

    }
    }
  return (
    <div>
    <h1>Form Handeling</h1>
    <form onSubmit={handleSubmit}>
    <input type='text' name='username' value={formData.username} onChange={handleOnChange} placeholder='Enter Your Username'/>
    {error.username &&   alert('Username is required')}
    <br/>
    
    <input type='text'  name='email' value={formData.email} onChange={handleOnChange} placeholder='Enter Your Email'/>
    {error.email &&  alert('Please Enter Vaild Email')}
    <br/>
    <button>Submit</button>
    </form>
    

    </div>
  )
}

export default FormHandeling
