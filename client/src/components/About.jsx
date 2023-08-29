import Model from './Model3D';
const About = () => {
  return (
    <div>
      <Model modelPath={'/models/mars.glb'} initialScale={1} cameraPosition={[0, 0, 1300]} />
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