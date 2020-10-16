import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useState, useEffect } from 'react'
//images
import Logo from '../public/22222.png'
import ValveOverhaul from '../public/VALVE_OVERHAUL_REP.png'
import GasBoxOverhaul from '../public/GAS_BOX_OVERHAUL_REP.png'

export const FixedHeader = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    useEffect(() => {

        window.onscroll = () => {
            let offset = window.pageYOffset
            if (offset > 0) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

    }, [])

    return (
        <div className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
            <Link href={"/"}>
                <a>
                    <img src={Logo} />
                </a>
            </Link>
            <div className={styles.hamburger} onClick={() => { setIsMenuOpen(true) }}>
                <svg width="24px" height="24px" viewBox="0 0 16 16" class="bi bi-list" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
            </div>
            <div className={`${styles.menu_container} ${isMenuOpen ? styles.open : ""}`}>
                <svg className={styles.close} onClick={() => { setIsMenuOpen(false) }} width="24px" height="24px" viewBox="0 0 16 16" class="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
                <Link href="/">
                    <a className={styles.menu}>
                        HOME
                </a>
                </Link>
                <Link href="/company">
                    <a className={styles.menu}>
                        COMPANY
                    </a>
                </Link>
                <Link href="/technology">
                    <a className={styles.menu}>
                        TECHNOLOGY
                    </a>
                </Link>
                <Link href="/products">
                    <a className={styles.menu}>
                        PRODUCTS
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet" />
                <link rel="shortcut icon" href="https://www.mresearchinc.com/icon.png" />
                <link rel="canonical" href="https://www.mresearchinc.com/" />
                <meta property="og:title" content="M RESEARCH" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.mresearchinc.com/" />
                <meta property="og:image" content="https://www.mresearchinc.com/og_image.png" />
                <meta property="og:description" content="엠리서치입니다." />
                <meta name="description" content="엠리서치입니다." />
                <meta name="NaverBot" content="All" />
                <meta name="NaverBot" content="index,follow" />
                <meta name="Yeti" content="All" />
                <meta name="Yeti" content="index,follow" />
                <meta name="googlebot" content="All" />
                <meta name="googlebot" content="index,follow" />
            </Head>
            <FixedHeader />
            <main className={styles.main}>
                <section className={styles.section1}>
                    <h1 className={styles.title}>M RESEARCH</h1>
                    <h2>Our vision</h2>
                    <p className={styles.vision}>
                        For Maximum Value Creation<br />
                        With Faithful Partnership<br />
                        by Highly Integrated experiences<br />
                    </p>
                </section>
                <Technology />
                <Company />
                <Service />
                <section className={styles.section3}>
                    <div>
                        <h1 className={styles.about_title}>Contact us</h1>
                        <div className={styles.short_divider} />
                        <div>
                            <div className={styles.naver_map} dangerouslySetInnerHTML={{
                                __html: `<table cellpadding="0" cellspacing="0" width="462"> <tr> <td style="border:1px solid #cecece;"><a href="https://v4.map.naver.com/?searchCoord=c34569d4ecef899bd1ec334ffb2662742c1cebd4ec901675c2dc1c2a243d67ca&query=7ISc7Jq4IOykkeq1rCDsnYTsp4DroZwx6ri4IDExIO2VmOuCmO2DgOybjA%3D%3D&menu=location&tab=1&lng=3e2ea57bda69ae1f43ca91926c68d85a&mapMode=0&mpx=e8f829878f9599b1a761dac324f80018d98f4ccc9d5832589d2d30ac8a774e24b234ef299029c2f02f5e134381c3658cf1a49db89a4adda59e14d49c61d0f96d&lat=14cdbd376df891007e31c62ed4ae8b8f&dlevel=12&enc=b64" target="_blank"><img src="http://prt.map.naver.com/mashupmap/print?key=p1602738902745_-1080127629" width="460" height="340" alt="지도 크게 보기" title="지도 크게 보기" border="0" style="vertical-align:top;"/></a></td> </tr> <tr> <td> <table cellpadding="0" cellspacing="0" width="100%"> <tr> <td height="30" bgcolor="#f9f9f9" align="left" style="padding-left:9px; border-left:1px solid #cecece; border-bottom:1px solid #cecece;"> <span style="font-family: tahoma; font-size: 11px; color:#666;">2020.10.15</span>&nbsp;<span style="font-size: 11px; color:#e5e5e5;">|</span>&nbsp;<a style="font-family: dotum,sans-serif; font-size: 11px; color:#666; text-decoration: none; letter-spacing: -1px;" href="https://v4.map.naver.com/?searchCoord=c34569d4ecef899bd1ec334ffb2662742c1cebd4ec901675c2dc1c2a243d67ca&query=7ISc7Jq4IOykkeq1rCDsnYTsp4DroZwx6ri4IDExIO2VmOuCmO2DgOybjA%3D%3D&menu=location&tab=1&lng=3e2ea57bda69ae1f43ca91926c68d85a&mapMode=0&mpx=e8f829878f9599b1a761dac324f80018d98f4ccc9d5832589d2d30ac8a774e24b234ef299029c2f02f5e134381c3658cf1a49db89a4adda59e14d49c61d0f96d&lat=14cdbd376df891007e31c62ed4ae8b8f&dlevel=12&enc=b64" target="_blank">지도 크게 보기</a> </td> <td width="98" bgcolor="#f9f9f9" align="right" style="text-align:right; padding-right:9px; border-right:1px solid #cecece; border-bottom:1px solid #cecece;"> <span style="float:right;"><span style="font-size:9px; font-family:Verdana, sans-serif; color:#444;">&copy;&nbsp;</span>&nbsp;<a style="font-family:tahoma; font-size:9px; font-weight:bold; color:#2db400; text-decoration:none;" href="https://www.navercorp.com" target="_blank">NAVER Corp.</a></span> </td> </tr> </table> </td> </tr> </table>`
                            }} />
                            <div>

                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export const Technology = () => {
    return (
        <section className={styles.product_link_container}>
            <div className={`${styles.product_link} ${styles.valve_overhaul}`}>
                <img src={ValveOverhaul} />
                <h1>
                    Valve overhaul
                </h1>
                <div className={styles.desc}>Block valve에 관한 간단한 설명을 작성해주세요.</div>
                <Link href="/products/valveOverhaul">
                    <a>
                        <div className={styles.product_detail_button}>
                            Learn More
                        </div>
                    </a>
                </Link>
            </div>
            <div className={`${styles.product_link} ${styles.gas_box_overhaul}`}>
                <img src={GasBoxOverhaul} />
                <h1>
                    Gas box overhaul
                </h1>
                <div className={styles.desc}>gas box overhaul에 관한 간단한 설명을 작성해주세요.</div>
                <Link href="/products/gasBoxOverhaul">
                    <a>
                        <div className={styles.product_detail_button}>
                            Learn More
                        </div>
                    </a>
                </Link>
            </div>
        </section>
    )
}

export const Service = () => {
    return (
        <section className={styles.section3}>
            <div className={styles.about_service_bg}>
                <h1 className={styles.about_title}>About our service</h1>
                <div className={styles.short_divider} />
                <div className={styles.about_our_company}>
                    <div className={styles.tech_container}>
                        {
                            techs.map(t => {
                                return (
                                    <div className={styles.tech}>
                                        <div>{t.title}</div>
                                        <div>{t.desc}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

let techs = [
    {
        title: "value overhaul",
        desc: "세계최고의 기술력을 가진서비스를 제공합니다.다양한 서비스를 제공하면서, 다양한 기술을 개발하고 있습니다. 기타 내용을 입력하세요."
    },
    {
        title: "value overhaul",
        desc: "세계최고의 기술력을 가진서비스를 제공합니다.다양한 서비스를 제공하면서, 다양한 기술을 개발하고 있습니다. 기타 내용을 입력하세요."
    },
    {
        title: "value overhaul",
        desc: "세계최고의 기술력을 가진서비스를 제공합니다.다양한 서비스를 제공하면서, 다양한 기술을 개발하고 있습니다. 기타 내용을 입력하세요."
    },
]

export const Company = () => {
    return (
        <section className={styles.section3}>
            <div>
                <h1 className={styles.about_title}>About our company</h1>
                <div className={styles.short_divider} />
                <div className={styles.about_our_company}>
                    상세한 기업소개가 필요합니다. 기업소개 내용을 작성하여 전달주시면 이 영역에 노출하겠습니다. 상세한 기업소개가 필요합니다.
                    기업소개 내용을 작성하여 전달주시면 이 영역에 노출하겠습니다.

                    상세한 기업소개가 필요합니다. 기업소개 내용을 작성하여 전달주시면 이 영역에 노출하겠습니다.
                    상세한 기업소개가 필요합니다. 기업소개 내용을 작성하여 전달주시면 이 영역에 노출하겠습니다.
                </div>
            </div>
        </section>
    )
}

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <img src={Logo} />
        </footer>
    )
}