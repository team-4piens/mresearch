import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useState, useEffect } from 'react'
//images
import Logo from '../public/22222.png'
import ValveOverhaul from '../public/VALVE_OVERHAUL_REP.jpg'
import GasBoxOverhaul from '../public/GAS_BOX_OVERHAUL_REP.png'
import NaverMap from '../public/naver_map.png'
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
                <link rel="shortcut icon" href="https://www.mresearchinc.com/favicon.ico" type="image/x-icon"/>
                <link rel="icon" href="https://www.mresearchinc.com/favicon.ico" type="image/x-icon"/>
                <link rel="canonical" href="https://www.mresearchinc.com/" />
                <meta property="og:title" content="엠리서치" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.mresearchinc.com/" />
                <meta property="og:image" content="https://www.mresearchinc.com/og_image.png" />
                <meta property="og:description" content="엠리서치입니다. 가스제어부와 각종 밸브류, 유량제어시스템 기타 플라즈마소스 등 대부분의 반도체 설비들의 오버홀 서비스를 제공합니다." />
                <meta name="description" content="엠리서치입니다. 가스제어부와 각종 밸브류, 유량제어시스템 기타 플라즈마소스 등 대부분의 반도체 설비들의 오버홀 서비스를 제공합니다." />
                <meta name="NaverBot" content="All" />
                <meta name="NaverBot" content="index,follow" />
                <meta name="Yeti" content="All" />
                <meta name="Yeti" content="index,follow" />
                <meta name="googlebot" content="All" />
                <meta name="googlebot" content="index,follow" />
                <meta name="naver-site-verification" content="5389c10c62109bb4a1beeaeeab22257eb451eede" />
                <title>엠리서치</title>
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
                            {/* <div className={styles.naver_map} dangerouslySetInnerHTML={{
                                __html: `<table cellpadding="0" cellspacing="0" width="462"> <tr> <td style="border:1px solid #cecece;"><a href="https://v4.map.naver.com/?searchCoord=c34569d4ecef899bd1ec334ffb2662742c1cebd4ec901675c2dc1c2a243d67ca&query=7ISc7Jq4IOykkeq1rCDsnYTsp4DroZwx6ri4IDExIO2VmOuCmO2DgOybjA%3D%3D&menu=location&tab=1&lng=3e2ea57bda69ae1f43ca91926c68d85a&mapMode=0&mpx=e8f829878f9599b1a761dac324f80018d98f4ccc9d5832589d2d30ac8a774e24b234ef299029c2f02f5e134381c3658cf1a49db89a4adda59e14d49c61d0f96d&lat=14cdbd376df891007e31c62ed4ae8b8f&dlevel=12&enc=b64" target="_blank"><img src="http://prt.map.naver.com/mashupmap/print?key=p1602738902745_-1080127629" width="460" height="340" alt="지도 크게 보기" title="지도 크게 보기" border="0" style="vertical-align:top;"/></a></td> </tr> <tr> <td> <table cellpadding="0" cellspacing="0" width="100%"> <tr> <td height="30" bgcolor="#f9f9f9" align="left" style="padding-left:9px; border-left:1px solid #cecece; border-bottom:1px solid #cecece;"> <span style="font-family: tahoma; font-size: 11px; color:#666;">2020.10.15</span>&nbsp;<span style="font-size: 11px; color:#e5e5e5;">|</span>&nbsp;<a style="font-family: dotum,sans-serif; font-size: 11px; color:#666; text-decoration: none; letter-spacing: -1px;" href="https://v4.map.naver.com/?searchCoord=c34569d4ecef899bd1ec334ffb2662742c1cebd4ec901675c2dc1c2a243d67ca&query=7ISc7Jq4IOykkeq1rCDsnYTsp4DroZwx6ri4IDExIO2VmOuCmO2DgOybjA%3D%3D&menu=location&tab=1&lng=3e2ea57bda69ae1f43ca91926c68d85a&mapMode=0&mpx=e8f829878f9599b1a761dac324f80018d98f4ccc9d5832589d2d30ac8a774e24b234ef299029c2f02f5e134381c3658cf1a49db89a4adda59e14d49c61d0f96d&lat=14cdbd376df891007e31c62ed4ae8b8f&dlevel=12&enc=b64" target="_blank">지도 크게 보기</a> </td> <td width="98" bgcolor="#f9f9f9" align="right" style="text-align:right; padding-right:9px; border-right:1px solid #cecece; border-bottom:1px solid #cecece;"> <span style="float:right;"><span style="font-size:9px; font-family:Verdana, sans-serif; color:#444;">&copy;&nbsp;</span>&nbsp;<a style="font-family:tahoma; font-size:9px; font-weight:bold; color:#2db400; text-decoration:none;" href="https://www.navercorp.com" target="_blank">NAVER Corp.</a></span> </td> </tr> </table> </td> </tr> </table>`
                            }} /> */}
                            <a className={styles.map_link} href={"http://naver.me/xPt6A4Bw"}>
                                <svg width="40px" height="40px" viewBox="0 0 16 16" class="bi bi-zoom-in" fill="black" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                                    <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z" />
                                    <path fill-rule="evenodd" d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z" />
                                </svg>
                                <img className={styles.naver_map} src={NaverMap} />
                            </a>
                            <div className={styles.contact_title}>
                                주소 : 경기도 화성시 금곡로 231-19, 2동(금곡동)<br />
                                T : 031-376-1386<br />
                                F : 031-376-1387<br />
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
                                        {/* <div>{t.title}</div> */}
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
        title: "강점",
        desc: " MResearch는 반도체 설비의 보전활동(Maintenance Activities)에 있어 일회적 단편적 보전에 그치지 않고, 예방적보전(PM; Preventive Maintenance), 일상적보전(RM; Routine Maintenance), 개량적보전(CM; Corrective Maintenance), 사후적보전(BM; Breakdown Maintenance), 예측적보전(PM; Predictive Maintenance) 등 전범위의 고객서비스를 제공합니다."
    },
]

