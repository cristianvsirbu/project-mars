import Model from './Model';
const About = () => {
  return (
    <div>
      <Model modelPath={'/models/mars.glb'} initialScale={1} cameraPosition={[0, 0, 1300]} />
    </div>
  )
}

export default About