import { useState } from "react"
import { motion } from "framer-motion"
import styles from "../styles"
import { staggerContainer } from "../utils/motion"
import { exploreMovies } from "../constants"
import MiniText from "../components/MiniText"
import HeadingText from "../components/HeadingText"
import ExploreMovie from "../components/ExploreMovie"


const Featured = () => {
    const [active, setActive] = useState("movie-2")
  return (
    <section className={`${styles.paddings}`} id="featured">
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.40 }}
            className={`${styles.innerWidth} mx-auto flex flex-col`}
        >
            <MiniText title="Featured Movies" textStyles="text-center" />
            <HeadingText title={<>Choose the movie that you want to <br className="md:block"/>explore</>} 
            textStyles="text-center" />
            <div className="mt-12 flex lg:flex-row flex-col min-h-[70vh] gap-5">
                {exploreMovies.map((movie,index) => (
                    <ExploreMovie 
                        key={movie.id}
                        {...movie}
                        index={index}
                        active={active}
                        handleClick={setActive}
                    />
                ))}
            </div>
        </motion.div>
    </section>
  )
}

export default Featured