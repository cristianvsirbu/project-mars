import Model  from './Model';
const About = () => {
  return (
    <div>
      <Model modelPath={'/models/mars.glb'} initialScale={0.1} cameraPosition={[0, 0, 150]}/>
    </div>
  )
}

export default About