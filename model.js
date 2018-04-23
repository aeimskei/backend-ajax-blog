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


module.exports = {
  getAllPosts,
  getPostById
}