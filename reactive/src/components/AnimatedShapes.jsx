import { motion } from 'framer-motion';

function AnimatedShapes({ isPlaying, soundData }) {
    return (
        <div className="canvas-box">
            <motion.div
                className="box-2"
                initial={{ scale: 0, y: 0 }}
                animate={{ rotate: (soundData * 360) | 0, scale: 1 }}
                transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 25,
                }}
            />
            <motion.div
                className="box-1"
                initial={{ scale: 0 }}
                animate={{ rotate: 0, scale: soundData }}
                transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 25,
                }}
            />
        </div>
    );
}

export default AnimatedShapes;
