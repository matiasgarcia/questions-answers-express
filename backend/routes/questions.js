import { Question } from '../models/question';

//TODO: Don't show __v nor private
export const setupQuestionsRoutes = ({ app }) => {
  app.get('/questions', function (req, res) {
    Question
      .find({
        private: false,
      })
      .populate('asker')
      .populate('answers.provider')
      .exec()
      .then(questions => {
        res.status(200).json({
          questions
        })
      })
  });
};
