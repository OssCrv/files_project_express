const express = require('express');
const router = express.Router();

const indexController = require('../controller/indexController');
const authController = require('../controller/authController')
const fileController = require('../controller/fileController');

router.get('/', indexController.index);

router.get('/login', authController.login);
router.post('/auth', authController.auth);
router.get('/logout', authController.logout)


router.get('/upload', fileController.fileUploadForm);
router.post('/upload', fileController.uploadFile);

module.exports = router;