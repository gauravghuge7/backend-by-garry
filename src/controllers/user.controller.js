
// import methods for users 

import {AsyncHandler} from '../utils/asyncHandllers';
import {ApiError} from '../utils/ApiError.js';
import {User} from '../models/user.model.js';
import {uploadOnCloudinary} from '../utils/cloudinary.js';
import {ApiResponse} from '../utils/ApiResponse.js';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

// first method for generate refresh token that converted password 

const generateAccessAndRefreshToken = async(userId) => {

      try {
            const user = await user.findById(userId)
      }
      catch (error) {

      }
}

// process for registration user 
// second method for controllers user registration with backend 


const userRegister = asyncHandler (async (req,res) => {

      // get user detail from frontend 

      const {fullname, email, username, password } = req.body

      // for our varification print it on console

      console.log("Email ;", email);

      // check anyone field is empty or not 

      if(
            [fullname, email, username, password].some((field) => field?.trim() === "")
      ) {
            throw new ApiError(400," all field are required ");
      }

      const existedUser = await User.findOne({
            $or:[{username},
                 {email}   
            ]
      })
      
})