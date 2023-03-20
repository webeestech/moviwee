import {motion} from "framer-motion";
import styles from '../styles';
import { navVariants } from '../utils/motion';
import Search from "../assets/search.svg"
import Menu from "../assets/menu.svg"

const Navbar = () => {
  return (
    <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={`${styles.xPaddings} py-8`}
    > 
            <div className={`${styles.innerWidth} mx-auto items-center flex justify-between gap-8`}>
                <img src={Search} alt="search-icon" className="w-[24px] h-[24px] object-contain" />
                <h2 className="font-extrabold text-2xl text-white">
                    MOVI<span className="text-primary-300">W</span>EE</h2>
                <img src={Menu} alt="hamburger-icon" className="w-[24px] h-[24px] object-contain" />
            </div>        
    </motion.nav>
  )
}

export default Navbar