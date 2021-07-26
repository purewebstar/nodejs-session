/** importing dependencies */
import bcrypt from 'bcrypt'

/** importing models */
import {userAccount} from '../models/user.model.js'


/** Creating user account */
export const createUser = async (req, res) =>{
   // accepting request data's
   const {fullName, email, password}= req.body
   
   // checking if the user exists
   let isExist = await userAccount.findOne({email})
   if(isExist){
       return res.redirect('/sign-up')
   }
   const encryptPass = await bcrypt.hash(password, 10)
   const registerUser = new userAccount({
       fullName,
       email,
       password: encryptPass
   })

   // try to register new user
   try{

     await registerUser.save()
     res.redirect('/sign-in')

   }catch(err){
       res.json({message: err.message})
   }

}

/** reading user account */
export const readUser = async (req, res) =>{
     
     const {email, password} = req.body

     let isExist = await userAccount.findOne({email})
     if(!isExist) return res.redirect('/sign-in')
     //
     let isMatch = await bcrypt.compare(password, isExist.password)
     if(isMatch){
        req.session.isAuthenticated = true
        return res.redirect('/dashboard')
     }
     else return res.redirect('/sign-in')
}

/** user logout */
export const logout = async (req, res) =>{
    req.session.destroy((err)=>{
        if(err) throw err
        res.redirect('/sign-in')
    })
}