import {motion} from "framer-motion"
import styles from "../styles"
import Click from "../assets/click.png"
import { staggerContainer,fadeIn,movieVariants } from "../utils/motion"
import MiniText from "../components/MiniText"
import StartSteps from "../components/StartSteps"
import HeadingText from "../components/HeadingText"
import { startingFeatures } from "../constants"

const GetStarted = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.40 }}
            className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
        >
            <motion.div
                variants={movieVariants('left')}
                className={`${styles.flexCenter} flex-1`}
            >
                <img src={Click} alt="three-image" className="w-[85%] h-[85%] object-contain" />
            </motion.div>
            <motion.div
                variants={fadeIn('left','tween',0.2,1)}
                className="flex-[0.70] flex justify-center flex-col"
            >
                <MiniText title="How Moviwee Works" />
                <HeadingText title={<>Get started with just a few clicks</>} />
                <div className="mt-8 flex flex-col max-w-[350px] gap-6">

                    {startingFeatures.map((feature, index) => (
                        <StartSteps 
                            key={feature}
                            number={index+1}
                            text={feature}
                        />
                    ))}
                </div>
            </motion.div>

        </motion.div>
    </section>
  )
}

export default GetStarted