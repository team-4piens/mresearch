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
                            title="Block Valves"
                            desc="Block valve에 관한 설명을 작성해주세요."
                            products={blockValveProducts}
                        />
                        <ProductContainer
                            title="Special Valves"
                            desc="Special valve에 관한 설명을 작성해주세요."
                            products={SpeicalValveProducts}
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
                <div className={styles.desc}>{desc}</div>
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

import BlockValve1 from '../../../public/block_valve_1.png'
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