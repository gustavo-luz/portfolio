import {AiFillGithub} from "react-icons/ai";
import {FaLinkedinIn} from "react-icons/fa";
import {BsMedium} from "react-icons/bs";
import React from "react";

const footerConfig = {
    icons: [
        {
            id: "footer-0",
            url: "https://github.com/gustavo-luz",
            className: "social-icon",
            target: "_blank",
            icon: <AiFillGithub size={50}/>
        },
        {
            id: "footer-1",
            url: "hhttps://www.linkedin.com/in/gustavo-luz-unb/",
            className: "social-icon",
            target: "_blank",
            icon: <FaLinkedinIn size={50}/>
        }
    ]
}

export default footerConfig
