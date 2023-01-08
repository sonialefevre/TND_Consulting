import { useReducer, useState } from "react";
import instance from "../../utils/axios";
import "./style.scss";

const CommentsBook = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [comment, setComment] = useState("");

  const formData = new FormData();
  formData.append("clientname", name);
  formData.append("clientcompany", company);
  formData.append("comment", comment);

  const handleSubmit = (e) => {
    e.preventDefault();
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
