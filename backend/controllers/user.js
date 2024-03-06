const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(401).json({
        message: "Invalid Data",
        success: false,
      });
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(401).json({
        message: "User already exist",
        success: false,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 16);

    await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.status(200).json({
      message: "Account created successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(401).json({
        message: "Invalid Data",
        success: false,
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password",
        success: false,
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid email or password",
        success: false,
      });
    }

    const token = await jwt.sign(
      { userId: user._id },
      "asjfkjhfkjsfkflkssffhfie",
      {
        expiresIn: "1d",
      }
    );

    return res
      .status(200)
      .cookie("token", token, { httpOnly: true })
      .json({
        message: `Welcome Back ${user.name}`,
        token,
        success: true,
      });
  } catch (error) {
    console.log(error);
  }
};

const Logout = async(req,res) =>{
    return await res.status(200).cookie("token","",{expiresIn:new Date(Date.now()),httpOnly:true})
    .json({
        message:"Logout successfully",
        success:true
    })
}

module.exports = { Register, Login,Logout };
