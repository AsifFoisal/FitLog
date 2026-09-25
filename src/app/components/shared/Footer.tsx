import Image from 'next/image';

const Footer = () => {
    return (
        <div className='border-t border-white/6'>
            <div className='flex justify-between max-w-7xl mx-auto w-full py-10'>
                <div className='flex gap-2'>
                    <Image width={28} height={28} alt='' src={"/logo.png"} />
                    <h3 className={`text-lg font-semibold tracking-[0.08em] font-oswald`}>FITLOG</h3>
                </div>
                <div>
                    <p className='text-[12px] text-[#6B7280]'>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
                </div>
            </div>

        </div>
    );
};

export default Footer;