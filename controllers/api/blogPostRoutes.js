// IMPORTS & DEPENDENCIES
const router = require("express").Router();
const { BlogPost } = require("../../models");
const withAuth = require("../../utils/auth");

// CREATE NEW BLOG POST ROUTE
router.post("/", withAuth, async (req, res) => {
  console.log(req.body);
  try {
    const newBlogPost = await BlogPost.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBlogPost);
  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});

// EDIT BLOG POST ROUTE
router.put("/:id", withAuth, async (req, res) => {
  console.log(req.body);
  try {
    const blogPostData = await BlogPost.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

// IF NO BLOG POST DATA, SEND 404 ERROR
    if (!blogPostData) {
      res.status(404).json({ message: "No blog post found with this id!" });
      return;
    }
    
// IF BLOG POST DATA, SEND 200 STATUS
    res.status(200).json(blogPostData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE AN EXISTING POST ROUTE
router.delete("/:id", withAuth, async (req, res) => {
  console.log(req.params.id);
  try {
    const blogPostData = await BlogPost.destroy({
      where: {
        id: req.params.id,
      },
    });

// IF NO BLOG POST DATA, SEND 404 ERROR
    if (!blogPostData) {
      res.status(404).json({ message: "No blog post found with this id!" });
      return;
    }
    
// IF BLOG POST DATA, SEND 200 STATUS
    res.status(200).json(blogPostData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// EXPORTS
module.exports = router;