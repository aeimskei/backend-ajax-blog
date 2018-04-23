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

// ===========================================
// POST, Create new post
// ===========================================

const createPost = (req, res, next) => {
  const {title, content} = req.body

  if (!title || !content) return next({status: 400, message: `Title and content are required to add post.`})

  const post = model.createPost(title, content)

  res.status(201).json({data: post})
}

// ===========================================
// PUT, Update post
// ===========================================

const updatePost = (req, res, next) => {
  const id = req.params.id
  const {title, content} = req.body

  if (!id) return next({status: 400, message: `Post ID is required to update.`})

  const post = model.updatePost(id, title, content)

  if (post.error) {
    let {error, message} = post;
    return res.status(201).json({error: {message}})
  }

  res.status(201).json({data: post})
}


module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost
}