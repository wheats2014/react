import React,{Component, PropTypes} from 'react';
export default function CommentList({comments}) {
    return(
        <div>
            <ul className="comment-box">
                {comments.map((entry, index) => (
                    <li key={`response-${index}`} className="comment-item">
                        <p className="comment-item name">{entry.name}</p>
                        <p className="comment-item content">{entry.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}