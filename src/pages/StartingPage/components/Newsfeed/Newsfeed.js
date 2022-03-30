import classes from "./Newsfeed.module.scss";
import newPicture from "../../../../assets/firephoto.jpeg";
import { FaEllipsisH, FaThumbsUp, FaComment, FaShare } from "react-icons/fa";
import CommentsSection from "./Comments/CommentsSection";
import { useState } from "react";

const Newsfeed = (props) => {
  // const todaysDate = new Date('29.03.2021'); // to be used with input field to generate new comment

  const [reactions, setReactions] = useState({
    likesNumber: props.postData.numberOfLikes,
    sharesNumber: props.postData.numberOfShares,
  });

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

  return (
    <div className={classes.newsFeed}>
      <div className={classes["main-div"]}>
        <div className={classes["user-info"]}>
          <a href="#">
            <img
              className={classes["rounded-circle"]}
              id={classes.profilepic}
              src={newPicture}
              alt="Profile picture"
            />
            <span id={classes["username"]}>{props.postData.username}</span>
          </a>
          <div className={classes["context-menu"]}>
            <a href="#" id="context-menu-button">
              <FaEllipsisH />
            </a>
            <div
              className={classes["context-menu-dropdown"]}
              style={{ display: "none" }}
            ></div>
          </div>
        </div>

        <div>
          <img
            className={classes["post-image"]}
            src={newPicture}
            alt="New picture"
          />
          <p id={classes["postTitle"]}>{props.postData.text}</p>
        </div>
        <div className={classes["likes-shares"]}>
          <a href="#">
            <FaThumbsUp />
            <span>{reactions.likesNumber} likes</span>
          </a>
          <a href="#">
            <FaShare />
            <span>{reactions.sharesNumber} shares</span>
          </a>
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
          <div className={classes.commentContent}>
            <input type="text" placeholder="Introduceti comentariul aici..." />
          </div>
          {props.postData.comments.map((comment) => {
            return <CommentsSection commentData={comment}></CommentsSection>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Newsfeed;
