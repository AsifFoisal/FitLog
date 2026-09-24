import Image from 'next/image';

const Footer = () => {
    return (
        <div className='border-t border-white/6'>
            <div className='flex justify-between max-w-7xl mx-auto w-full py-10'>
                <div>
                    <Image width={71} height={100} alt='' src={"/Brand Logo Left.png"} />
                </div>
                <div>
                    <p className='text-[12px] text-[#6B7280]'>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
                </div>
            </div>

        </div>
    );
};

export default Footer;