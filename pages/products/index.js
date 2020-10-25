import styles from '../company/company.module.css'
import { FixedHeader, Footer, Technology, Service } from '../index'
import Link from 'next/link'
import Head from 'next/head'
const Company = (props) => {
    return (
        <div className={styles.container}>
            <Head>
                <meta property="og:title" content="PRODUCTS" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.mresearchinc.com/products" />
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
                <title>PRODUCTS</title>
            </Head>
            <FixedHeader />

            <main>
                <h1 className={`${styles.title_container} ${styles.products_bg}`}>
                    PRODUCTS
                </h1>
                <div className={styles.inner_container}>
                    <div className={styles.wrapper}>
                        <Technology/>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Company