import modelsData from "./models/modelsData"
import MarsPage from "./pages/MarsPage"


const About = () => {
  return (
    <div>
      <MarsPage marsData={modelsData[0]} />
    </div>
  )
}

export default About



// about
// about / mars
// about / moons
//         moons / phobos
//         moons / deimos

// about / rovers
//       / rovers / active
//                / active/ curiosity
//       / rovers / inactive
//                / inactive/ opportunity
//       / rovers / planned
//                / planned/ spirit
//       / rovers / failed
//                / failed/ mars2

// about / satellites
//       / satellites/ functional
//                   / functional/ maven
//       / satellites/ non-functional
//                   / non-functional/ maven2

// about / missions