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
  askerId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  answers: [
    AnswerSchema
  ]
});

module.exports = model('Question', QuestionSchema);
