import usersRepository from "../repository/usersRepository.js";


export function getUserById(req,res){
    const id = req.params.id
    const users = usersRepository.getUserById(id)
    res.status(200).json(users)
}

export function getAllUsers(req,res){
    const users = usersRepository.getAllUsers()
    res.status(200).json(users)
}