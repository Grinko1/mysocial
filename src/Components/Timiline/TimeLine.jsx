import './Timeline.scss';
import {Posts} from '../../data'
import Post from '../Post/Post';
import Share from '../Share/Share';

const TimeLine = () => {
    
    return (
        <div className='timeline'>
             <Share/>
            <div className="timeline__wrapper">
               
                {
                   Posts.map(post => (
                       <Post key={post.id} post={post} mainPage={true}/>
                   ))
                }

            </div>
            
        </div>
    );
};

export default TimeLine;