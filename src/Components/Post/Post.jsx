import './Post.scss';
import {FiMoreVertical} from 'react-icons/fi'
import {url, Users} from '../../data' 
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Post = ({post, myPage=false, mainPage=false}) => {

    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLiked] = useState(false)



const myProfile = Users.find((u) => u.id === 4)?.profilePicture
const timeline = Users.filter((u) => u.id === post?.userId)[0]?.profilePicture

const myUsername = Users.find((u) => u.id === 4)?.username
const friendUsername = Users.filter((u) => u.id === post?.userId)[0]?.username

const likeHandler = () => {
    setLike(isLiked ? like -1 : like +1)
    setIsLiked(!isLiked)
}

    return (
        <div className='post'>
        <div className="post__wrapper">
            <div className="post__top">
                <div className="post__top-left">
                <Link to={`/friend/${post.userId}`}>
        <img src={`${url}${mainPage ? timeline : myProfile}`} alt="" className='post__profile-img'/>
        </Link>
        <span className="post__username">{`${mainPage ?friendUsername: myUsername }`}</span>
       
        <span className="post__date">{post.date}</span>
                </div>
                <div className="post__top-rigth">
                    <FiMoreVertical/>
                    </div>
            </div>

            <div className="post__center">
                <span className="post__text">{post.desc}</span>
                <img src={`/assets/${post.photo}`} alt="" className='post__img'/>
            </div>
            <div className="post__bottom">
                    <div className="post__bottom-left">
                      
                        <img className='like__icon' src='/assets/heart.png' alt=""  onClick={likeHandler}/>
                        <span className="post__like-counter">{like} people like it</span>
                    </div>
                    <div className="post__bottom-rigth">
                        <span className="post__comment-text">{post.comment} comments</span>
                    </div>
            </div>
            </div>            
    </div>
    );
};

export default Post;