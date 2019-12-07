import { Schema, model } from 'mongoose';

export const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 2
  },
  lastName: {
    type: String,
    required: true,
    minlength: 2
  }
});

export const User = model('User', UserSchema);
