import logo from '../../../public/quantum_2.png';

function Brand() {
  return (
    <div className='flex flex-col items-center justify-center my-4 text-white'>
      <h3 className='text-xl text-center font-bold'>qBT is excited to announce its first Bittensor Subnet, <span className='text-secondary'>Subnet 63</span></h3>
      <img src={logo.src} alt="qBitTensor Labs Logo" className="mt-12 h-32 object-contain" />
    </div>
  )
}
export default Brand