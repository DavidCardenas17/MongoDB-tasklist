const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    id: Number,
    tarea: String,
    FechaLimite: date,
    status: String
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;