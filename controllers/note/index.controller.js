const noteModels = require('../../models/note.model');
class noteController {
    async getListNotes(req, res) {
        try {
            const notes = await noteModels.find().select("-__v -createdAt -updatedAt");
            res.json({
                isSuccess: true,
                data: {
                    notes
                }
            })
        } catch (error) {
            res.status(400).json({
                isSuccess: false,
                message: "An error has occurred"
            })
        }
    }
    async addNewNote(req, res) {
        try {
            const {
                text,
                link
            } = req.body;
            const newNote = new noteModels({
                text,
                link
            })
            await newNote.save();
            res.json({
                isSuccess: true,
                message: "success"
            })
        } catch (error) {
            res.status(400).json({
                isSuccess: false,
                message: "An error has occurred"
            })
        }
    }
    async deleteNoteItem(req, res) {
        try {
            const {
                id
            } = req.params;
            await noteModels.deleteOne({
                _id: id
            })
            res.json({
                isSuccess: true,
                message: "Successfully registered"
            })
        } catch (error) {
            return res.status(400).json({
                isSuccess: false,
                message: "An error has occurred"
            })
        }
    }
    async getNoteItem(req, res) {
        try {
            const {
                id
            } = req.params;
            const noteItem = await noteModels.findOne({
                _id: id
            }).select("-__v -createdAt -updatedAt")
            res.json({
                isSuccess: true,
                data: {
                    noteItem
                }
            })
        } catch (error) {
            return res.json({
                isSuccess: false,
                message: "An error has occurred"
            })
        }
    }
    async updateNoteItem(req, res) {
        try {
            const {
                id
            } = req.params;
            const {
                text,
                link
            } = req.body;
            await noteModels.findOneAndUpdate({
                _id: id
            }, {
                text,
                link
            })
            res.json({
                isSuccess:true,
                message:"sucess updated"
            })
        } catch (error) {
            return res.status(400).json({
                isSuccess: false,
                message: "An error has occurred"
            })
        }
    }
}
module.exports = new noteController();