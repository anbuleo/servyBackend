import User from '../models/userModel.js';  
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { errorHandler } from '../utils/errorHandler.js';
import passport from 'passport';



const signUp = async (req, res,next) => {    
    try {
        const { firstName, lastName, email, password, mobile, address } = req.body;

        if (!firstName  || !email || !password || !mobile ) {
            return next(errorHandler(400, 'All fields are required'));
        }

        const existingEmail = await User.findOne({ email });
        const existingMobile = await User.findOne({ mobile });

        if (existingEmail || existingMobile) {
            return next(errorHandler(400, 'User already exists'));
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            mobile,
            address,
        });

        await user.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        next(error);
    }
};

const googlesignup = async(req,res,next)=>{
   
    try {
        const { user, token } = req.user;
        if (!user || !token) {
            return next(errorHandler(401,'Authentication failed'))
          }
        res.json({
          success: true,
          token,
          user: {
            id: user._id,
            email: user.email,
            firstName: user.firstName,
            role: user.role,
            mobile: user.mobile,
          },
        });
      } catch (error) {
        res.status(500).json({ success: false, message: "OAuth failed", error });
      }
    
    }


export default {
    signUp,
    googlesignup
}