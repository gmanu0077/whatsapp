// components/Conversation.jsx
import React from 'react';
import styles from '../../styles/Conversation.module.css';

const Conversation = ({ chat, user, onBack }) => {
  if(!user){
    return <p>..loading</p>
  }
  return (
    <div className={styles.conversationContainer} >
      <div className='mainhead' style={{display:'flex'}}>
      <button onClick={onBack} className={styles.backButton}>
          <i className="fa fa-arrow-left"></i>
        </button>
      <div className={styles.header}> 
        <div className={styles.headerTitle}>
          <img src={user.userpic} alt="Profile" className={styles.profilePic} />
          <div className={styles.profileInfo}>
            <span>{user.username}</span>
            <small>Click here for contact info</small>
          </div>
          <span className={styles.onlineStatus}></span>
        </div>
        <div className={styles.headerOptions}>
          <i className="fa fa-video-camera"></i>
          <i className="fa fa-phone"></i>
          <i className="fa fa-ellipsis-v"></i>
        </div>
      </div>
      </div>
     
      <div className={styles.messages}>
        {chat.map((message, index) => (
          <div key={index}>
            <div className={`${styles.message} ${styles.other}`}>
              <div className={styles.messageText}>
                {message[Object.keys(message)[0]].message}
              </div>
              <div className={styles.messageTime}>
                {message[Object.keys(message)[0]].timeStamp}
              </div>
            </div>
            <div className={`${styles.message} ${styles.you}`}>
              <div className={styles.messageText}>
                {message.you.message}
              </div>
              <div className={styles.messageTime}>
                {message.you.timeStamp}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.inputContainer}>
        <i className="fa fa-plus-circle"></i>
        <input type="text" placeholder="Message" />
        <i className="fa fa-microphone"></i>
      </div>
    </div>
  );
};

export default Conversation;
