import { IBM_Plex_Mono } from 'next/font/google';

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-ibm-plex-mono',
});



function Hero() {
  return (
    <section className="relative max-w-6xl mx-auto z-20 w-full my-8">
      <div className='flex flex-col items-center px-4 py-16 sm:px-6 sm:py-24 md:px-8 md:py-18 pt-16'>
        <h1 className={`${ibmPlexMono.className} font-semibold mb-4 text-center text-3xl leading-snug text-white sm:text-3xl sm:leading-snug md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight lg:text-6xl lg:leading-tight`}>
          <span className='text-secondary'>qBitTensor Labs</span> is Creating Subnets on TAO
        </h1>
        <p className="max-w-2xl text-center text-base leading-relaxed text-stone-400 sm:text-lg md:text-lg md:leading-relaxed lg:text-xl lg:leading-relaxed">
          qBittensor is fundamentally about advancing Quantum Computing beyond theoretical research to practical application. We believe the next breakthroughs will emerge from a nexus of diverse perspectives and shared computational power.
        </p>
      </div>
    </section>
  );
}
export default Hero;
