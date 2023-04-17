import './comments.scss';
import { comments } from '../../mockData';
import { useContext } from 'react';
import { AuthenticationContext } from '../../context/authenticationContext';

function Comments() {
    const { loggedUser } = useContext(AuthenticationContext);
    return (
        <div className='comments'>
            <div className="write">
                <img src={loggedUser.profilePic} alt="" />
                <input type="text" placeholder='Write a comment..' />
                <button>Send</button>
            </div>
            {comments.map((comment) => (
                <div className="comment">
                    <img src={comment.profilePic} alt="" />
                    <div className="info">
                        <span>{comment.name}</span>
                        <p>{comment.comment}</p>
                    </div>
                    <span className='date'>1 hour ago</span>
                </div>
            ))}
        </div>
    )
}

export default Comments
