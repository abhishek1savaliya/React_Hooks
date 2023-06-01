import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Datafetching() {
    const [post, setpost] = useState([])
    const [id, setid] = useState(1)
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) => {
                setpost(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [id])
    return (
        <div>
            <input type="text" value={id} onChange={e=>setid(e.target.value)} />
            <div>{post.title}</div>
            {/* <ul>
                {post.map(post => <li key={post.id}>{post.title}</li>)}
            </ul> */}
        </div>
    )
}

export default Datafetching
