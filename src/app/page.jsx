import Header from '@/layout/Header'
import Link from 'next/link'
import React from 'react'
import { ArrowIconRight, FiverIcon, InstagramIcon, LinkedinIcon, MediaIcon, UpworkIcon } from '../icon/icon'

const page = () => {
    return (
        <div className='mainPage'>
            <Header />
            <section className='paddingY heroSection'>
                <div className='container'>
                    <div className='heroBlock'>
                        <div className="leftSideHero">
                            <span className='heading2'>Hey there!</span>
                            <div className='aboutDetailHero mt20'>
                                <p className='text16rl'>I am <span className='textBold textRed'>Gunjan Paneri</span>, and I
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

                                <p className='text16rl'>As a designer, I put much value on trustful, transparent, and long-term relationships. Your privacy, terms, and deadlines will always be respected. I offer creative and practical suggestions to make designs amazing and useful. If you're interested, please feel free to reach out to me
                                    via my email gunjancreates871@gmail.com. Don't
                                    hesitate to reach out, let's talk about it and
                                    turn your visions into reality!</p>

                                <Link href={'#'} className='red_arrow_link'>Book a 15 mins free meet <ArrowIconRight /> </Link>
                            </div>
                        </div>
                        <div className="rightSideHero">
                            <img src="/assets/img/profileImage.png" alt="profileImage" className='profileImg' />
                            <div className='verticalFontBlock'>
                                <h3 className='text16rl'>Follow me on:</h3>
                                <div className='borderLineVertical'></div>
                                <div className='socialMediaBlock'>
                                    <Link href={'#'}><InstagramIcon /></Link>
                                    <Link href={'#'}><LinkedinIcon /></Link>
                                    <Link href={'#'}><UpworkIcon /></Link>
                                    <Link href={'#'}><FiverIcon /></Link>
                                    <Link href={'#'}><MediaIcon /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='paddingY myDesignSection'>
                <div className='container'>
                    <h2 className='heading2'>My Design Process</h2>
                    <div className='myDesignBlock mt50'>
                        <div className="designProcessCardWrap">
                            <img src="/assets/img/research.png" alt="research" className="designImage" />

                            <div className='contentCardProcess mt24'>
                                <h3 className='text20b textRed'>Research and Empathize</h3>
                                <p className='text16r mt12'>Research the problem or challenge we are trying to address. Learn about the user. Analyze competitors and industry standards to gather insights. Organize content and information in a logical and intuitive manner.</p>
                            </div>
                        </div>
                        <div className="designProcessCardWrap">
                            <img src="/assets/img/analyze.png" alt="analyze" className="designImage" />

                            <div className='contentCardProcess mt24'>
                                <h3 className='text20b textRed'>Define and Analyze</h3>
                                <p className='text16r mt12'>Define goals and objectives. Create user personas and user journey maps to visualize the user's experience. Analyzing other products in the market to identify strengths, weaknesses, and opportunities.</p>
                            </div>
                        </div>
                        <div className="designProcessCardWrap">
                            <img src="/assets/img/testing.png" alt="testing" className="designImage" />

                            <div className='contentCardProcess mt24'>
                                <h3 className='text20b textRed'>Design and Testing</h3>
                                <p className='text16r mt12'>Create low-fidelity mockup to outline the layout and structure of the UI. Choose a color scheme, typography, and create high-fidelity mockups with detailed graphics and UI elements. And finally test the designs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='paddingY toolUseSection'>
                <div className='container'>
                    <div className="experienceWithTollWrap">
                        <div className='leftSideToolsUse'>
                            <h2 className='heading2'>Tools I use</h2>
                            <div className='iconUseBlock'>
                                <img src="/assets/svg/figma.svg" alt="" />
                                <img src="/assets/svg/psblue.svg" alt="" />
                                <img src="/assets/svg/xd.svg" alt="" />
                                <img src="/assets/svg/canva.svg" alt="" />
                                <img src="/assets/svg/id.svg" alt="" />
                                <img src="/assets/svg/ai.svg" alt="" />
                            </div>
                        </div>
                        <div className='rightSideExperience'>
                            <h2 className='heading2'>UI UX design recent experiences</h2>

                            <ul>
                                <li>
                                    <h4 className='text16b'>Master's Union | January 2024 - presently working | Full - time</h4>
                                    <span className='text16r'>Worked on their websites and SAAS product</span>
                                </li>
                                <li>
                                    <h4 className='text16b'>Freelancing | August 2023 - presently working</h4>
                                    <span className='text16r'>Worked as a freelancer with many individuals</span>
                                </li>
                                <li>
                                    <h4 className='text16b'>XROS Fellowship | April 2023 - August 2023 | Freelance</h4>
                                    <span className='text16r'>Designed setups for a 3D AR website.</span>
                                </li>
                                <li>
                                    <h4 className='text16b'>Protohype | September 2022 - July 2023 | Full - time</h4>
                                    <span className='text16r'>Worked at client site, for designing customized solutions on products created by the top brand for various international companies.</span>
                                </li>
                                <li>
                                    <h4 className='text16b'>Reskilll | March 2022 - June 2022 | Internship</h4>
                                    <span className='text16r'>Worked on the social media poster designs, pamphlets, banners, brochures, presentations, websites, apps and much more using tools like Figma, Illustrator, and Canva.</span>
                                </li>
                                <li>
                                    <h4 className='text16b'>Caarya | March 2022 - April 2022 | Internship</h4>
                                    <span className='text16r'>Designed and worked on the different upcoming projects of the company, also worked with professionals and got to know and learn about many UX terms and terminologies.</span>
                                </li>
                                <li>
                                    <h4 className='text16b'>TechDirective | August 2021 - November 2021 | Internship</h4>
                                </li>
                                <li>
                                    <h4 className='text16b'>
                                        Cisco thingQbator - IIT (BHU) | June 2021 - August 2021 | Internship
                                    </h4>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default page