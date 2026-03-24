import React from 'react'
import { useState ,useEffect} from 'react'
import axios from "axios"

const Feed = () => {
    const [posts, setPosts] = useState([
        { id: 1, image: 'https://img.freepik.com/free-vector/simple-instragram-frame-template_1199-125.jpg?semt=ais_hybrid&w=740&q=80', caption: 'First Post' }

    ])
     useEffect(() => {
        axios.get('http://localhost:3000/posts')
            .then((response) => {
                setPosts(response.data.posts)
            })
     }, [])
        
    return (
        <section className='feed-section'>
            {posts.map((post) => (
                <div key={post.id} className='post'>
                    <img src={post.image} alt={post.caption} />
                    <p>{post.caption}</p>
                </div>
            ))}
        </section>
    )
}

export default Feed
