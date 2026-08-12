import  database from "../database/users.json" with {type:"json"}
const {funcionarios} = database;

const usersRepository = {
    getAllUsers(){
        return funcionarios
    },
    getUserById(id){
        return funcionarios.find(u => u.id == id)
    },
}


export default usersRepository