import '../../styles/loader.css';

const Loader = () => (
  <div className="absolute inset-0 flex items-center justify-center z-10">
    <div className="loader-container">
      {Array.from({ length: 16 }, (_, i) => (
        <div key={i} className="circle" />
      ))}
    </div>
  </div>
);

export default Loader;
