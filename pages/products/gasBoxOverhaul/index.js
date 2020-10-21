import styles from '../../company/company.module.css'
import { FixedHeader, Footer, Technology, Service } from '../../index'
import {Tabs} from '../valveOverhaul'
const ValveOverhaul = (props) => {
    return (
        <div className={styles.container}>
            <FixedHeader />
            <main>
                <h1 className={`${styles.title_container} ${styles.products_bg}`}>
                    PRODUCTS
                </h1>
                <Tabs selectedIndex={1}/>
                <div className={styles.inner_container}>
                    <div className={styles.wrapper}>
                        <ProductContainer
                            title="VCR TYPE GAS BOX"
                            products={VCR_TYPE_GAS_BOX}
                        />
                        <ProductContainer
                            title="C-SEAL TYPE GAS BOX"
                            products={C_SEAL_TYPE_GAS_BOX}
                        />
                        <ProductContainer
                            title="W-SEAL TYPE GAS BOX"
                            products={W_SEAL_TYPE_GAS_BOX}
                        />
                        <ProductContainer
                            title="RPSC OVERHAUL"
                            products={RPSC_OVERHAUL}
                        />
                        <ProductContainer
                            title="RF GENERATOR MODEL"
                            products={RF_GENERATOR_MODEL}
                        />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default ValveOverhaul


const ProductContainer = ({ title, desc, products }) => {
    return (
        <div className={styles.product_container}>
            <div className={styles.head}>
                <div className={styles.title}>{title}</div>
            </div>
            <div className={styles.products}>
                {
                    products.map(p => {
                        return (
                            <div className={styles.product}>
                                <img src={p.image} />
                                <div>{p.name}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

import V1 from '../../../public/VCR TYPE GAS BOX 1.png'
import V2 from '../../../public/VCR TYPE GAS BOX 2.png'
import V3 from '../../../public/VCR TYPE GAS BOX 3.png'
import V4 from '../../../public/VCR TYPE GAS BOX 4.png'

const VCR_TYPE_GAS_BOX = [
    {
        image: V1,
        name: "VCR TYPE GAS BOX 1"
    },
    {
        image: V2,
        name: "VCR TYPE GAS BOX 2"
    },
    {
        image: V3,
        name: "VCR TYPE GAS BOX 3"
    },
    {
        image: V4,
        name: "VCR TYPE GAS BOX 4"
    },
]

import CS1 from '../../../public/C-SEAL TYPE GAS BOX 1.png'
import CS2 from '../../../public/C-SEAL TYPE GAS BOX 2.png'
import CS3 from '../../../public/C-SEAL TYPE GAS BOX 3.png'
import CS4 from '../../../public/C-SEAL TYPE GAS BOX 4.png'
import CS5 from '../../../public/C-SEAL TYPE GAS BOX 5.png'
import CS6 from '../../../public/C-SEAL TYPE GAS BOX 6.png'
import CS7 from '../../../public/C-SEAL TYPE GAS BOX 7.png'
import CS8 from '../../../public/C-SEAL TYPE GAS BOX 8.png'
const C_SEAL_TYPE_GAS_BOX = [
    {
        image: CS1,
        name: "C-SEAL TYPE GAS BOX 1"
    },
    {
        image: CS2,
        name: "C-SEAL TYPE GAS BOX 2"
    },
    {
        image: CS3,
        name: "C-SEAL TYPE GAS BOX 3"
    },
    {
        image: CS4,
        name: "C-SEAL TYPE GAS BOX 4"
    },
    {
        image: CS5,
        name: "C-SEAL TYPE GAS BOX 6"
    },
    {
        image: CS6,
        name: "C-SEAL TYPE GAS BOX 6"
    },
    {
        image: CS7,
        name: "C-SEAL TYPE GAS BOX 7"
    },
    {
        image: CS8,
        name: "C-SEAL TYPE GAS BOX 8"
    },
]

import WS1 from '../../../public/W-SEAL TYPE GAS BOX 1.png'
import WS2 from '../../../public/W-SEAL TYPE GAS BOX 2.png'
import WS3 from '../../../public/W-SEAL TYPE GAS BOX 3.png'
import WS4 from '../../../public/W-SEAL TYPE GAS BOX 4.png'
import WS5 from '../../../public/W-SEAL TYPE GAS BOX 5.png'
import WS6 from '../../../public/W-SEAL TYPE GAS BOX 6.png'
import WS7 from '../../../public/W-SEAL TYPE GAS BOX 7.png'
import WS8 from '../../../public/W-SEAL TYPE GAS BOX 8.png'
const W_SEAL_TYPE_GAS_BOX = [
    {
        image: WS1,
        name: "W-SEAL TYPE GAS BOX 1"
    },
    {
        image: WS2,
        name: "W-SEAL TYPE GAS BOX 2"
    },
    {
        image: WS3,
        name: "W-SEAL TYPE GAS BOX 3"
    },
    {
        image: WS4,
        name: "W-SEAL TYPE GAS BOX 4"
    },
    {
        image: WS5,
        name: "W-SEAL TYPE GAS BOX 5"
    },
    {
        image: WS6,
        name: "W-SEAL TYPE GAS BOX 6"
    },
    {
        image: WS7,
        name: "W-SEAL TYPE GAS BOX 7"
    },
    {
        image: WS8,
        name: "W-SEAL TYPE GAS BOX 8"
    },
]

import RP1 from '../../../public/RPSC OVERHAUL 1.png'
import RP2 from '../../../public/RPSC OVERHAUL 2.png'
import RP3 from '../../../public/RPSC OVERHAUL 3.png'
import RP4 from '../../../public/RPSC OVERHAUL 4.png'
const RPSC_OVERHAUL = [
    {
        image: RP1,
        name: "RPSC OVERHAUL 1"
    },
    {
        image: RP2,
        name: "RPSC OVERHAUL 2"
    },
    {
        image: RP3,
        name: "RPSC OVERHAUL 3"
    },
    {
        image: RP4,
        name: "RPSC OVERHAUL 4"
    },
]

import RF1 from '../../../public/RF GENERATOR MODEL 1.png'
import RF2 from '../../../public/RF GENERATOR MODEL 2.png'
import RF3 from '../../../public/RF GENERATOR MODEL 3.png'
import RF4 from '../../../public/RF GENERATOR MODEL 4.png'
import RF5 from '../../../public/RF GENERATOR MODEL 5.png'
import RF6 from '../../../public/RF GENERATOR MODEL 6.png'
import RF7 from '../../../public/RF GENERATOR MODEL 7.png'
import RF8 from '../../../public/RF GENERATOR MODEL 8.png'
const RF_GENERATOR_MODEL = [
    {
        image: RF1,
        name: "RF GENERATOR MODEL 1"
    },
    {
        image: RF2,
        name: "RF GENERATOR MODEL 2"
    },
    {
        image: RF3,
        name: "RF GENERATOR MODEL 3"
    },
    {
        image: RF4,
        name: "RF GENERATOR MODEL 4"
    },
    {
        image: RF5,
        name: "RF GENERATOR MODEL 5"
    },
    {
        image: RF6,
        name: "RF GENERATOR MODEL 6"
    },
    {
        image: RF7,
        name: "RF GENERATOR MODEL 7"
    },
    {
        image: RF8,
        name: "RF GENERATOR MODEL 8"
    },
]