
import './App.css';
import {motion, AnimatePresence} from "framer-motion"
import {
  Switch,
  Route,
  Link,
  useHistory,
  useLocation
} from "react-router-dom";

const homeVariants = {
  hidden: {
   
  },
  visible: {
    
  },
  exit: {
    y: -700,
  }
}


const aboutVariants = {
  hidden: {
    opacity: 0,
    x: 0
  },
  visible: {
    opacity: 1,
    x: 50,
    transition: {
    }
  },
  exit: {
    x: -0,
    top: 0,
    width: "100%",
    height:"40vh",
    borderRadius: "none",
    transition: {
      duration: 1
    }
  }
}


function App() {
  const location = useLocation()
  return (
    <div className="App">
      <nav>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          
        </ul>
      </nav>
      <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.key}>
          <Route path="/about">
            <Page2/>
          </Route>
          <Route path="/">
            <Page1/>
          </Route>
      </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;


const Page1 = () => {
  const history = useHistory()
  return (<motion.div
    className="after"
           variants={homeVariants}
           animate={"visible"}
           initial={"hidden"}
           exit={"exit"}
           >
            <h1>heyya</h1>
          </motion.div>)
}

const Page2 = () => {
  const history = useHistory()
  return (
          
          <motion.p
           className="expand"
           variants={aboutVariants}
           animate={"visible"}
           initial={"hidden"}
           exit={"exit"}
          >
            <h1>hiya</h1>
          </motion.p>
  )
}