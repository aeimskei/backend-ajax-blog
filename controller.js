const model = require('./model')

// ===========================================
// GET, Read all posts data
// ===========================================

const getAllPosts = (req, res, next) => {
  const posts = model.getAllPosts()

  res.status(200).json({data: posts})
}




module.exports = {
  getAllPosts
}