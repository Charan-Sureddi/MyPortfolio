import React from 'react'
import { BsTwitter, BsInstagram } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <a href='https://twitter.com/CharanSureddi' target= "_blank"> <BsTwitter /> </a> 
        </div>
        <div>
            <FaFacebookF />
        </div>
        <div>
            <a href='https://www.instagram.com/charan_sureddi/' target="_blank"><BsInstagram /></a>
        </div>
    </div>
  )
}

export default SocialMedia