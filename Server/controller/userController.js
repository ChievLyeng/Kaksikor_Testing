const User = require("../models/userModel");
const { mongo, default: mongoose } = require("mongoose");

// user registration
const registerUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// user login
const loginUser = async (req, res) => {
  // console.log(req.body);
  try {
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });

    // Check if the user exists and if the password is correct
    if (user && (await user.matchPassword(password))) {
      res.status(200).json({ message: "Login successful", user });
    } else {
      res.status(401).json({ error: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// getUser account
const userAccount = async (req,res) => {
  const  userAcc = await User.findById(req.params.id) ;

  // const userAdd = await UserAddress.findOne({id})
  try{
    res.status(200).json({
      data : userAcc
    })
  }catch(error){
    res.status(404).json({
      message: error
    })
  }

}
// get all users
const userAccounts = async (req,res) => {
  const  userAcc = await User.find() ;

  // const userAdd = await UserAddress.findOne({id})
  try{
    res.status(200).json({
      result : userAcc.length,
      data : userAcc
    })
  }catch(error){
    res.status(404).json({
      message: error
    })
  }

}

// update account information
const updateInformation = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: 'No user' });
    }

    const updatedAccount = await User.findByIdAndUpdate(id, req.body, {
      new: true, // Return the modified document
      runValidators: true, // Validate the update against the model's schema
    });

    res.status(200).json({ account: updatedAccount });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
  module.exports = { 
    registerUser, 
    loginUser, 
    userAccount, 
    userAccounts,
    updateInformation
  };

