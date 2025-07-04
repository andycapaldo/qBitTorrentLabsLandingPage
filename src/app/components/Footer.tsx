import logo from '../../../public/quantum_3.png';

function Footer() {
  return (
    <div className='text-white w-full flex items-center justify-center mt-12'>
        <div>
            <img src={logo.src} alt="qBitTensor Labs Logo" className="mt-8 h-32 object-contain" />
        </div>
    </div>
  )
}
export default Footer