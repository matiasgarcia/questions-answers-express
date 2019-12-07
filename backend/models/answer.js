import { Schema, model } from 'mongoose';

export const AnswerSchema = new Schema({
  answer: {
    type: String,
    required: true,
    minlength: 2
  },
  providerId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
});

export const Answer = model('Answer', AnswerSchema);
