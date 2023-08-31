const mongoose = require('mongoose');
const Joi = require("joi");

const UserSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    profileImg:{
        type:String,
        default:"https://img.freepik.com/free-vector/illustration-user-avatar-icon_53876-5907.jpg?w=740&t=st=1693315321~exp=1693315921~hmac=c11fb04afabf2cf775375819b9debe4f1837f360cb0d2a9c86c9942941fe00d3"
    },
},{timestamps:true})

exports.UserModal = mongoose.model("User", UserSchema);

exports.validateUser = (_bodyData) => {
    const joiSchema = Joi.object({
      name: Joi.string().min(2).max(30).required(),
      email: Joi.string().min(2).max(50).email().required(),
      password: Joi.string().min(3).max(200).required(),
      profileImage: Joi.string().min(2).max(200).allow(null,''),
    });
    return joiSchema.validate(_bodyData);
  };