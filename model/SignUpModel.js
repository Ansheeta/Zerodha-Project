const mongoose = require("mongoose");
const {Model} = require('mongoose');
const {SignUpSchema} = require('../schemas/SignUpSchema');

const SignUpModel = new mongoose.model("signup", SignUpSchema);

module.exports = {SignUpModel};