"use client"; // Ensures it's a Client Component

import Button from '@/component/Button/Button'
import { ArrowIconRight, MoreThenArrow, NavigateArrowLeft } from '@/icon/icon'
import Footer from '@/layout/Footer'
import Header from '@/layout/Header'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'

const ViewProject = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push('/');
    };

    return (
        <div className='projectPage'>
            <Header />

            <div className='container'>
                <div className='pageNavigateBlock mt40 mb50'>
                    <button className='text14r leftArrowRoute' onClick={handleClick}>
                        <NavigateArrowLeft />
                        Home
                    </button>

                    <MoreThenArrow color={'#595959'} />
                    <div className='text14r'>Projects</div>
                    <MoreThenArrow />
                    <span className='text14r'>Dragon Fruit Website Design</span>
                </div>
            </div>

            <section className='myProjectSection mb100'>
                <div className='container'>
                    <div className='commonHeading mb50'>
                        <h2 className='heading2 iconHeading'>Dragon Fruit Website</h2>
                    </div>
                    <div className='projectViewBlock'>
                        <img src="/assets/img/project1.png" alt="" />
                    </div>

                </div>
            </section>

            <section className='paddingY letsDiscussSection'>
                <div className='container'>
                    <div className='letsDiscussBlock'>
                        <h3 className='text40b'>Have an awesome project idea?</h3>
                        <h2 className='text72r'>Let's Discuss</h2>

                        <div className='bookMeetDetail'>
                            <div className="rightBookMeetBlock mt60">
                                <div className="calenderIcon">
                                    <img src="/assets/svg/calender.svg" alt="" />
                                    <div className="detailText text16r">
                                        I'm happy to offer you a 15-30 mins free chat at a time that works for you, don't hesitate to reach out and let's talk about it!
                                    </div>
                                </div>
                                <Button name={'Book a meet'} buttonColor={'red_fill_button'} />
                            </div>

                            <p className='text20ri'>
                                Or mail at: <Link className='textBlack underline' href={'mailto:gunjancreates871@gmail.com'}>gunjancreates871@gmail.com</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default ViewProject