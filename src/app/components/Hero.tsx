import { motion } from "framer-motion";
import logo from '../../../public/quantum_2.png';



function Hero() {
  return (
    <section className="relative max-w-6xl mx-auto z-20 w-full">
      <div className='flex flex-col items-center px-4 py-16 sm:px-6 sm:py-24 md:px-8 md:py-36 pt-16'>
        <h1 className="mb-4 text-center text-2xl font-bold leading-snug text-white sm:text-3xl sm:leading-snug md:text-5xl md:leading-tight lg:text-7xl lg:leading-tight lg:text-6xl lg:leading-tight">
          <span className='text-secondary'>qBitTensor Labs</span> is Creating Subnets on TAO
        </h1>
        <p className="max-w-2xl text-center text-base leading-relaxed text-stone-400 sm:text-lg md:text-lg md:leading-relaxed">
          Our team is dedicated to building innovative solutions on the TAO
          blockchain, leveraging its unique capabilities to create scalable and
          efficient subnets.
        </p>
        <div className='w-full flex items-center justify-center mt-8'>
          <img src={logo.src} alt="qBitTensor Labs Logo" className="mt-8 h-32 object-contain" />
        </div>
      </div>
    </section>
  );
}
export default Hero;
