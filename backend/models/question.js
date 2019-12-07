import { Schema, model } from 'mongoose';
import { AnswerSchema } from './answer';

const QuestionSchema = new Schema({
  question: {
    type: String,
    required: true,
    minlength: 2
  },
  private: {
    type: Boolean,
    required: true,
  },
  asker: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  answers: [
    AnswerSchema
  ]
});

export const Question = model('Question', QuestionSchema);
