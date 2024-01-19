import { bearerTokenExtractor } from "../utils/tokenExtractor.js";
import HttpException from "../exceptions/HttpException.js";
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../config/index.js";
import UserModel from "../models/user.model.js";

export const jwtAuthenticate = async (req, res, next) => {
  try {
    const authHeaderValue = req.get("Authorization");
    const token = bearerTokenExtractor(authHeaderValue);

    if (!token) throw new HttpException(401, "Unauthorized");

    let payload = {};

    try {
      payload = await jwt.verify(token, SECRET_KEY);
    } catch (error) {
      throw new HttpException(401, "Unauthorized");
    }

    if (!payload._id) throw new HttpException(401, "Unauthorized");

    const user = await UserModel.findById(payload._id);

    req.user = user;

    next();
  } catch (error) {
    next(error);
  }
};
