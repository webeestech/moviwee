import { motion } from "framer-motion"
import styles from "../styles"
import { staggerContainer,fadeIn } from "../utils/motion"
import MiniText from "../components/MiniText"
import HeadingText from "../components/HeadingText"
import Map from "../assets/map.png"
import Person1 from "../assets/person-01.png"
import Person2 from "../assets/person-02.png"
import Person3 from "../assets/person-03.png"

const World = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer} 
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.40 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >

      <MiniText title="People on the World" textStyles="text-center" />
      <HeadingText
        title={(
          <>Follow the new movies - TV Series and the TV Show by using
          Movi<span className="text-primary-300">w</span>ee
          </>
        )}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src={Map} alt="map" className="w-full h-full object-cover" />

        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src={Person1} alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src={Person2} alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
          <img src={Person3} alt="people" className="w-full h-full" />
        </div>
      </motion.div>
    </motion.div>
  </section>
  )
}

export default World