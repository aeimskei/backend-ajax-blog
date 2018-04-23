const model = require('./model')

// ===========================================
// GET, Read all posts data
// ===========================================

const getAllPosts = (req, res, next) => {
  const posts = model.getAllPosts()

  res.status(200).json({data: posts})
}

// ===========================================
// GET, Read posts by id
// ===========================================

const getPostById = (req, res, next) => {
  const id = req.params.id

  if (!id) return next({status: 400, message: `Post ID is required.`})

  const post = model.getPostById(id)

  if (post.error) {
    let {error, message} = book;
    return res.status(error).json({error: {message}})
  }

  res.status(200).json({data: post})
}

module.exports = {
  getAllPosts,
  getPostById
}