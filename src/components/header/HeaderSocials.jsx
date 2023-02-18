import React from 'react'
import{TbBrandLinkedin} from 'react-icons/tb'
import{VscGithub} from 'react-icons/vsc'
import{TbBrandFacebook} from 'react-icons/tb'
const headersocials = () => {
    return (
        <div className="header__socials">
            <a href="https://linkedin.com" target="_blank"><TbBrandLinkedin/></a>
            <a href="https://github.com" target="_blank"><VscGithub/></a>
            <a href="https://facebook.com" target="_blank"><TbBrandFacebook/></a>
            
        </div>
    )
}

export default headersocials
