const mongoose = require("mongoose");
const {Model} = require('mongoose');
const {PositionsSchema} = require('../schemas/PositionsSchema');

const PositionsModel = new mongoose.model("psoition", PositionsSchema);

module.exports = {PositionsModel};