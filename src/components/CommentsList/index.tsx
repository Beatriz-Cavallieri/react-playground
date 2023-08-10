import React, { ChangeEvent, useState } from 'react'
import './styles.css'

const CommentsList = (props: {
    comments: Array<string>
    onSubmit: (name: string, comment: string) => void
}) => {
    const [values, setValues] = useState({
        name: "",
        comment: "",
    })

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setValues((values) => ({
            ...values,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = () => {
        props.onSubmit(values.name, values.comment)
    }
    return (
        <div className='commentsList'>
            <h4>Comments</h4>
            <ul>
                {props.comments.map(comment => <li key={comment}><p>{comment}</p></li>)}
            </ul>
            <h4>Add a comment</h4>
            <form>
                <label htmlFor="name">Your Name</label>
                <input
                    name="name"
                    type="text"
                    value={values.name}
                    onChange={handleChange} />

                <label htmlFor="comment">Your Comment</label>
                <textarea
                    name="comment"
                    rows={4}
                    value={values.comment}
                    onChange={handleChange} />
            </form>
            <br />
            <button onClick={handleSubmit}>Submit comment</button>
        </div>
    )
}

export default CommentsList