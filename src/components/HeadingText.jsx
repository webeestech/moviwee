import { motion } from "framer-motion"
import { textVariant2 } from "../utils/motion"

const HeadingText = ({title, textStyles}) => {
  return (
    <motion.h2
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
        className={`${textStyles} mt-2 font-bold md:text-6xl text-4xl text-white`}
    >
        {title}
    </motion.h2>
  )
}

export default HeadingText