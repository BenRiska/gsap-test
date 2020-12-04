
import './App.css';
import {motion} from "framer-motion"

const boxVariants = {
  hidden: {

  },

}


function App() {
  return (
    <div className="App">
      <motion.div transition={{duration: 0.7, type: "spring", stiffness: 120}} initial={{y: -500}} animate={{opacity: 1, rotate: 405, y: 0}}></motion.div>
      <motion.div whileHover={{scale: 1.1, rotate: 45}} transition={{duration: 0.7, type: "spring", stiffness: 120}} initial={{y: -500}} animate={{opacity: 1, rotate: 90, y: 50}}></motion.div>
      <motion.div transition={{duration: 0.7, type: "spring", stiffness: 120}} initial={{y: -500}} animate={{opacity: 1, rotate: 135, y: 150}}></motion.div>
    </div>
  );
}

export default App;
