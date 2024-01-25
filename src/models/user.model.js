import mongoose, {schema} from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwentoken';

const userSchema = new schema(
      {
            username: {
                  type: String,
                  required: true,
                  unique: true,
                  lowercase: true,
                  trim: true,
                  index: true,
            },
            email: {
              type: String,
              required: true,
              unique: true,
              lowercase: true,
              trim: true,

            },
            fullname: {
                  type: String,
                  required: [true, 'name must be required'],
                  trim: true,
                  index: true
            },
            avatar: {
                  type: String,  // cloudinary services to upload url 
                  required: true,
            },
            coverImage: {
                  type: String,

            },
            watchHistory: [{
                  type: Schema.Types.ObjectId,
                  ref: "video"
                  },
            ],
            password: {
                  type: String,
                  required: [true, 'password must be required '],

            },
            refreshToken: {
                  type: String,
            }
}, 

{timestamps: true})

userSchema.pre("save", async function (next) 
      {
            if(!this.isModified("password")) return next();
      
            this.password = bcrypt.hash(this.password, 10);
            next();
      }
);

userSchema.method.isPasswordCorrect = async function (password) {
      return await bcrypt.compare(password, this.password);
}

userSchema.method.generateACCESSTOKEN = function () {
      jwt.sign(
            {
                  _id: this._id,
                  email: this.email,
                  username: this.username,
                  fullname: this.fullname
            },
            process.env.ACCESS_TOKEN_SECRET,
            {
                  expiresIn: process.env.ACCESS_TOKEN_EXPIRY
            }
      )
}

userSchema.method.generateREFRESH_TOKEN = function () {
      jwt.sign(
            {
                  _id: this._id,
                  email: this.email,
                  username: this.username,
                  fullname: this.fullname,
            },
            process.env.ACCESS_TOKEN_SECRET,
            {
                  expiresIn: process.env.ACCESS_REFRESH_EXPIRY
            }
      )
}


export const user = mongoose.model("user", userSchema);