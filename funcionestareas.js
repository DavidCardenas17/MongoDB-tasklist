require('dotenv').config();
const userModel = require("./formatotareas.js");
const connectDB = require("./conexiondb.js"); 
const mongoose = require("mongoose");

connectDB();

const userModel = mongoose.model("Users", new mongoose.Schema({
    
"id": Number,
"tarea": String,
"FechaLimite": date,
"status": String
    }));

const createUser = async (users) => {
    try {
    const newUser = new userModel(users);
    return await newUser.save();
    } catch (error){
    console.error('Error al crear el usuario:', error);
    return null;
    }
};

const findUsers = async () => {
    try {
    return await userModel.find();
    } catch (error){
    console.error('Error al encontrar el usuario:', error);
    return null;
    }
};

const findUserById = async (id) => {
    try {
    return await userModel.findById(id);
    } catch (error) {
    console.error('Error al encontrar el id:', error);
    return null;
    }
};

const deleteUserById = async (id) => {
    try {
    return await userModel.deleteOne(id);
    } catch (error){
    console.error('Error al eliminar el usuario:', error);
    return null;
    }
};

const updateUser = async (id, data) => {
    try {
    return await userModel.updateOne({ _id: id }, { $set: { ...data } });
    } catch (error) {
    console.error('Error al crear al actualizar:', error);
    return null;
    }
};


const CRUD = {
    createUser,
    findUsers,
    findUserById,
    deleteUserById,
    updateUser,
};

module.exports = CRUD;