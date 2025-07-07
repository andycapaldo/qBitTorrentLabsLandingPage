import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedium, faGithub, faTwitter, faXTwitter } from '@fortawesome/free-brands-svg-icons'


function Card() {
  return (
    <div className='flex justify-center items-center w-full h-32 text-white w-full lg:max-w-3xl md:max-w-xl max-w-sm mx-auto mt-8 md:mt-4'>
        <div className='flex flex-col md:flex-row items-center justify-center gap-8 w-full h-full'>
            <div className='w-1/2 md:w-auto'><DotExpandButton text="Github" icon={faGithub} link="https://github.com/qbittensor-labs" /></div>
            <div className='w-1/2 md:w-auto'><DotExpandButton text="X" icon={faXTwitter} link="https://x.com/qBitTensor" /></div>
            <div className='w-1/2 md:w-auto'><DotExpandButton text="Medium" icon={faMedium} link="https://medium.com/@qbittensorlabs/on-monday-july-7th-qbittensor-labs-will-be-launching-bittensors-first-quantum-subnet-aptly-named-d01964f3f8be" /></div>
        </div>
    </div>
  )
}

const DotExpandButton = ({ text = "Hover this link", icon = faMedium, link = "" }) => {

  return (
    <section>
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="cursor-pointer group flex h-10 items-center gap-2 rounded-full text-black bg-secondary pl-3 pr-4 transition-all duration-300 ease-in-out 
          hover:bg-dark-blue hover:scale-[1.02] active:scale-[0.98] hover:text-white
          focus:bg-dark-blue focus:text-white
          active:bg-dark-blue active:text-white 
          w-full">
        <FontAwesomeIcon icon={icon} className="rounded-full p-1 text-2xl transition-colors duration-300 
          group-hover:bg-white group-hover:text-black
          group-focus:bg-white group-focus:text-black
          group-active:bg-white group-active:text-black" 
          />
        <span className='text-xl'>{text}</span>
      </a>
    </section>
  );
};

export default Card