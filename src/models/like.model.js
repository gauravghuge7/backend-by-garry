import mongoose, {Schema} from 'mongoose';

const likeSchema = new Schema({
      video: {
            type: Schema.Type.ObjectId,
            ref: "video",
      },

      comment: {
            type: Schema.Type.ObjectId,
            ref: "comment",
      },

      tweet: {
            type: Schema.Type.ObjectId,
            ref: "tweet"
      },

      likedBy: {
            type: Schema.Type.ObjectId,
            ref: "User",
      }


}, {timestamps: true})

export const like = mongoose.model("like", likeSchema);


