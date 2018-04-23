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



module.exports = {
  getAllPosts
}