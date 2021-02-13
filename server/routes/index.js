const express = require('express');
const deviceControler = require('../controllers/DeviceControler');
const authController = require('../controllers/authController');

const appRouter = express.Router();

// appRouter.get('/posts', blogController.getAllBlogPosts);
// appRouter.post('/posts/new', postsController.addNewPost) 

appRouter.post('/bltDevice/add', deviceControler.addNewDevice); 
appRouter.get('/bltDevice/get/:deviceid', deviceControler.getDeviceByMacAddress);
appRouter.get('/bltDevice/getall', deviceControler.getAllDevices);

// appRouter.delete('/posts/:postId', isLoggedIn, blogController.deletePostbyId);
// appRouter.put('/posts/:postId/', isLoggedIn, blogController.editPostById);

module.exports = appRouter;
