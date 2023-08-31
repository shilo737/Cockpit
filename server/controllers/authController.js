const bcrypt = require("bcrypt");
const { UserModal,validateUser } = require("../models/UserModel");


exports.getAllUsers = async (req,res)=>{
    const data = await UserModal.find({})
    res.json(data)
}

exports.register = async (req,res)=>{
    const validBody = validateUser(req.body);
    if (validBody.error) {
      return res.status(401).json(validBody.error.details);
    }
    try{
        const user = new UserModal(req.body);
        user.password = await bcrypt.hash(user.password,10);
        await user.save()
        user.password = "****"
        res.json(user);
    }
    catch(err){
        console.log(err);
        res.status(502).json({err})
    }
}