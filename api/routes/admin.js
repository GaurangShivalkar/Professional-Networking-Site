const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema(
    {
        adminname: {
            type: String,
            require: true,
            min: 3,
            max: 20,
            unique: true,
        },
        adminemail: {
            type: String,
            required: true,
            max: 50,
            unique: true,
        },
        adminpassword: {
            type: String,
            required: true,
            min: 6,
        },

    },
);

module.exports = mongoose.model("Admin", AdminSchema);