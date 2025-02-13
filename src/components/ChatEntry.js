import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';


const ChatEntry = (props) => {

  const changeHeart= props.liked ? '❤️': '🤍'
  console.log(props.id)
  return (
    <div className={props.sender === 'Vladimir' ? 'chat-entry local': 'chat-entry remote'}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time"><TimeStamp
        time={props.timeStamp}
        /></p>
        {<button onClick={()=>props.setUpdateHeartLikes(props.id, !props.liked)} className="like">{changeHeart}</button>}
       
      </section>
    </div>
  );
  
};

ChatEntry.propTypes = {
  sender:PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
};

export default ChatEntry;
