const mongoose = require("mongoose");
const {Model} = require('mongoose');
const {HoldingsSchema} = require('../schemas/HoldingsSchema');

const HoldingsModel = new mongoose.model("holding", HoldingsSchema);

module.exports = {HoldingsModel};
