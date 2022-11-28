import React, { useState, useEffect } from 'react'
import PostsList from '../components/PostsList'
import { PostData } from '../interfaces'
import './posts.css'

const Posts: React.FC = () => {
  const [allPosts, setAllPosts] = useState<PostData[] | null>(null)
  const [numberOfPosts, setNumberOfPosts] = useState<number>(
    Number(localStorage.getItem('number')) || 3,
  )

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${numberOfPosts}`,
      )
      const data: PostData[] = await response.json()
      setAllPosts(data)
    }
    getPosts()
  }, [numberOfPosts])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumberOfPosts(Number(e.target.value))
    localStorage.setItem('number', e.target.value)
  }

  return (
    <div className='posts-container'>
      <h1>Page principale</h1>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor='posts'>Nombre de publication {numberOfPosts}</label>
        <input type='range' min={1} max={20} onChange={handleChange} value={numberOfPosts} />
        <PostsList allPosts={allPosts} />
      </div>
    </div>
  )
}

export default React.memo(Posts)
