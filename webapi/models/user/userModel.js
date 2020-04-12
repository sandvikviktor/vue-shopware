const mongodb = require('mongoose')
const User = require('./userSchema')
const auth = require('../../authentication/auth')
const encrypt = require('bcrypt')

exports.registerUser = (req, res) => {
   //Kollar om mailen som användaren skrivit in är unik
   User.find({ email: req.body.email })
      .then(exits => {
         if (exits > 0) {
            return res.status(400).json({
               statusCode: 400,
               status: false,
               message: 'User with same email address already exists.'
            })
         }

         //Skapar hash
         encrypt.hash(req.body.password, encrypt.genSaltSync(10), (error, hash) => {
            if (error) {
               return res.status(500).json({
                  statusCode: 500,
                  status: false,
                  message: 'Error: Failed to create user password hash.'
               })
            }

            //Skapar en ny användare
            const user = new User(
               {
                  _id: new mongodb.Types.ObjectId,
                  firstName: req.body.firstName,
                  lastName: req.body.lastName,
                  email: req.body.email,
                  passwordHash: hash
               }
            )
            
            //Sparar användaren
            user.save()
               .then(() => {
                  res.status(201).json({
                     statusCode: 201,
                     status: true,
                     message: 'User was successfully created.'
                  })
               })
               .catch(error => {
                  res.status(500).json({
                     statusCode: 500,
                     status: false,
                     message: 'Unable to create user. Please contact the System Administrator.'
                  })
               })
         })
      })
}

exports.loginUser = (req, res) => {
   
   //Letar efter användaren genom email adressen
   User.findOne({ email: req.body.email })
   .then(user => {
      if (user === null) {
         return res.status(401).json({
            statusCode: 401,
            status: false,
            message: 'Incorrect email address or password.'  //Skriver ut att något av email eller lösenord är fel och inte bara t.ex "email" 
         })
      }

      try {
         encrypt.compare(req.body.password, user.passwordHash, (error, result) => {
            if (result) {
               return res.status(200).json({
                  statusCode: 200,
                  status: true,
                  message: 'Authentication was successful.',
                  token: auth.genToken(user._id),
                  user: {
                     id: user._id,
                     email: user.email,
                     name: user.firstName
                  }
               })
            }
            return res.status(401).json({
               statusCode: 401,
               status: false,
               message: 'Incorrect email address or password.'
            })
         })  
      } 
      catch {
         return res.status(500).json({
            statusCode: 500,
            status: false,
            message: 'Unable to authenticate user, please contact the System Administrator.'
         })
      }

      
   })
}

exports.getUsers = (req, res) => {
   User.find()
      .then(data => res.status(200).json(data))
      .catch(error => res.status(500).json(error))
}

exports.getUser = (req, res) => { 
   userModel.findOne({ _id: req.params.id })
   .then(user => {

      if(user === null)
      return res.status(404).json({
         statusCode: 404,
         status: false,
         message: "Unable to get user from database."
      })

      return res.status(200).json({
         statusCode: 200,
         status: true,
         message: "Getting user was successful.",
         user: {
            id: user._id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email
         }
      })
   })
   .catch(error => res.status(500).json({
      statusCode: 500,
      status: false,
      message: "Unable to get user from database."
   }))
}