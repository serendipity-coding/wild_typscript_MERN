import { Schema, model } from 'mongoose';



const WilderSchema = new Schema({
  name: { type: String, unique: true },
  city: String,
  skills: [{ title: String, votes: Number }],
});
WilderSchema.index({ name: "text", city: "text" })

const wilderModel = model('wilder', WilderSchema);

export default wilderModel;
