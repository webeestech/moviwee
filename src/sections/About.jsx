import { motion } from "framer-motion"
import MiniText from "../components/MiniText"
import styles from "../styles"
import { fadeIn, staggerContainer } from "../utils/motion"
import ArrowDown from "../assets/arrow-down.svg"

const About = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.40 }}
            className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
        >
            <MiniText title="About Moviwee" textStyles="text-center" />
            <motion.p
                variants={fadeIn("up", "tween",0.2,1)}
                className="mt-2 sm:text-xl text-lg text-center text-primary-500 opacity-50"
            >
               <span className="font-extrabold text-white">Moviwee</span> is a new thing in the future, where you can enjoy the movies, 
               TV series or TV shows. You can feel what you feel in this new world, because this is really the 
                <span className="font-extrabold text-white"> modern era of the cinema</span> of today, using only 
                mobile devices you can easily explore the Moviwee world you want, turn your 
                 dreams into reality. Let's explore the <span className="font-extrabold text-white">modern</span> of the 
                 cinema by scrolling down
            </motion.p>
            <motion.img 
                variants={fadeIn("up","tween",0.3, 1)}
                src={ArrowDown}
                alt="arrow-down"
                className="w-[20px] h-[30px] object-contain mt-7 text-white"
            />
        </motion.div>        
    </section>
  )
}

export default About