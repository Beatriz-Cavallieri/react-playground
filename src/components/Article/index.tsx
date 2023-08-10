import React, { useEffect, useState } from 'react'
import CommentsList from '../CommentsList'
import './styles.css'

const Article = () => {
  const [comments, setComments] = useState<Array<string>>([]);

  const loadComments = async () => {
    const response = ["lorem", 'ipsum dolor', 'sit amet'] // Should be an API request in a real page
    setComments(response)
  }

  useEffect(() => {
    loadComments();
  }, []); 

  const addComment = async (name: string, comment: string) => {
    setComments((comments) => [...comments, comment] ) // Should be an API request in a real page
  }

  return (
    <div>
      <h3>Parent component</h3>
      <div className='parentWrapper'>
        <article>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate dapibus libero vel pharetra. Aliquam dignissim eros nisi, nec maximus ex accumsan et. Curabitur finibus nisi et orci tempus bibendum. Sed ut libero ullamcorper, dignissim velit quis, congue eros. </article>
        <h3>Child component</h3>
        <div className='childWrapper'>
          <CommentsList
            comments={comments}
            onSubmit={addComment} />
        </div>
      </div>
    </div>
  )
}

export default Article