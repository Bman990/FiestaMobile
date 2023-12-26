
import { motion } from 'framer-motion';
import tacoBG from '/noBGTaco.png'
import './StyleSheet/Hero.css'
import Marquee from "react-fast-marquee";

export default function Hero(){
    const texts = ["Fiesta Mobile", "Fiesta Mobile", "Fiesta Mobile"];

    return (
    <div id="heroSection" className="heroContainer">

            <div className='imgBG'>
            <img src={tacoBG} width={350} height={350} />
            </div>

            <div className='heroContent'>


            <div className='flex-col'>
            {texts.map((text, index) => (
            <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            style={{ marginBottom: 10 }} // Adjust vertical spacing
            className="staggered-text-item"
            >
            {text}
            </motion.div>
            ))}

            <div className='scrollTextDiv'>
            <motion.p
            className='scrollText'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            >
            Scroll Down
            </motion.p>
            </div>

            </div>

            <div className='marqueeStyle'>
            <Marquee
            autoFill
            >
            <h1 className='marqueeText'>On-the-Go Fiesta, Packed in Every Taco!</h1>
            </Marquee>
            </div>

        </div>
        </div>
    )
}