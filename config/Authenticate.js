/** importing dependencies */

export const isAuthenticated = async (req, res, next) =>{
    if(req.session.isAuthenticated){
         next()
    }
    else{
        return res.redirect('/sign-up')
    }
}