const mongoose = require('mongoose');

const userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}
},{timestamps: true});
mongoose.model={}
export default mongoose.model("user",userSchema);