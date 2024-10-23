import axios from "axios";
import React, {  useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";


const initalvalue = {

  title: "",
  content: "",
  author: "",
};
function Editblog() {
  const [formdata, setformdata] = useState(initalvalue);
  
  const { title,content,author } = formdata;
  
  const {id,userId}=useParams()
  
  
  const handlchange = (e) => {
    const { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
  };

  const handlsubmit = (e) => {
    e.preventDefault();
 
    axios
      .patch(
        `${process.env.REACT_APP_BASEURL}/post/put/${id}/${userId}`,
         formdata ,
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res)
       setformdata(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Update Product Page</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-4 m-auto mt-5">
            <Form className="form-update" onSubmit={handlsubmit}>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Image Url"
                  className="w-50"
                  name="title"
                  value={title}
                  onChange={handlchange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>content</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Price"
                  className="w-50"
                  name="content"
                  value={content}
                  onChange={handlchange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>author</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Category"
                  className="w-50"
                  name="author"
                  value={author}
                  onChange={handlchange}
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editblog;
