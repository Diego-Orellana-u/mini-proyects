const User = require('../models/User.js')
const Note = require('../models/Note.js')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')


// @desc Get all users
// @route GET /users
// @access Private

const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find().select('-password').lean()
  if(!users?.length){
    return res.status(400).json({ message: 'No users found'})
  }

  res.json(users)
})

// @desc Create user
// @route POST /users 
// @access Private

const createNewUser = asyncHandler(async (req, res) => {
  const { userName, password, roles } = req.body

  // Confirm data
  if(!userName || !password || !Array.isArray(roles) || !roles?.length){
    return res.status(400).json({ message: 'All fields are required' })
  }

  // Check for duplicates
  const duplicate = await User.findOne({ userName }).lean().exec()
  if(duplicate){
    return res.status(409).json({ message: 'That user already exists'})
  }

  // Hash password
  const hashedPsw = await bcrypt.hash(password, 10)

  const userObject = { userName, "password": hashedPsw , roles }

  // Create and store new user

  const user = await User.create(userObject)
  if(user){
    res.status(201).json({ message: `New user ${userName} created`})
  }else {
    res.status(400).json({ message: 'Invalid user data received'})
  }
})

// @desc Update a user
// @route PATCH /users
// @access Private

const updateUser = asyncHandler(async (req, res) => {
  const { id, userName, roles, active, password } = req.body

  // Confirm data
  if(!id || !userName || !Array.isArray(roles) || !roles.length || typeof active !== 'boolean'){
    return res.status(400).json({ message: "All fields are required"})
  }

  const user = await User.findById(id).exec()

  if(!user){
    return res.status(400).json({ message: "User not found"}) 
  }

  // Check for duplicate 
  const duplicate = await User.findOne({ userName }).lean().exec()

  if(duplicate && duplicate?._id.toString() !== id){
    return res.status(409).json({ message: "Duplicate username"}) 
  }

  user.userName = userName
  user.roles = roles
  user.active = active

  
  //  Hash password
  if(password){
    const hashedPsw = await bcrypt.hash(password, 10)
    user.password = hashedPsw
  }

  const updatedUser = await user.save()

  res.status(200).json({ message: `${updatedUser.userName} updated`})
})

// @desc Delete a user
// @route DELETE /users
// @access Private

const deleteUser = asyncHandler(async (req, res) => {
  const { _id, userName } = req.body

  if(!_id){
    return res.status(400).json({ message: `User ID required`})
  }

  const note = await Note.findOne({ user: _id}).lean().exec()
  if(note){
    return res.status(400).json({ message: `User has assigned notes`})
  }

  const user = await User.findById(_id).exec()

  if(!user){
    return res.status(400).json({ message: `User not found`})
  }

  const result = await user.deleteOne()

  if(result){
    const reply = `Username ${userName} with ID ${_id} deleted`
  
    res.status(200).json({ message: reply})
  }
})

module.exports = { getAllUsers, createNewUser, updateUser, deleteUser}