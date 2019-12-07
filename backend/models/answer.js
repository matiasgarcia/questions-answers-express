import { Schema, model } from 'mongoose';
import { User } from './user';

export const AnswerSchema = new Schema({
  answer: {
    type: String,
    required: true,
    minlength: 2
  },
  provider: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: User
  }
});

export const Answer = model('Answer', AnswerSchema);
