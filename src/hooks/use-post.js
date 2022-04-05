import { useEffect, useState } from "react";

const POST_DATA = [
  {
    id: 0,
    username: "Miss Kitty",
    postDate: "20/01/2022",
    numberOfLikes: 45,
    numberOfShares: 12,
    // profileImg: "../assests/firephoto.jpeg",
    text: "This is my new profile picture",
    comments: [
      {
        id: "1",
        username: "Mister Garfield",
        date: "21/02/2021",
        comment: "Hello Miss Kitty!",
      },
      {
        id: "2",
        username: "Mister Garfield",
        date: "28/01/2021",
        comment: "I have sent you a Friend Request, could you please accept?",
      },
    ],
  },
  {
    id: 1,
    username: "Miss Pixie",
    postDate: "14/01/2010",
    numberOfLikes: 78,
    numberOfShares: 4,
    // profileImg: "../assests/firephoto.jpeg",
    text: "Felt cute, might delete later.",
    comments: [
      {
        id: "1",
        username: "Roxane",
        date: "11/03/2022",
        comment: "I have sent you a Friend Request, could you please accept?",
      },
    ],
  },
];

const usePost = (interval) => {
  const [post, setPost] = useState({
    postData: POST_DATA,
    changed: 0,
  });

  useEffect(() => {
    const postInterval = setInterval(() => {
      setPost((prevState) => {
        if (prevState.postData.length > 3) {
          clearInterval(postInterval);
        }
        let newPost;
        if (prevState.postData.length > 0) {
          newPost = {
            ...POST_DATA[prevState.postData.length % 2],
            id: prevState.postData.length * Math.random() * 100,
          };
        } else {
          newPost = {
            ...POST_DATA[prevState.postData[0]],
            id: prevState.postData.length * Math.random() * 100,
          };
        }

        return {
          ...prevState,
          postData: [newPost, ...prevState.postData],
        };
      });
    }, interval);
  }, [post.changed]);

  const deletePost = (id) => {
    setPost((prevState) => {
      const removableElementIndex = prevState.postData.findIndex((post) => {
        return post.id === id;
      });

      prevState.postData.splice(removableElementIndex, 1);

      return {
        ...prevState,
        postData: prevState.postData,
        changed: prevState.changed + 1,
      };
    });
  };

  return [post.postData, deletePost];
};

export default usePost;
