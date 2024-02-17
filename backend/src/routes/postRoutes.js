import { Router } from "express";
import {
  postPost,
  getPost,
  getIDPost,
  deltePost,
  putLikePost,
  putUpdatePost,
  notFound,
} from "../controllers/postControlers.js";
const router = Router();

router.get("/posts", getPost); 
router.get("/posts/:id", getIDPost); 
router.post("/posts", postPost); 
router.put("/posts/like/:id", putLikePost); 
router.put("/posts/:id", putUpdatePost); 
router.delete("/posts/:id", deltePost); 

router.all("*", notFound); 

export default router;
