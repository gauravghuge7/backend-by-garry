import mongoose,{schema} from "mongoose";

const subscriberSchema = new Schema({

      Subscriber: {
            type: Schema.Types.ObjectId,
            ref: "User"
      },
      channel: {
            type: Schema.Type.ObjectId, // one to whom subscriber is subscribing 
            ref: "User"
      }
}, {timestamps: true})

export const subscriber = mongoose.model("subscriber", subscriberSchema);