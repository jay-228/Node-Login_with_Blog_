const express = require("express");
const isAuth = require("../middleware/auth.middleware");
const {
  createPost,
  updatepost,
  deletepost,
  getpost,
} = require("../controller/blog.controller");
const CheckRole = require("../middleware/role");

const Blogrouter = express.Router();

Blogrouter.get("/get",getpost)
Blogrouter.post("/createblog", isAuth, createPost);
Blogrouter.patch("/put/:blogId/:userId", isAuth, updatepost);
Blogrouter.delete("/delete/:blogId/:userId",isAuth,CheckRole, deletepost);


module.exports = Blogrouter;
