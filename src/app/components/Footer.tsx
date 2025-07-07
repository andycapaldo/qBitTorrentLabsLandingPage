import logo from '../../../public/quantum_3.png';

function Footer() {
  return (
    <div className='text-white w-full flex items-center justify-center'>
        <div className='flex flex-col items-center justify-center gap-4 w-full max-w-3xl px-4 py-8 text-center'>
            <img src={logo.src} alt="qBitTensor Labs Logo" className="mt-8 h-12 object-contain" />
            <p>© 2025. qBitTensor Labs.</p>
        </div>
    </div>
  )
}
export default Footer