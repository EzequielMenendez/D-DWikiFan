import "./loading.css";
import Image from "next/image";
const Loader = () => {
  return (
   <div className='loadContainer'>
      <div className='loadingBackground' />
      <div className='loaderContent'>
        <div className='loaderText'>Loading...</div>
        <Image className="circle"
            src={`/loadingd20.png`}
            width={100}
            height={100}
        />
      </div>
    </div>
  );
};

export default Loader;