import User from '../../Models/User';



const isLoggedIn = () => {
    User.findOne({})
}