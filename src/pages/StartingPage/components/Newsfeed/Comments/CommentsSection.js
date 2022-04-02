/* eslint-disable jsx-a11y/anchor-is-valid */
import classes from './CommentsSection.module.scss'
import newPicture from "../../../../../assets/firephoto.jpeg";
import catPicture from "../../../../../assets/cat.jpeg";



const CommentsSection = (props) => {
    return (
      <div className={classes.comments}>
        <a>
          <img
            className={classes["rounded-circle"]}
            id={classes.profilepic}
            src={catPicture}
            alt="Profile"
          />
        </a>
        <div className={classes.commentInfo}>
          <div className={classes.userInfo}>{props.commentData.username}</div>
          <div>{props.commentData.comment}</div>
          <div className={classes.dateInfo}>{props.commentData.date}</div>
        </div>
      </div>
    );
}

export default CommentsSection;