export const Company = () => {
    return (
        <section className={styles.section3}>
            <div>
                <h1 className={styles.about_title}>About our company</h1>
                <div className={styles.short_divider} />
                <div className={styles.about_our_company}>
                    반도체 제조현장에서 운용되고 있는 반도체 제조 장비를 제조 현장에서 설치부터 가동 시 상시 최적의 운용상태가 되도록 반도체  장비를 점검하고, 고장을 방지하기 위한 사전 예방활동, 이는 오늘날 반도체 제조현장에서 가장 중요한 유지보수 활동의 하나입니다.
                    <br />
                    <br />
                    이에는 PLC 자동제어와 산업용 로봇을 기반으로 하는 자동화일반, 공유압일반, 반도체장비보전일반 등의 여러 영역이 필요합니다.
                    <br />
                    <br />
                    특히, MResearch는 반도체 설비에있어 케미컬중앙공급시스템(CGSS; Central Gas Supply System), 케미컬공급장비(CDM; Chemical Delivery Module), 케미컬공급밸브박스(VMB; Valve Manifold Box), 브랜치박스(BB; Branch Box), 가스분배박스(GDB; Gas Distribution Box), 공정용가스안전공급장치(GC; Gas Cabinet), 자동가스모니터링시스템(AGMS; Automatic Gas Monitoring System), 가스충진용기(GC; Gas Cylinder) 등의 가스제어부와 각종 밸브류, 유량제어시스템 기타 플라즈마소스 등 대부분의 반도체 설비들의 오버홀 서비스를 제공합니다.
                </div>
            </div>
        </section>
    )
}

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <img src={Logo} />
            <div>
                주소 : 경기도 화성시 금곡로 231-19, 2동(금곡동)<br />
                                T : 031-376-1386<br />
                                F : 031-376-1387<br />
            </div>
        </footer>
    )
}