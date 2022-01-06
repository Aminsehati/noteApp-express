const express = require('express');
const router = express.Router();

const noteController = require('../../controllers/note/index.controller');
router.get("/", noteController.getListNotes);
router.get("/:id", noteController.getNoteItem);
router.post("/", noteController.addNewNote);
router.delete("/:id", noteController.deleteNoteItem);
router.put("/:id", noteController.updateNoteItem)
module.exports = router;