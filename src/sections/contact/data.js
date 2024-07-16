import {HiOutlineMail} from 'react-icons/hi'
import { FaFacebook } from "react-icons/fa";
import {FaWhatsapp} from 'react-icons/fa'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaCommentDots } from "react-icons/fa";


const data = [
    {id: 1, icon: <HiOutlineMail/>, link: 'mailto:aminebouguettaya2021@gmail.com'},
    {id: 2, icon: <FaFacebook/>, link: 'https://www.facebook.com/amine.bouguettaya.169'},
    {id: 3, icon: <FaWhatsapp/>, link: 'https://wa.me/+18196391751'},
    {id: 4, icon: <FaLinkedin/>, link: 'https://www.linkedin.com/in/amine-bouguettaya-b715092b0/'},
    {id: 5, icon: <FaGithub/>, link: 'https://github.com/amineboug2901'},
    {id: 6, icon: <FaCommentDots/>, link: '/contact'} ,

]



// alternative whatsApp link
// https://wa.me/yournumber
// https://api.whatsapp.com/send/?phone=%2B233557097546


export default data