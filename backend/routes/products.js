const express = require('express');
const multer = require('multer')
const router = express.Router();
const { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');

//Image storage Engine
const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})


//GET
router.get('/', getAllProducts);
router.get('/:id', getProductById);

//POST
router.post('/',upload.single("image"),createProduct);
router.put('/:id',updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;