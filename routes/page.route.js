/** importing dependencies */
import express from 'express'
/** importing controllers */
import {home, login, dashboard, signUp} from '../controllers/page.controller.js'
import {isAuthenticated} from '../config/Authenticate.js'

const router = express.Router()

//GET HTTP
router.get('/', home)
router.get('/index', home)
router.get('/sign-in', login)
router.get('/dashboard', isAuthenticated, dashboard)
router.get('/sign-up', signUp)

//POST HTTP

export default router