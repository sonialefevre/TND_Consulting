import { useState, useEffect } from "react";
import instance from "../../utils/axios";
import "./style.scss";

const CommentsBook = () => {
  // Manage inputs state for form data submission
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState([]);
  console.log(commentsList);

  // Call comments list upon component mouting
  useEffect(() => {
    getComments();
  }, []);

  //Retreiving comments from data base
  const getComments = () => {
    try {
      instance.get("/commentsbook").then((response) => {
        setCommentsList(response.data);
        console.log(commentsList);
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Creating form data to be sent to back-end
  const formData = new FormData();
  formData.append("clientname", name);
  formData.append("clientcompany", company);
  formData.append("comment", comment);

  // Sending comment to database upon form submission
  const handleSubmit = () => {
    console.log("Form onSubmit happens");
    try {
      instance.post("/commentsbook", formData).then((response) => {
        console.log(response);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="pageContainerComments">
      {/* TODO: Add button with anchor to comments form */}
      {/* TODO: Filter comments by higher ID so that latest one appears first */}
      {commentsList.map((com) => {
        return (
          <div className="commentBlock">
            <h2>
              {com.clientname} <span>{com.clientcompany}</span>
            </h2>
            <p>{com.comment}</p>
          </div>
        );
      })}

      <div className="comments">
        <form onSubmit={handleSubmit}>
          <div className="formField">
            <label htmlFor="clientname">Your name</label>
            <input
              type="text"
              name="clientname"
              id="clientname"
              required
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="formField">
            <label htmlFor="clientcompany">Your company</label>
            <input
              type="text"
              name="clientcompany"
              id="clientcompany"
              required
              onChange={(e) => setCompany(e.target.value)}
              value={company}
            />
          </div>
          <div className="formField">
            <label htmlFor="comment">Your comment</label>
            <textarea
              name="comment"
              id="comment"
              rows="5"
              cols="33"
              required
              onChange={(e) => setComment(e.target.value)}
              value={comment}
            />
          </div>
          <button className="buttonBook" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default CommentsBook;
