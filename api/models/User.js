const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    profilePicture: {
      type: String,
      default: "",
    },
    coverPicture: {
      type: String,
      default: "",
    },
    followers: {
      type: Array,
      default: [],
    },
    followings: {
      type: Array,
      default: [],
    },
    isAdmin: {
      type: Boolean,
      default: false,
     
    },
    desc: {
      type: String,
      max: 50,
    },
    
    from: {
      type: String,
      max: 50,
    },
    relationship: {
      type: Number,
      enum: [1, 2, 3],
    },

    //personal
    city: {
      type: String,
      max: 200,
    },
    phone: {
      type: Number,
      max: 10,
    },
    link: {
      type: String,
      max: 200,
    },

    //education
    institute: {
      type: String,
      max: 200,
    },
    degree: {
      type: String,
      max: 200,
    },
    cgpa: {
      type: Number,
      max: 20,
    },
    subject: {
      type: String,
      max: 200,
    },

    //work
    companyName: {
      type: String,
      max: 200,
    },
    jobTitle: {
      type: String,
      max: 200,
    },

    //skills
    skillName: {
      type: String,
      max: 200,
    },
    skillLevel: {
      type: String,
      max: 200,
    },

    //Project
    projectName: {
      type: String,
      max: 200,
    },
    //award
    awardName: {
      type: String,
      max: 200,
    },
    //feeddback
    feedback: {
      type: String,
      max: 500,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);