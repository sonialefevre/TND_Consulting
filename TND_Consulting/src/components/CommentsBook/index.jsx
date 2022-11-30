import { useReducer } from "react";
import instance from "../../utils/axios";

import "./style.scss";

const CommentsBook = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form onSubmit happens");
  };

  return (
    <div className="comments">
      <form onSubmit={handleSubmit}>
        <div className="formField">
          <label htmlFor="clientname">Your name</label>
          <input type="text" name="clientname" id="clientname" required />
        </div>
        <div className="formField">
          <label htmlFor="clientcompany">Your company</label>
          <input type="text" name="clientcompany" id="clientcompnay" required />
        </div>
        <div className="formField">
          <label htmlFor="comment">Your comment</label>
          <textarea name="comment" id="comment" rows="5" cols="33" required />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default CommentsBook;
