import styles from '../company/company.module.css'
import { FixedHeader, Footer, Technology, Service } from '../index'
const Company = (props) => {
    return (
        <div className={styles.container}>
            <FixedHeader />
            <main>
                <h1 className={`${styles.title_container} ${styles.company_bg}`}>
                    TECHNOLOGY
                </h1>
                <div className={styles.inner_container}>
                    <Technology/>
                    <Service/>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Company