import styles from './company.module.css'
import { FixedHeader, Footer } from '../index'
import {Company as CompanyContent} from '../index'
const Company = (props) => {
    return (
        <div className={styles.container}>
            <FixedHeader />
            <main>
                <h1 className={`${styles.title_container} ${styles.company_bg}`}>
                    COMPANY
                </h1>
                <div className={styles.inner_container}>
                    <CompanyContent/>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default Company