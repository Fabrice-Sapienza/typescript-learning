import React from 'react'
import { Link } from 'react-router-dom'
import { PostData } from '../interfaces'
import './postDetail.css'

interface PostDetailProps {
  onePost: PostData | null
}

const PostDetail: React.FC<PostDetailProps> = ({ onePost }) => {
  return (
    <div className='post'>
      <h2>Publication Numéro : {onePost?.id}</h2>
      <h3>Titre : {onePost?.title}</h3>
      <p>{onePost?.body}</p>
      <Link to='/'>👈 Retour page principale</Link>
    </div>
  )
}

export default React.memo(PostDetail)
