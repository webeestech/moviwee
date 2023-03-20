import { motion } from 'framer-motion';
import styles from '../styles';
import { news } from '../constants';
import { staggerContainer } from '../utils/motion';
import NewsCard from '../components/NewsCard';
import MiniText from '../components/MiniText';
import HeadingText from '../components/HeadingText';

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.40 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <MiniText title="News" textStyles="text-center" />
      <HeadingText title={<>News all around the world.</>} textStyles="text-center" />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {news.map((item, index) => (
          <NewsCard key={`insight-${index}`} {...item} index={index + 1} />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
