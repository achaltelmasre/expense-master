import User from  "./../model/User.js";
import { responder } from "./../util.js";

const postApiSignup = async (req, res) => {
    const {
       name, 
       email, 
       username,
       password, 
       address, 
       gender
     } = req.body;
 
     const user = new User({
        name: name,
        email: email,
        username: username,
        password: password,
        address: address,
        gender:gender
     });
 
    try{
      const savedUser = await user.save();

      return responder({
         res,
         success: true,
          data: savedUser,
          message: " User created successfully "
      })
    }
    catch(e){

        return responder({
            res,
            success: false,
            message: e.message
        })
  
  }
 }

 export { postApiSignup }