const express = require('express');
const router = express.Router();
const {
  create,
  list,
  listAllBlogsCategoriesTags,
  read,
  remove
} = require('../controllers/blog');

const { requireSignin, adminMiddleware } = require('../controllers/auth');
const { update } = require('../models/tag');

router.post('/blog', requireSignin, adminMiddleware, create);
router.get('/blogs', list);
router.get('/blogs-categories-tags', listAllBlogsCategoriesTags);
router.get('/blog/:slug', read);
router.delete('/blog/:slug', requireSignin, adminMiddleware, remove);
router.put('/blog/:slug', requireSignin, adminMiddleware, update);

module.exports = router;
