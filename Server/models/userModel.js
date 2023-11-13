const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required."],
    unique: true,
    trim: true,
    minlength: [3, "Username must be at least 3 characters long."],
    maxlength: [30, "Username cannot exceed 30 characters."],
  },
  email: {
    type: String,
    required: [true, "Email is required."],
    unique: true,
    trim: true,
    maxlength: [255, "Email cannot exceed 255 characters."],
    validate: {
      validator: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
      message: "Invalid email format.",
    },
  },
  phoneNumber: {
    type: Number,
    required: [true, "Phone number is required."],
    unique: true,
    validate: {
      validator: function (value) {
        return /^\d+$/.test(value);
      },
      message: "Phone number can only contain numeric characters.",
    },
  },
  birthdate: {
    type: Date,
    required: [true, "Birthdate is required."],
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
    required: [true, "Gender is required."],
  },
  password: {
    type: String,
    required: [true, "Password is required."],
  },
  // confirmPassword: {
  //   type: String,
  //   validate: {
  //     validator: function (value) {
  //       return value === this.password;
  //     },
  //     message: "Passwords do not match.",
  //   },
  // },
  role : {
    type : String ,
    required : true 
  },
  Address: {
    country:{
      type: String
    },
    city: {
      type: String 
    },
    commune: {
      type: String,
    },
    district: {
        type: String,
    },
    address: {
        type: String,
        required: true,
        trim: true,
        min: 10,
        max: 100,
    },
    addressType: {
      type: String,
      enum: ["home", "work"],
      },
  }

});

userSchema.methods.matchPassword = function (enteredPassword) {
  return this.password === enteredPassword;
};

const User = mongoose.model("User", userSchema);

module.exports = User;


