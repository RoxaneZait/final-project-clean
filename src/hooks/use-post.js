import { useEffect, useState } from "react";

const POST_DATA = [
  {
    id: 0,
    username: "Roxane 1",
    postDate: "20/07/2022",
    numberOfLikes: 45,
    numberOfShares: 12,
    profileImg: "../assests/firephoto.jpeg",
    text: "This is my new dynamic post",
    comments: [
      {
        id: "1",
        username: "Rox",
        date: "21/01/2021",
        comment: "This is my first dynamic content",
      },
      {
        id:"2",
        username: "Roxy",
        date: "22/01/2021",
        comment: "This is my second dynamic content",
      },
    ],
  },
  {
    id: 1,
    username: "Roxane 2",
    postDate: "14/01/1922",
    numberOfLikes: 78,
    numberOfShares: 4,
    profileImg: "../assests/firephoto.jpeg",
    text: "This is my second dynamic post",
    comments: [
      {
        id:"1",
        username: "Roxane",
        date: "11/06/2027",
        comment: "This is my second dynamic content",
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
