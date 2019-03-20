const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HouseSchema = new Schema({
  HouseName: String,
  people: Array,
  task: Array,
  userId: {type:Schema.Types.ObjectId, ref:"User"}
})


const House = mongoose.model('House', HouseSchema);
module.exports = House;
