const User = require('../models/User.js')
const Note = require('../models/Note.js')
const asyncHandler = require('express-async-handler')

// @desc Get all notes
// @route GET /notes
// @access Private

const getAllNotes = asyncHandler(async (req, res) => {
  const notes = await Note.find().lean()

  if(!notes.length){
    return res.status(400).json({ message: "There are no notes available"})
  }

  const notesWithUser = await Promise.all(notes.map(async (note) => {
    const user = await User.findById(note.user).lean().exec()
    return { ...note, userName: user?.userName}
  }))

  res.json(notesWithUser)
})

// @desc Post a note
// @route GET /note
// @access Private

const createNewNote = asyncHandler(async (req, res) => {
  const { user, title, text } = req.body

  if(!user || !title || !text){
    return res.status(400).json({ message: "All fields are required"})
  }

  // Check for title duplicates
  const duplicate = await Note.findOne({ title }).lean().exec()

  if(duplicate){
    return res.status(201).json({ message: 'Duplicated title' })
  }

  const note = await Note.create({ user, title, text})

  if (note) { // Created 
    return res.status(201).json({ message: 'New note created' })
  }else {
    return res.status(201).json({ message: 'New note created' })
  }

})

// @desc Update a note
// @route GET /notes
// @access Private

const updateNote = asyncHandler(async (req, res) => {
  const { _id, user, title, text, completed } = req.body
  
  // Validate data existence
  if(!title || !user || !text || typeof completed !== 'boolean'){
    return res.status(400).json({ message: "All fields are required"})
  }

  const note = await Note.findById(_id).exec()

  if(!note){
    return res.status(400).json({ message: "Note not found"})
  }

  note.title = title
  note.text = text
  note.completed = completed
  note.user = user

  const updateNote = await note.save()

  if(!updateNote){
    return res.status(400).json({ message: "Can't update note"})
  }

  res.status(200).json({ message: "Note updated successfully"})
})

// @desc Delete a note
// @route GET /notes
// @access Private

const deleteNote = asyncHandler(async (req, res) => {
  const { _id } = req.body

  // Validate data
  if(!_id){
    return res.status(400).json({ message: "ID not found"})
  }

  const note = await Note.findOne({_id}).exec()

  if(!note){
    return res.status(400).json({ message: "Note not found"})
  }

  const deletedNote = await note.deleteOne()
  
  if(!deletedNote){
    return res.status(400).json({ message: "Note couldn't be deleted"})
  }

  res.status(200).json({ message: "note successfully deleted"})
})

module.exports = { getAllNotes, createNewNote, updateNote, deleteNote }