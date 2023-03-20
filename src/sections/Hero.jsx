import { motion } from "framer-motion"
import styles from "../styles"
import { slideIn,staggerContainer,textVariant } from "../utils/motion"
import HeroImage from "../assets/cover.png"


const Hero = () => {
  return (
    <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once:true, amount:0.25 }}
            className={`${styles.innerWidth} mx-auto flex flex-col`}
        >
            <div className="flex justify-center items-center flex-col z-10">
                <motion.h1 variants={textVariant(1.1)}
                className={styles.heroHeading}
                >MOVI<span className="text-primary-300">W</span>EE</motion.h1>
                <motion.div
                    variants={textVariant(1.2)}
                    className="flex flex-row justify-center items-center"
                >
                    <h1 className={styles.heroHeading}>Mo</h1>
                    <div className={styles.heroDText} />
                    <h1 className={styles.heroHeading}>ern</h1>
                </motion.div>
            </div>
            <motion.div
                variants={slideIn('right','tween',0.2 , 1)}
                className="w-full md:-mt-[20px] -mt-[12px]"
            >
                <img src={HeroImage} alt="hero-image" className="w-full sm:h-[400px] h-[350px] object-cover 
                rounded-tl-[240px] z-0 -mt-10" />
               
            </motion.div>
        </motion.div>
    </section>
  )
}

export default Hero