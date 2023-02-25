import Hero from './components/Hero'
import Navbar from "./components/Navbar"
import Edu from "./components/Education"
import Projects from "./components/Projects"
import Skill from "./components/Skill"
// import Abt from "./components/Abt"
import Contact from "./components/Contact"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      {/* <Abt/> */}
      <Edu/>
      <Skill/>
      <Projects/>
      <Contact/>
    </div>
  );
}
export default App;