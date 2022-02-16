const files = require("../model/fileModel")
const multer = require('multer');


module.exports = {

    index: function (req, res) {
        files.get(req.con,
            function (err, rows) {
                if (err) console.error(err)
                console.table(rows)
                res.render("uploader", {
                    title: "Uploader Page",
                })
            })
    },

    file: function (req, res) {
        upload(req, res, (err) => {
            if (err) {
                res.render('Uploader', {
                    msg: err,
                })
            }
            else {
                if (req.file == undefined) {
                    res.render('Uploader', {
                        msg: "Please Select a File ! "
                    })
                }
                else {
                    res.render('Uploader', {
                        msg: "File Uploaded Successfully",
                        file: `uploads/${req.file.filename}`
                    })
                }
            }
        })
    }

}

