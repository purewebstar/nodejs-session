/** importing dependencies */
import express from 'express'

/** importing controllers */
import {createUser, readUser, logout} from '../controllers/user.controller.js'

const router = express.Router()

//GET HTTP

// POST HTTP
router.post('/create-user', createUser)
router.post('/read-user', readUser)
router.post('/logout', logout)

export default router