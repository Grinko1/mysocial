import './Chat.scss';
import {Conversations, url} from '../../data'
import { useState } from 'react';
import Message from '../../Components/Message/Message';
import {FaHammer} from 'react-icons/fa'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {GoPrimitiveDot} from 'react-icons/go'


const Chat = () => {

    const [currentChat, setCurrentChat] = useState(null);
    const [newMessage, setNewMessage] = useState('')
    const [visiblityBlock, setVisiblityBlock] = useState(false)
  
    
    const sendMsg = () => {
        if(newMessage.length){
            setVisiblityBlock(true)
            setNewMessage('')

        }
    }
    const closeErrorWindow = () => {
        setVisiblityBlock(false)
    }

    return (
        <div className="messenger">
        <div className="chat__menu">
          <div className="chat__menu-wrapper">
            <input type="text" placeholder="Search for Friends" className="chat__menu-input" />
            {
                Conversations.map(conv=>(
                    <div className='conversation' key={conv.id}  onClick={() => setCurrentChat(conv)}>
                    <img src={`${url}${conv.profilePicture}`} alt="" className="conversation__img"/>
                    <span className="conversation__name"> {conv.username}</span>
                    {!conv.you ? <span className='conversation__newMsg'>1</span> : ''}
                    </div>
                ))
            }
          </div>
        </div>
        <div className="chat__box">
          <div className="chat__box-wrapper">
            {currentChat ? (
              <>
                <div className="chat__box-top">
                
                          <Message currentChat={currentChat} />

                </div>
                <div className={visiblityBlock ? "error__block" : 'error__block-hidden' }>
                   <p> <AiOutlineCloseCircle className='error__block-close' onClick={closeErrorWindow} /></p>
                        <h3>Ops! Something went wrong </h3>
                        <p>Please, try again later</p>
                        <p>We'll fix it As soon as posible  <FaHammer className='error__block-ham'/> </p>
                    </div>

                <div className="chat__box-bottom">
                    
                  <textarea
                    placeholder="Write something..."
                    className="chat__message-input"
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                    >

                    </textarea>
                  
                  <button className="chat__submit-btn" onClick={sendMsg} >
                    Send
                  </button>
                </div>
              </>
            ) 
            : (
              <span className="chat__noConversation">Opet a conversation to start a chat</span>
            )}
          </div>
        </div>
        <div className="chat__online">
          <div className="chat__online-wrapper">
            {/* <ChatOnline  onlineUsers={onlineUsers} currentId={user._id} setCurrentChat={setCurrentChat} /> */}
          </div>
        </div>
      </div>
    );
};

export default Chat;