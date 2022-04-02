import classes from "./Newsfeed.module.scss";
import profilePicture from "../../../../assets/firephoto.jpeg";
import { FaEllipsisH, FaThumbsUp, FaComment, FaShare } from "react-icons/fa";
import CommentsSection from "./Comments/CommentsSection";
import { useState } from "react";

const Newsfeed = (props) => {
  // const todaysDate = new Date('29.03.2021'); // to be used with input field to generate new comment

  const [reactions, setReactions] = useState({
    likesNumber: props.postData.numberOfLikes,
    sharesNumber: props.postData.numberOfShares,
  });

  const [profileOptionsVisible, setProfileOptionsVisible] = useState(false);

  const toggleReactions = (reactionType) => {
    if (reactionType === "likes") {
      setReactions((prevState) => {
        return {
          ...prevState,
          likesNumber: prevState.likesNumber + 1,
        };
      });
    } else {
      setReactions((prevState) => {
        return {
          ...prevState,
          sharesNumber: prevState.sharesNumber + 1,
        };
      });
    }
  };

  const deleteThisPost = () => {
    props.removePost(props.postData.id);
  };

  const toggleProfileState = () => {
    setProfileOptionsVisible((prevState) => {
      return !prevState;
    });
  };

  return (
    <div className={classes.newsFeed}>
      <div className={classes["main-div"]}>
        <div className={classes["user-info"]}>
          <div className={classes.postAuthor}>
            <img
              className={classes["rounded-circle"]}
              id={classes.profilepic}
              src={profilePicture}
              alt="Profile"
            />
            <span id={classes["username"]}>{props.postData.username}</span>
          </div>
          <div
            className={classes["context-menu"]}
            onClick={toggleProfileState}
            tabIndex="1"
          >
            {/* <div className={classes["context-menu"]} onClick={toggleProfileState} onBlur={toggleProfileState} tabIndex="1"> */}
            <a href="#" id="context-menu-button">
              <FaEllipsisH />
            </a>
            {profileOptionsVisible && (
              <div className={classes["context-menu-dropdown"]}>
                <button onClick={deleteThisPost}>Delete this post</button>
              </div>
            )}
          </div>
        </div>

        <div>
          <img className={classes["post-image"]} src={profilePicture} alt="New" />
          <p id={classes["postTitle"]}>{props.postData.text}</p>
        </div>
        <div className={classes["likes-shares"]}>
          <div className={classes.likes}>
            <FaThumbsUp />
            <span>{reactions.likesNumber} likes</span>
          </div>
          <div className={classes.shares}>
            <FaShare />
            <span>{reactions.sharesNumber} shares</span>
          </div>
        </div>
        <div className={classes["post-reaction"]}>
          <div
            href="#"
            id={classes["likeButton"]}
            onClick={() => toggleReactions("likes")}
          >
            <FaThumbsUp />
            <span>Like</span>
          </div>
          <div id={classes["commentButton"]}>
            <FaComment />
            <span>Comment </span>
          </div>
          <div
            href="#"
            id={classes["shareButton"]}
            onClick={() => toggleReactions("shares")}
          >
            <FaShare />
            <span>Share</span>
          </div>
        </div>
        <div className={classes["comment-box-container"]}>
          {props.postData.comments.map((comment) => {
            return (
              <CommentsSection
                key={comment.id}
                commentData={comment}
              ></CommentsSection>
            );
          })}
          <div className={classes.commentContent}>
            <input type="text" placeholder="Introduceti comentariul aici..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsfeed;
