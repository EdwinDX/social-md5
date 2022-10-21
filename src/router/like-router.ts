import { auth } from './../middleware/auth';
// import likeController from '../controller/api/like.api';
import likeController from '../controller/api/like.api';
const routerLike = require('express').Router();

//LIKE POST
routerLike.post('/:id',auth,likeController.like);

export default routerLike;