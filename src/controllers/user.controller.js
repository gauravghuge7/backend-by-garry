import {asyncHandler} from "../utils/asyncHandllers.js";

import { Router } from "../routes/user.routes.js";

const registerUser = asyncHandler(
      async(req,res) => {
            res.status(200).json({
                  message: "ok"
            })
      }
)



const loginUser = asyncHandler (async (req, res) => {
      

      // req body ----> data 
      // username or email 
      // find the user 
      // password check 
      // access & refresh token 
      // send cookies 
      const {email, username, password } = req.body

      if(!username || !email) {
            throw new ApiError(400,"username or email is required ");
      }
})

export {
      registerUser,
}