"use client"; // Ensures it's a Client Component

import Button from '@/component/Button/Button'
import { ArrowIconRight, MoreThenArrow, NavigateArrowLeft } from '@/icon/icon'
import Footer from '@/layout/Footer'
import Header from '@/layout/Header'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React from 'react'

const ProjectPage = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push('/');
    };
    const handleClickView = () => {
        router.push('/projects/viewproject');
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
                    <MoreThenArrow />
                    <span className='text14r'>Projects</span>
                </div>
            </div>

            <section className='myProjectSection mb100'>
                <div className='container'>
                    <div className='commonHeading'>
                        <h2 className='heading2 iconHeading'>My design Projects</h2>
                    </div>
                    <div className='myProjectBlock mt50'>
                        <div className='myProjectCardWrapper'>
                            <div className='leftProjectCard'>
                                <h3 className='text28b'>CreateAR a portfolio <br className='mobHide' /> website for AR Creators</h3>
                                <div className='tabWrapper'>
                                    <div className='tagBlock text16r'>UI UX Design</div>
                                    <div className='tagBlock text16r'>Figma</div>
                                    <div className='tagBlock text16r'>Website Design</div>
                                </div>
                                <p className='text16r'>
                                    The primary goal is to establish a platform that connects creators specializing in AR
                                    (Augmented Reality) filters with businesses seeking innovative and engaging filters for their brand.
                                </p>

                                <Button name={'View complete design'} svgIcon={<ArrowIconRight />} className={'red_arrow_link'} onClick={handleClickView} />
                            </div>
                            <img src="/assets/img/projectImage1.png" alt="projectImage1" className='projectcardImg' />
                        </div>

                        <div className='myProjectCardWrapper'>
                            <div className='leftProjectCard'>
                                <h3 className='text28b'>Dating application</h3>
                                <div className='tabWrapper'>
                                    <div className='tagBlock text16r'>UI UX Design</div>
                                    <div className='tagBlock text16r'>Figma</div>
                                    <div className='tagBlock text16r'>Application Design</div>
                                </div>
                                <p className='text16r'>
                                    The primary goal is to create a dating application that facilitates meaningful connections between individuals.
                                    They aim to provide a platform where users can find compatible matches based on interests, preferences, and shared values.
                                </p>

                                <Button name={'View complete design'} svgIcon={<ArrowIconRight />} className={'red_arrow_link'} onClick={handleClickView} />
                            </div>
                            <img src="/assets/img/projectImage2.png" alt="projectImage1" className='projectcardImg' />
                        </div>
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

export default ProjectPage;
