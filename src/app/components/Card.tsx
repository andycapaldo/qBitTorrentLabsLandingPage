import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedium, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'


function Card() {
  return (
    <div className='flex justify-center items-center w-full text-white h-64 shadow-2xl border w-full lg:max-w-3xl md:max-w-xl max-w-sm mx-auto border-[1px] border-white/10 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur rounded-lg'>
        <div className='flex flex-col items-center justify-center gap-8 w-full h-full'>
            <div className='w-3/4'><DotExpandButton text="Medium" icon={faMedium} /></div>
            <div className='w-3/4'><DotExpandButton text="Github" icon={faGithub} /></div>
            <div className='w-3/4'><DotExpandButton text="Twitter" icon={faTwitter} /></div>
        </div>
    </div>
  )
}

const DotExpandButton = ({ text = "Hover this link", icon = faMedium }) => {

  return (
    <section>
      <button className="group flex h-10 items-center gap-2 rounded-full text-black bg-secondary pl-3 pr-4 transition-all duration-300 ease-in-out 
        hover:bg-black hover:pl-2 hover:text-white
        focus:bg-black focus:text-white
        active:bg-black active:text-white 
        w-full">
        <FontAwesomeIcon icon={icon} className="rounded-full p-1 text-2xl transition-colors duration-300 
          group-hover:bg-white group-hover:text-black
          group-focus:bg-white group-focus:text-black
          group-active:bg-white group-active:text-black" 
          />
        <span className='text-xl'>{text}</span>
      </button>
    </section>
  );
};

export default Card