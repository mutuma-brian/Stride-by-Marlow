const express = require('express');
const router = express.Router();
const { getUserProfile, updateUserProfile, uploadProfilePicture } = require('../controllers/userController');
const auth = require('../middleware/auth');
const multer = require('multer');

const upload = multer({ storage: multer.memoryStorage() });

router.get('/profile', auth, getUserProfile);
router.put('/profile', auth, updateUserProfile);
router.post('/profile-picture', auth, upload.single('profilePicture'), uploadProfilePicture);

module.exports = router;