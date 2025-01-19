import Header from '@/layout/Header'
import Link from 'next/link'
import React from 'react'
import { ArrowIconRight } from './icon/icon'

const page = () => {
    return (
        <div className='mainPage'>
            <Header />
            <section className='paddingY heroSection'>
                <div className='container'>
                    <div className='heroBlock'>
                        <div className="leftSideHero">
                            <span className='subTitle'>Hey there!</span>
                            <div className='aboutDetailHero mt20'>
                                <p className='text16r'>I am <span className='textBold textRed'>Gunjan Paneri</span>, and I
                                    have been working majorly
                                    as a <span className='textRedItalic'>
                                        UI UX (Web, and App Designer),
                                        and Product Designer and sometimes as
                                        Graphics and Visual Designer
                                    </span> for the past
                                    3 years. I have designed SAAS products,
                                    websites, landing pages, applications,
                                    posters, brochures, presentations,
                                    packaging designs, banners, logos,
                                    pamphlets, business cards, menus,
                                    calendars, thumbnails, catalogs,
                                    and many more designs
                                    related to Graphics and UI UX design. </p>

                                <p className='text16r'>As a designer, I put much value on trustful, transparent, and long-term relationships. Your privacy, terms, and deadlines will always be respected. I offer creative and practical suggestions to make designs amazing and useful. If you're interested, please feel free to reach out to me
                                    via my email gunjancreates871@gmail.com. Don't
                                    hesitate to reach out, let's talk about it and
                                    turn your visions into reality!</p>

                                <Link href={'#'} className='red_arrow_link'>Book a 15 mins free meet <ArrowIconRight /> </Link>
                            </div>
                        </div>
                        <div className="rightSideHero">
                            <img src="/assets/img/profileImage.png" alt="profileImage" className='profileImg' />
                            <div className='verticalFontBlock'>
                                <h3></h3>
                                <div className='socialMediaBlock'>
                                    <Link href={'#'}></Link>
                                    <Link href={'#'}></Link>
                                    <Link href={'#'}></Link>
                                    <Link href={'#'}></Link>
                                    <Link href={'#'}></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default page