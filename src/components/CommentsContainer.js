import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const commentsData = [
  {
    name: "Rahul Mangal",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique omnis repudiandae ad doloremque nemo vitae ",
    replies: [
      {
        name: "Rahul Mangal",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique omnis repudiandae ad doloremque nemo vitae ",
        replies: [],
      },
      {
        name: "Rahul Mangal",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique omnis repudiandae ad doloremque nemo vitae ",
        replies: [
          {
            name: "Rahul Mangal",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique omnis repudiandae ad doloremque nemo vitae ",
            replies: [],
          },
          {
            name: "Rahul Mangal",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique omnis repudiandae ad doloremque nemo vitae ",
            replies: [
              {
                name: "Rahul Mangal",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique omnis repudiandae ad doloremque nemo vitae ",
                replies: [],
              },
              {
                name: "Rahul Mangal",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique omnis repudiandae ad doloremque nemo vitae ",
                replies: [
                  {
                    name: "Rahul Mangal",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique omnis repudiandae ad doloremque nemo vitae ",
                    replies: [
                      {
                        name: "Rahul Mangal",
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique omnis repudiandae ad doloremque nemo vitae ",
                        replies: [],
                      },
                      {
                        name: "Rahul Mangal",
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique omnis repudiandae ad doloremque nemo vitae ",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Rahul Mangal",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique omnis repudiandae ad doloremque nemo vitae ",
                    replies: [],
                  },
                  {
                    name: "Rahul Mangal",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique omnis repudiandae ad doloremque nemo vitae ",
                    replies: [],
                  },
                ],
              },
              {
                name: "Rahul Mangal",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique omnis repudiandae ad doloremque nemo vitae ",
                replies: [],
              },
            ],
          },
          {
            name: "Rahul Mangal",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique omnis repudiandae ad doloremque nemo vitae ",
            replies: [],
          },
          {
            name: "Rahul Mangal",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique omnis repudiandae ad doloremque nemo vitae ",
            replies: [],
          },
        ],
      },
      {
        name: "Rahul Mangal",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique omnis repudiandae ad doloremque nemo vitae ",
        replies: [],
      },
      {
        name: "Rahul Mangal",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique omnis repudiandae ad doloremque nemo vitae ",
        replies: [],
      },
    ],
  },
  {
    name: "Rahul Mangal",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique omnis repudiandae ad doloremque nemo vitae ",
    replies: [],
  },
  {
    name: "Rahul Mangal",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique omnis repudiandae ad doloremque nemo vitae ",
    replies: [],
  },
  {
    name: "Rahul Mangal",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique omnis repudiandae ad doloremque nemo vitae ",
    replies: [],
  },
  {
    name: "Rahul Mangal",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique omnis repudiandae ad doloremque nemo vitae ",
    replies: [],
  },
  {
    name: "Rahul Mangal",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique omnis repudiandae ad doloremque nemo vitae ",
    replies: [],
  }
];

const Comment = ({data}) => {
    const {name, text} = data;
    // console.log("Comment", data)
    return <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
        <AccountCircleIcon fontSize="large" />
        <div className="px-3">
            <p className="font-bold">{name}</p>
            <p>{text}</p>
        </div>
    </div>
};

const CommentsList = ({comments}) => {
    // console.log("CommentsList", comments)
    return comments.map((comment, index) => {
        return <div key={comment.name + index}>
            <Comment data={comment}/>
            <div className="pl-5 border border-l-black ml-5">
                <CommentsList comments={comment.replies}/>
            </div>
        </div>
    })
}

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2 w-[69rem]">
      <h1 className="text-2xl font-bold">Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
