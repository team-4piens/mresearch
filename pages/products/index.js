import styles from '../company/company.module.css'
import { FixedHeader, Footer, Technology, Service } from '../index'
import Link from 'next/link'
const Company = (props) => {
    return (
        <div className={styles.container}>
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