import React, { useEffect, useState } from 'react'
import axios from 'axios'

function DataFetchinOne() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [posts, setPosts] = useState([])

    useEffect(()=>{
      axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then((res)=>{
        setLoading(false)
        setPosts(res.data)
        setError('')
      })
      .catch((err)=>{
        setLoading(false)
        setPosts({})
        setError('Something Went Wrong')
       
      })
    },[])
  return (
    <div>
      {loading ? 'Loading' :posts.title}
      {error ? error : null}
    </div>
  )
}

export default DataFetchinOne
