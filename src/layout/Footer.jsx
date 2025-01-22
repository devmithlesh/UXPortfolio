import Link from 'next/link'
import React from 'react'

const Footer = ({ className }) => {
    return (
        <footer className='footerBlock'>
            <div className="container">
                <div className='footerWrapper'>
                    <span className='text16r'>@ 2024 GunjanCreates. All rights Reserved</span>

                    <div className='socialIconWrap'>
                        <Link href={'#'}><img src="/assets/svg/instagram.svg" alt="" /></Link>
                        <Link href={'#'}><img src="/assets/svg/linkedin.svg" alt="" /></Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer