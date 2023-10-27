const asyncHandler = require("express-async-handler");
const user = require("../model/userModel");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
// Require the dotenv library
require('dotenv').config();


const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandotory");
  }
  const userAvailable = await user.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("User already register");
  }

  // hash password
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("Hashed Password:", hashedPassword)
  const User = await user.create({
    username,
    email,
    password: hashedPassword,
  })
  console.log(`user created ${User}`);
  if (User) {
    res.status(201).json({ _id: User.id, email: User.email })
  } else {
    res.status(400);
    throw new Error("user data is not valid")
  }
  res.send({ message: "register the user" });
});

// const loginUser = asyncHandler(async(req,res)=>{
//     const {email , password} = req.body;
//     if(!email || !password){
//         res.status(400);
//         throw new Error("All Fields Are Mandotory");
//     }
//     const User = await user.findOne({email});
//     // compare password with hashed password
//     if(User && (await bcrypt.compare(password ,User.password)))
//     {
//         const accessToken = jwt.sign(
//             {
//             User : {
//                 username : User.username,
//                 email : User.email,
//                 id : User.id,
//             },
//         },process.env.ACCESS_TOKEN_SECRET,
//         {expiresIn:"1m"}
//         );
//         res.status(200).json({accessToken});
//     }else{
//         res.status(401)
//         throw new Error("Email or paaword not valid ")
//     }
// });

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("Email and password are required");
  }

  const User = await user.findOne({ email });

  if (User) {
    try {
      // Ensure that the stored password exists before attempting to compare
      if (User.password) {
        const isPasswordValid = await bcrypt.compare(password, User.password);

        if (isPasswordValid) {
          const accessToken = jwt.sign(
            {
              User: {
                username: User.username,
                email: User.email,
                id: User.id,
              },
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "1m" }
          );
          res.status(200).json({ accessToken });
        } else {
          res.status(401);
          throw new Error("Email or password not valid");
        }
      } else {
        res.status(401);
        throw new Error("No password stored for this user");
      }
    } catch (error) {
      res.status(400);
      throw new Error(error.message);
    }
  } else {
    res.status(401);
    throw new Error("Email or password not valid");
  }
});


const currentUser = asyncHandler(async (req, res) => {
  res.json(req.User);
});

module.exports = {
  registerUser,
  loginUser,
  currentUser
}