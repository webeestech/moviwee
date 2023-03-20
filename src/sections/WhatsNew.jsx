import { motion } from 'framer-motion';
import New from "../assets/whatsnew.png"
import styles from '../styles';
import { newFeatures } from '../constants';
import MiniText from '../components/MiniText';
import HeadingText from '../components/HeadingText';
import NewFeatures from '../components/NewFeatures';
import { movieVariants, staggerContainer, fadeIn } from '../utils/motion';


const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.40 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <MiniText title="| Whats new?" />
        <HeadingText title={<>What's new about Moviwee?</>} />
        <div className="mt-12 flex flex-wrap justify-between gap-[24px]">
          {newFeatures.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={movieVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src={New}
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
