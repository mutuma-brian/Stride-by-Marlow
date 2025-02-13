const Product = require('../models/Product');
const fs = require('fs');


//show all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};

//add Product

exports.createProduct = async (req, res) => {

  //let image_filename = `${req.file.filename}`;
    //const { name, description, price, brand, size,  } = req.body;
    const newProduct = new Product({
      name:req.body.name,
      description:req.body.description,
      price:req.body.price,
      brand:req.body.brand,
      size:req.body.size,
      //image:image_filename
    });
  try {
     await newProduct.save();
    res.json({success:true,message:"Product Added"});
  } catch (error) {
    console.error(error.message);
    res.json({success:false,message:"Error"});
  }
};


//update Product
exports.updateProduct = async (req, res) => {
  try {
    const { name, description, price, brand, size, image } = req.body;
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { name, description, price, brand, size, image },
      { new: true }
    );
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};


//remove product
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    //fs.unlink(`uploads/${Product.image}`, () => {});
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json({ message: 'Product Deleted' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
};