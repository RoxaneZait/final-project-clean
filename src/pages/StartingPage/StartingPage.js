import classes from "./StartingPage.module.scss";
import LeftContent from "./components/LeftContent/LeftContent"; // ./ in acelasi folder
import userIcon from "../../assets/user.png"; // ../ un folder superior
import Newsfeed from "./components/Newsfeed/Newsfeed";
import { useState } from "react";


const POST_DATA = [
  {
    id: 0,
    username: "Roxane",
    postDate: "20/07/2022",
    numberOFLikes: 45,
    numberOfShares: 12,
    profileImg: "../assets/firephoto.jpeg",
    text: "This is my new dynamic text",
    comments: [
      {
        username: "Z",
        date: "21/12/2022",
        comment: "This is my first dynamic comment",
      },
      {
        username: "Z",
        date: "21/12/2022",
        comment: "This is my 2nd dynamic comment",
      },
    ],
  },
  {
    id: 1,
    username: "Roxane",
    postDate: "20/07/2022",
    numberOFLikes: 45,
    numberOfShares: 12,
    profileImg: "../assets/firephoto.jpeg",
    text: "This is my new dynamic text",
    comments: [
      {
        username: "Z",
        date: "21/12/2022",
        comment: "This is my first dynamic comment",
      },
    ],
  },
];

const StartingPage = () => {
const [postData, setPostData] = useState(POST_DATA);

  return (
    <div className={classes.mainContainer}>
      <LeftContent></LeftContent>
      <div className={classes.newsfeed}>
        {postData.map( (post) => {
          return <Newsfeed postData={post} key={post.id} />;
        })}
      </div>
      <aside></aside>
    </div>
  );
};

export default StartingPage;
