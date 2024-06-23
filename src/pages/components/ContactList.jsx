// components/ContactList.jsx
import React, { useState } from 'react';
import styles from '../../styles/ContactList.module.css';

const ContactList = ({ contacts, onSelectContact, onMarkAsUnread, onDeleteConversation }) => {
  const [activeContact, setActiveContact] = useState(null);

  const handleOpenModal = (userId) => {
    setActiveContact(userId);
  };

  const handleCloseModal = () => {
    setActiveContact(null);
  };

  return (
    <div className={styles.listContainer}>
      <div className={styles.title}>Chats</div>
      {contacts.map((contact) => (
        <div key={contact.userId} className={styles.contactItem}>
          <img src={contact.profilePictureURL} alt={contact.name} className={styles.img} />
          <div className={styles.div2} onClick={() => onSelectContact(contact.userId)}>
            <div className={styles.div3}>{contact.name}</div>
            <div className={styles.div4}>
              {contact.chat.length > 0 ? contact.chat[contact.chat.length - 1][Object.keys(contact.chat[contact.chat.length - 1])[0]].message : 'No messages yet'}
            </div>
          </div>
          {contact.unreadCount > 0 && <div className={styles.unreadCount}>{contact.unreadCount}</div>}
          <div className={styles.optionsButton} onClick={() => handleOpenModal(contact.userId)}>
            <i className="fa fa-ellipsis-v"></i>
          </div>
          {activeContact === contact.userId && (
            <div className={styles.modal}>
              <div className={styles.modalOption} onClick={() => { onMarkAsUnread(contact.userId); handleCloseModal(); }}>Mark as unread</div>
              <div className={styles.modalOption} onClick={() => { onDeleteConversation(contact.userId); handleCloseModal(); }}>Delete</div>
              <div className={styles.modalOption} onClick={handleCloseModal}>Cancel</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ContactList;
