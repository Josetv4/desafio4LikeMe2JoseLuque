import {
  createPostModel,
  createGetModel,
  getIDModel,
  createDeleteModel,
  createLikeModel,
  createPutUpdate,
} from "../models/postModel.js";

export const getPost = async (req, res, next) => {
  try {
    const result = await createGetModel();
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const getIDPost = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await getIDModel(id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const postPost = async (req, res, next) => {
  const { titulo, url, descripcion } = req.body;
  try {
    const result = await createPostModel(titulo, url, descripcion);
    res.status(201).json(result);
    console.log(result);
  } catch (error) {
    next(error);
  }
};

// parte 2, Desafio Like-me
// likes desde fornt
export const putLikePost = async (req, res, next) => {
  const { id } = req.params;
  const { likes } = req.body;
  try {
    const result = await createLikeModel(id, likes);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

//update desde postman
export const putUpdatePost = async (req, res, next) => {
  const { id } = req.params;
  const { titulo, url, descripcion, likes } = req.body;
  try {
    const result = await createPutUpdate(id, titulo, url, descripcion, likes);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

//Delete 
export const deltePost = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await createDeleteModel(id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export const notFound = (req, res) => {
  res.status(404).json({ error: "NOT FOUND, No se encontro el recuerso" });
};
