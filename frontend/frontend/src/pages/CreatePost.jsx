import React from 'react'
import axios from 'axios'
import { use } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const CreatePost = () => {
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
       await axios.post('http://localhost:3000/create-post', formData)
       .then((response) => {
           navigate("/feed")
       })
         .catch((error) => {
            console.error('Error creating post:', error)
            })
    }
    
  return ( 
    <section className='create-post-section'>
        <h1>Create Post</h1>
        <form onSubmit={handleSubmit} className='create-post-form'>
            <input type="file" name="image" accept='image/*' />
            <input type="text" name="caption" placeholder='Caption' required/>
            <button type='submit'>Submit</button>
        </form>
    </section>
  )
}

export default CreatePost
