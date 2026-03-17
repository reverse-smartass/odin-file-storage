import { body, validationResult } from "express-validator";
import prisma from "../lib/prisma.ts";
import { Router } from 'express';
import multer from "multer";

const uploadRouter = Router();

uploadRouter.post('/', upload.single('avatar'), function(req, res, next){

});


export default uploadRouter;