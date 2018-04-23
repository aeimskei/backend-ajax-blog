const fs = require('fs')
const ids = require('short-id')
const filePath = './posts.json'

const posts = JSON.parse(fs.readFileSync(filePath))

// ===========================================
// GET, Read all posts data
// ===========================================

function getAllPosts() {
  return posts;
}
// TEST: http GET localhost:3000/posts

// ===========================================
// GET, Read posts by id
// ===========================================

function getPostById(id) {
  const post = posts.find(post => post.id === id)

  if (!post) {
    return {error: 404, message: `Sorry, post with id ${id} was not found.`}
  } else {
    return post;
  }
}
// TEST: http GET localhost:3000/posts/ed8f74

// ===========================================
// POST, Create new post
// ===========================================

function createPost(title, content) {
  const posts = getAllPosts()

  const newPost = {
    id: ids.generate(),
    title: title,
    content: content
  }

  posts.push(newPost)
  fs.writeFileSync(filePath, JSON.stringify(posts))

  return newPost;
}
// TEST: http POST localhost:3000/posts title='New Post' content='Something new here'

// ===========================================
// PUT, Update post
// ===========================================

function updatePost(id, title, content) {
  const post = getPostById(id)

  if (!post) {
    return {error: 404, message: `Post with id of ${id} not found.`}
  }

  post.title = title
  post.content = content
  fs.writeFileSync(filePath, JSON.stringify(posts))

  return post;
}
// TEST: http PUT localhost:3000/posts/7fdf61 title:='Test Change' content='Update Content'

// ===========================================
// DELETE, Destroy post
// ===========================================

function deletePost(id) {
  const post = posts.find(post => post.id === id)

  if (!post) {
    return {error: 404, message: `Post id of ${id} was not found`}
  }

  const index = posts.indexOf(post)
  posts.splice(index, 1)
  fs.writeFileSync(filePath, JSON.stringify(posts))

  return post;
}
// TEST: http DELETE localhost:3000/posts/07ddcf



module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost
}