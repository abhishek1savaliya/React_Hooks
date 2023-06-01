import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Datafetching() {
    const [post, setpost] = useState([])
    const [id, setid] = useState(1)
    const [idFromButtonClick, setidFromButtonClick] = useState(1)
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then((res) => {
                setpost(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [idFromButtonClick])
    const handleClick = ()=>{
        setidFromButtonClick(id)
    }
    return (
        <div>
            <input type="text" value={id} onChange={e=>setid(e.target.value)} />
            <button type='button' onClick={handleClick}>Fetch Post</button>
            <div>{post.title}</div>
            {/* <ul>
                {post.map(post => <li key={post.id}>{post.title}</li>)}
            </ul> */}
        </div>
    )
}

export default Datafetching
