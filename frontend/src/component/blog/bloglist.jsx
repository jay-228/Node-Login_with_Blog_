import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { toast } from "react-toastify";

function Bloglist() {
  const [data, setdata] = useState([]);
  console.log(data);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASEURL}/post/get`, {
        withCredentials: true,
      })
      .then((res) => {
        setdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handledelete = (blogId, userId) => {
    axios
      .delete(
        `${process.env.REACT_APP_BASEURL}/post/delete/${blogId}/${userId}`,
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res);
        toast.success(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="blog-container">
      {data.map((e) => (
        <div key={e.id} className="blog-card">
          <h3 className="blog-title">{e.title}</h3>
          <p className="blog-author">By {e.author}</p>
          <p className="blog-content">{e.content}</p>
          <div className="button-container">
            <Link
              className="update-button"
              to={`/editblog/${e._id}/${e.userId}`}
              style={{ textDecoration: "none" }}
            >
              Update
            </Link>
            <button
              className="delete-button"
              onClick={() => handledelete(e._id, e.userId)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Bloglist;
