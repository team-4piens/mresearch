import styles from '../../company/company.module.css'
import { FixedHeader, Footer, Technology, Service } from '../../index'
import Link from 'next/link'
const ValveOverhaul = (props) => {
    return (
        <div className={styles.container}>
            <FixedHeader />
            <main>
                <h1 className={`${styles.title_container} ${styles.products_bg}`}>
                    PRODUCTS
                </h1>
                <Tabs selectedIndex={0}/>
                <div className={styles.inner_container}>
                    <div className={styles.wrapper}>
                        <ProductContainer
                            title="BLOCK VALVES"
                            products={blockValveProducts}
                        />
                        <ProductContainer
                            title="SPECIAL VALVES"
                            products={SpeicalValveProducts}
                        />
                        <ProductContainer
                            title="C,W-SEAL BLOCK VALVES"
                            products={C_W_SEAL_BLOCK_VALVES}
                        />
                        <ProductContainer
                            title="3WAY BLOCK VALVES"
                            products={THREE_WAY_BLOCK_VALVES}
                        />
                        <ProductContainer
                            title="NORMAL VALVES (2WAY VALVES)"
                            products={NORMAL_VALVES_2WAY_VALVES}
                        />
                        <ProductContainer
                            title="THROTTLE, ISOLATION VALVES"
                            products={THROTTLE_ISOLATION_VALVES}
                        />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default ValveOverhaul

export const Tabs = ({selectedIndex}) => {
    return (
        <div className={styles.tabs}>
            <Link href="/products/valveOverhaul">
                <a className={`${selectedIndex === 0 ? styles.selected_tab : ""}`}>
                    Valve overhaul
                </a>
            </Link>
            <Link href="/products/gasBoxOverhaul">
                <a className={`${selectedIndex === 1 ? styles.selected_tab : ""}`} >
                    Gas box overhaul
                </a>
            </Link>
        </div>
    )
}


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

import BlockValve1, { normalize } from '../../../public/block_valve_1.png'
import BlockValve2 from '../../../public/block_valve_2.png'
import BlockValve3 from '../../../public/block_valve_3.png'
import BlockValve4 from '../../../public/block_valve_4.png'
const blockValveProducts = [
    {
        image: BlockValve1,
        name: "KITZ block valve"
    },
    {
        image: BlockValve2,
        name: "AMAT Mini block"
    },
    {
        image: BlockValve3,
        name: "FUJIKIN 5way block valve"
    },
    {
        image: BlockValve4,
        name: "IPS Feeding block assembly"
    },
]

import SpecialValve1 from '../../../public/special_valve_1.png'
import SpecialValve2 from '../../../public/special_valve_2.png'
import SpecialValve3 from '../../../public/special_valve_3.png'
import SpecialValve4 from '../../../public/special_valve_4.png'
import SpecialValve5 from '../../../public/special_valve_5.png'
import SpecialValve6 from '../../../public/special_valve_6.png'
import SpecialValve7 from '../../../public/special_valve_7.png'
import SpecialValve8 from '../../../public/special_valve_8.png'
import SpecialValve9 from '../../../public/special_valve_9.png'
import SpecialValve10 from '../../../public/special_valve_10.png'
import SpecialValve11 from '../../../public/special_valve_11.png'
import SpecialValve12 from '../../../public/special_valve_12.png'
const SpeicalValveProducts = [
    {
        image: SpecialValve1,
        name: "Actuator 분해 전,후"
    },
    {
        image: SpecialValve2,
        name: "Mainfold valves"
    },
    {
        image: SpecialValve3,
        name: "Mainfold valves"
    },
    {
        image: SpecialValve4,
        name: "Mainfold valves"
    },
    {
        image: SpecialValve5,
        name: "Mainfold valves"
    },
    {
        image: SpecialValve6,
        name: "Mainfold valves"
    },
    {
        image: SpecialValve7,
        name: "Mainfold valves"
    },
    {
        image: SpecialValve8,
        name: "Mainfold valves"
    },
    {
        image: SpecialValve9,
        name: "Mainfold valves"
    },
    {
        image: SpecialValve10,
        name: "Mainfold valves"
    },
    {
        image: SpecialValve11,
        name: "Mainfold valves"
    },
    {
        image: SpecialValve12,
        name: "Mainfold valves"
    },
]
import C1 from '../../../public/C,W-SEAL BLOCK VALVES 1.png'
import C2 from '../../../public/C,W-SEAL BLOCK VALVES 2.png'
import C3 from '../../../public/C,W-SEAL BLOCK VALVES 3.png'
import C4 from '../../../public/C,W-SEAL BLOCK VALVES 4.png'
import C5 from '../../../public/C,W-SEAL BLOCK VALVES 5.png'
import C6 from '../../../public/C,W-SEAL BLOCK VALVES 6.png'
import C7 from '../../../public/C,W-SEAL BLOCK VALVES 7.png'
import C8 from '../../../public/C,W-SEAL BLOCK VALVES 8.png'
const C_W_SEAL_BLOCK_VALVES = [
    {
        image: C1,
        name: "C,W-SEAL BLOCK VALVES 1"
    },
    {
        image: C2,
        name: "C,W-SEAL BLOCK VALVES 2"
    },
    {
        image: C3,
        name: "C,W-SEAL BLOCK VALVES 3"
    },
    {
        image: C4,
        name: "C,W-SEAL BLOCK VALVES 4"
    },
    {
        image: C5,
        name: "C,W-SEAL BLOCK VALVES 5"
    },
    {
        image: C6,
        name: "C,W-SEAL BLOCK VALVES 6"
    },
    {
        image: C7,
        name: "C,W-SEAL BLOCK VALVES 7"
    },
    {
        image: C8,
        name: "C,W-SEAL BLOCK VALVES 8"
    },
]

import T1 from '../../../public/3WAY BLOCK VALVES 1.png'
import T2 from '../../../public/3WAY BLOCK VALVES 2.png'
import T3 from '../../../public/3WAY BLOCK VALVES 3.png'
import T4 from '../../../public/3WAY BLOCK VALVES 4.png'
import T5 from '../../../public/3WAY BLOCK VALVES 5.png'
import T6 from '../../../public/3WAY BLOCK VALVES 6.png'
import T7 from '../../../public/3WAY BLOCK VALVES 7.png'
import T8 from '../../../public/3WAY BLOCK VALVES 8.png'
import T9 from '../../../public/3WAY BLOCK VALVES 9.png'
import Ta from '../../../public/3WAY BLOCK VALVES a.png'
const THREE_WAY_BLOCK_VALVES = [
    {
        image: T1,
        name: "3WAY BLOCK VALVES 1"
    },
    {
        image: T2,
        name: "3WAY BLOCK VALVES 2"
    },
    {
        image: T3,
        name: "3WAY BLOCK VALVES 3"
    },
    {
        image: T4,
        name: "3WAY BLOCK VALVES 4"
    },
    {
        image: T5,
        name: "3WAY BLOCK VALVES 5"
    },
    {
        image: T6,
        name: "3WAY BLOCK VALVES 6"
    },
    {
        image: T7,
        name: "3WAY BLOCK VALVES 7"
    },
    {
        image: T8,
        name: "3WAY BLOCK VALVES 8"
    },
    {
        image: T9,
        name: "3WAY BLOCK VALVES 9"
    },
    {
        image: Ta,
        name: "3WAY BLOCK VALVES 10"
    },
]

import N1 from '../../../public/NOMAL VALVES (2WAY VALVES) 1.png'
import N2 from '../../../public/NOMAL VALVES (2WAY VALVES) 2.png'
import N3 from '../../../public/NOMAL VALVES (2WAY VALVES) 3.png'
import N4 from '../../../public/NOMAL VALVES (2WAY VALVES) 4.png'
import N5 from '../../../public/NOMAL VALVES (2WAY VALVES) 5.png'
import N6 from '../../../public/NOMAL VALVES (2WAY VALVES) 6.png'
import N7 from '../../../public/NOMAL VALVES (2WAY VALVES) 7.png'
import N8 from '../../../public/NOMAL VALVES (2WAY VALVES) 8.png'
import N9 from '../../../public/NOMAL VALVES (2WAY VALVES) 9.png'
import Na from '../../../public/NOMAL VALVES (2WAY VALVES) a.png'
import Nb from '../../../public/NOMAL VALVES (2WAY VALVES) b.png'
import Nc from '../../../public/NOMAL VALVES (2WAY VALVES) c.png'
const NORMAL_VALVES_2WAY_VALVES = [
    {
        image: N1,
        name: "NOMAL VALVES (2WAY VALVES) 1"
    },
    {
        image: N2,
        name: "NOMAL VALVES (2WAY VALVES) 2"
    },
    {
        image: N3,
        name: "NOMAL VALVES (2WAY VALVES) 3"
    },
    {
        image: N4,
        name: "NOMAL VALVES (2WAY VALVES) 4"
    },
    {
        image: N5,
        name: "NOMAL VALVES (2WAY VALVES) 5"
    },
    {
        image: N6,
        name: "NOMAL VALVES (2WAY VALVES) 6"
    },
    {
        image: N7,
        name: "NOMAL VALVES (2WAY VALVES) 7"
    },
    {
        image: N8,
        name: "NOMAL VALVES (2WAY VALVES) 8"
    },
    {
        image: N9,
        name: "NOMAL VALVES (2WAY VALVES) 9"
    },
    {
        image: Na,
        name: "NOMAL VALVES (2WAY VALVES) 10"
    },
    {
        image: Nb,
        name: "NOMAL VALVES (2WAY VALVES) 11"
    },
    {
        image: Nc,
        name: "NOMAL VALVES (2WAY VALVES) 12"
    },
]

import I1 from '../../../public/THROTTLE,ISOLATION VALVES 1.png'
import I2 from '../../../public/THROTTLE,ISOLATION VALVES 2.png'
import I3 from '../../../public/THROTTLE,ISOLATION VALVES 3.png'
const THROTTLE_ISOLATION_VALVES = [
    {
        image: I1,
        name: "THROTTLE,ISOLATION VALVES 1"
    },
    {
        image: I2,
        name: "THROTTLE,ISOLATION VALVES 2"
    },
    {
        image: I3,
        name: "THROTTLE,ISOLATION VALVES 3"
    },
]