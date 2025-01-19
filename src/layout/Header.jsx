import { CreateIcon } from '@/icon/icon'
import Button from '@/component/Button/Button'
import React from 'react'

const Header = () => {
    return (
        <header className='header'>
            <div className='container'>
                <div className='headerBlock'>
                    <div className='headerLeft'>
                        <h2>Gunjan <span>Creates</span></h2>
                        <CreateIcon />
                    </div>
                    <Button name={'Contact Me'} buttonColor={'red_fill_button'} />
                </div>
            </div>
        </header>
    )
}

export default Header