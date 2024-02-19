import React from 'react'

const PostDetail = async ({ params: { postId }}) => {
  return (
    <div>PostDetail: {postId[0]}</div>
  )
}

export default PostDetail