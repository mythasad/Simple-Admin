import { User } from '../models/User.model.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'


// Signup Functions

export const signUp = async (req, res) => {
    try {
        const { username, password } = req.body
        if (!username || !password) {
            return res.status(400).json({ error: "Submit both username and password." })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        // const newUser = {
        //     username,
        //     password: hashedPassword
        // }
        await User.create({ username, password: hashedPassword })

        // const newUser = new User({username, password: hashedPassword})
        // await newUser.save()

        return res.status(201).json({message: 'User created successfully.'})

    } catch (error) {
        console.error('Error:', error)
        return res.status(500).json({ error: "Internal server error at signUp." })
    }

}


// Login Functions

export const logIn = async (req, res) =>{
    try {
        const {username, password} = req.body 
        const user = await User.findOne({username})
        if(user && (await bcrypt.compare(password,  user.password))){
            const token = jwt.sign({id: user._id},  'ThisIsAVeryHardSecretKey4TockeNizedTheUser&NoThingElse')
            res.json({token})

        }
        else{
            res.status(400).json({message: 'Invalid credentials'})
        }
        
    } catch (error) {
        console.error('Error', error)
        return res.status(500).json({error: "Internal server error at logIn."})
        
    }
}