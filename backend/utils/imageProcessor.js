const sharp = require('sharp');

exports.processImage = async (buffer) => {
  try {
    const processedImageBuffer = await sharp(buffer)
      .resize(300, 300)
      .jpeg({ quality: 90 })
      .toBuffer();

    return processedImageBuffer;
  } catch (error) {
    console.error('Error processing image:', error);
    throw error;
  }
};