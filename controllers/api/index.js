const router = require('express').Router();
const userRoutes = require('./userRoutes');
const timeslotRoutes = require('./timeslotRoutes');
// const projectRoutes = require('./projectRoutes');

router.use('/users', userRoutes);
// router.use('/projects', projectRoutes);

router.use('/timeslot', timeslotRoutes);

module.exports = router;
