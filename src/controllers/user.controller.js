import {asyncHandler} from "../utils/asyncHandllers.js";

import { Router } from "../routes/user.routes.js";

const registerUser = asyncHandler(
      async(req,res) => {
            res.status(200).json({
                  message: "ok"
            })
      }
)

export {
      registerUser,
}