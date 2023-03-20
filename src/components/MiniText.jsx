import { motion } from "framer-motion"
import { textContainer, textVariant2 } from "../utils/motion"


const MiniText = ({title, textStyles}) => {
  return (
    <motion.p
        variants={textContainer}
        className={`text-sm text-primary-500 opacity-50 ${textStyles}`}
    >
        {Array.from(title).map((letter, index) => (
            <motion.span variants={textVariant2} key={index} >
                {letter === " " ? "\u00A0" : letter}
            </motion.span>
        ))}
    </motion.p>
  )
}

export default MiniText