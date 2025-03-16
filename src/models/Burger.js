import { Schema } from "mongoose";



export const BurgerSchema = new Schema({
  name: { type: String, minLength: 1, maxLength: 50, required: true },
  price: { type: Number, min: .01, required: true }
},
  {
    timestamps: true
  })