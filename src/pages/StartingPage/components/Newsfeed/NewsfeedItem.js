import classes from "./NewsfeedItem.module.scss";
import profilePicture from "../../../../assets/catprofile.jpg";
import { FaEllipsisH, FaThumbsUp, FaComment, FaShare } from "react-icons/fa";
import CommentsSection from "./Comments/CommentsSection";
import { useState } from "react";

const NewsfeedItem = (props) => {
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
    <div className={classes.newsFeedItem}>
      <div className={classes["main-div"]}>
        <div className={classes["user-info"]}>
          <div className={classes.postAuthor}>
            <div
              style={{ backgroundImage: `url(${profilePicture})` }}
              className={classes["rounded-circle"]}
              id={classes.profilepic}
            ></div>
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
                <button>Save this post</button>
                <button>Hide this post</button>
                <button>Unfollow this person</button>
                <button>Snooze for 30 days</button>
              </div>
            )}
          </div>
        </div>

        <div>
          <p className={classes.postTitle}>{props.postData.text}</p>
          <img
            className={classes["post-image"]}
            src={profilePicture}
            alt="New"
          />
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
            <input type="text" placeholder="Write a comment..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsfeedItem;
