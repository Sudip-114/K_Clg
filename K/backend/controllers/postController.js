exports.createPost = (req, res) => {
  const posts = readPosts();
  const newPost = {
    id: Date.now(),
    title: req.body.title,
    content: req.body.content,
    location: req.body.location || null,  // add location
    createdAt: new Date()
  };
  posts.unshift(newPost);
  writePosts(posts);
  res.status(201).json(newPost);
};
