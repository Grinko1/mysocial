import './Message.scss';
import {url} from '../../data'

const Message = ({currentChat}) => {

    return (
        <>
        {currentChat && (
            <>
               <div className='message'>
        <div className="message_top">
            <img src={`${url}${currentChat.profilePicture}`} alt="" className='message_img'/>
            <p className='message__text'>{currentChat.message}</p>
        </div>
        <div className="message__bottom">
       22 minuts ago
        </div>
    </div>
    {
        currentChat.you && (
            <div className='message_own'>
        <div className="message_top">
            <img src="/assets/person/4.jpeg" alt="" className='message_img'/>
            <p className='message__text'>{currentChat.you}</p>
        </div>
        <div className="message__bottom">
       15 minuts ago
        </div>
    </div>
        )
    }
    
            </>
        )}
     
    </>
    );
};

export default Message;