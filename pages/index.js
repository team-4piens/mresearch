import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

//images
import Logo from '../public/22222.png'
import ValveOverhaul from '../public/VALVE_OVERHAUL_REP.png'
import GasBoxOverhaul from '../public/GAS_BOX_OVERHAUL_REP.png'

const FixedHeader = () => {
    return (
        <div className={styles.header}>
            <img src={Logo} />
        </div>
    )
}

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>M RESEARCH</title>
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
                <section className={styles.product_link_container}>
                    <div className={`${styles.product_link} ${styles.valve_overhaul}`}>
                        <h1>
                            Valve overhaul
                        </h1>
                        <div className={styles.product_detail_button}>
                            Learn More
                        </div>
                    </div>
                    <div className={`${styles.product_link} ${styles.gas_box_overhaul}`}>
                        <h1>
                            Gas box overhaul
                        </h1>
                        <div className={styles.product_detail_button}>
                            Learn More
                        </div>
                    </div>
                </section>
                <section className={styles.section3}>
                    <div>
                        <h1 className={styles.about_title}>About our company</h1>
                        <div className={styles.short_divider} />
                    </div>
                </section>
                <section className={styles.section3}>
                    <div className={styles.about_service_bg}>
                        <h1 className={styles.about_title}>About our service</h1>
                        <div className={styles.short_divider} />
                    </div>
                </section>
                <section className={styles.section3}>
                    <div>
                        <h1 className={styles.about_title}>Contact us</h1>
                        <div className={styles.short_divider} />
                        <div className={styles.naver_map} dangerouslySetInnerHTML={{
                            __html: `<table cellpadding="0" cellspacing="0" width="462"> <tr> <td style="border:1px solid #cecece;"><a href="https://v4.map.naver.com/?searchCoord=c34569d4ecef899bd1ec334ffb2662742c1cebd4ec901675c2dc1c2a243d67ca&query=7ISc7Jq4IOykkeq1rCDsnYTsp4DroZwx6ri4IDExIO2VmOuCmO2DgOybjA%3D%3D&menu=location&tab=1&lng=3e2ea57bda69ae1f43ca91926c68d85a&mapMode=0&mpx=e8f829878f9599b1a761dac324f80018d98f4ccc9d5832589d2d30ac8a774e24b234ef299029c2f02f5e134381c3658cf1a49db89a4adda59e14d49c61d0f96d&lat=14cdbd376df891007e31c62ed4ae8b8f&dlevel=12&enc=b64" target="_blank"><img src="http://prt.map.naver.com/mashupmap/print?key=p1602738902745_-1080127629" width="460" height="340" alt="지도 크게 보기" title="지도 크게 보기" border="0" style="vertical-align:top;"/></a></td> </tr> <tr> <td> <table cellpadding="0" cellspacing="0" width="100%"> <tr> <td height="30" bgcolor="#f9f9f9" align="left" style="padding-left:9px; border-left:1px solid #cecece; border-bottom:1px solid #cecece;"> <span style="font-family: tahoma; font-size: 11px; color:#666;">2020.10.15</span>&nbsp;<span style="font-size: 11px; color:#e5e5e5;">|</span>&nbsp;<a style="font-family: dotum,sans-serif; font-size: 11px; color:#666; text-decoration: none; letter-spacing: -1px;" href="https://v4.map.naver.com/?searchCoord=c34569d4ecef899bd1ec334ffb2662742c1cebd4ec901675c2dc1c2a243d67ca&query=7ISc7Jq4IOykkeq1rCDsnYTsp4DroZwx6ri4IDExIO2VmOuCmO2DgOybjA%3D%3D&menu=location&tab=1&lng=3e2ea57bda69ae1f43ca91926c68d85a&mapMode=0&mpx=e8f829878f9599b1a761dac324f80018d98f4ccc9d5832589d2d30ac8a774e24b234ef299029c2f02f5e134381c3658cf1a49db89a4adda59e14d49c61d0f96d&lat=14cdbd376df891007e31c62ed4ae8b8f&dlevel=12&enc=b64" target="_blank">지도 크게 보기</a> </td> <td width="98" bgcolor="#f9f9f9" align="right" style="text-align:right; padding-right:9px; border-right:1px solid #cecece; border-bottom:1px solid #cecece;"> <span style="float:right;"><span style="font-size:9px; font-family:Verdana, sans-serif; color:#444;">&copy;&nbsp;</span>&nbsp;<a style="font-family:tahoma; font-size:9px; font-weight:bold; color:#2db400; text-decoration:none;" href="https://www.navercorp.com" target="_blank">NAVER Corp.</a></span> </td> </tr> </table> </td> </tr> </table>`
                        }} />
                    </div>
                </section>
            </main>

            <footer className={styles.footer}>
                <img src={Logo} />
            </footer>
        </div>
    )
}
