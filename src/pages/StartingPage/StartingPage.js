import classes from "./StartingPage.module.scss";
import LeftContent from "./components/LeftContent/LeftContent"; // ./ in acelasi folder
import RightContent from "./components/RightContent/RightContent";
// import userIcon from "../../assets/user.png"; // ../ un folder superior
import NewsfeedItem from "./components/Newsfeed/NewsfeedItem";
import usePost from "../../hooks/use-post";



// const POST_DATA = [
//   {
//     id: 0,
//     username: "Roxane",
//     postDate: "20/07/2022",
//     numberOFLikes: 45,
//     numberOfShares: 12,
//     profileImg: "../assets/firephoto.jpeg",
//     text: "This is my new dynamic text",
//     comments: [
//       { id:'1',
//         username: "Z",
//         date: "21/12/2022",
//         comment: "This is my first dynamic comment",
//       },
//       { id: '2',
//         username: "Z",
//         date: "21/12/2022",
//         comment: "This is my 2nd dynamic comment",
//       },
//     ],
//   },
//   {
//     id: 1,
//     username: "Roxane",
//     postDate: "20/07/2022",
//     numberOFLikes: 45,
//     numberOfShares: 12,
//     profileImg: "../assets/firephoto.jpeg",
//     text: "This is my new dynamic text",
//     comments: [
//       { id: '3',
//         username: "Z",
//         date: "21/12/2022",
//         comment: "This is my first dynamic comment",
//       },
//     ],
//   },
// ];

const StartingPage = () => {
// const [postData, setPostData] = useState(POST_DATA);
const [postData, setDeletePost] = usePost(10000);

 const deletePost = (id) => {
   setDeletePost(id);
 };

  return (
    <div className={classes.mainContainer}>
      <LeftContent></LeftContent>
      <div className={classes.newsfeed}>
        {postData.map((post) => {
            return (
              <NewsfeedItem postData={post} removePost={deletePost} key={post.id} />
            );       
        })}
      </div>
      <RightContent></RightContent>
    </div>
  );
};

export default StartingPage;
