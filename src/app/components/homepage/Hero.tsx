import Image from 'next/image';
import { FaDumbbell } from 'react-icons/fa6';

const Hero = () => {
    return (
        <div className='max-w-7xl mx-auto bg-[#15171D] rounded-2xl mt-12 mb-16'>
            <div className='flex items-center p-14 justify-between'>
                <div className='space-y-5'>
                    <p className='text-[12px] font-bold text-[#C2F800] tracking-[1.1px]'>WORKOUT LIBRARY</p>
                    <h1 className={`text-[60px] font-extrabold font-oswald w-150 leading-15 tracking-[-1.5px]`}>TRAIN WITH INTENT. LOG
                        EVERY SET.</h1>
                    <p className='text-[#9CA3AF] text-[16px] w-lg'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                        into today&apos;s plan, and watch the weeks work add up.</p>

                    <a href="#library" className='bg-[#C2F800] px-6 py-3 text-[#000000] text-[12px] font-bold rounded-md cursor-pointer inline-flex items-center gap-2'><FaDumbbell size={16} className='rotate-135'/>BROWSE WORKOUTS</a>

                </div>
                <div>
                    <Image width={400} height={400} alt='' src={"/banner.png"} />
                </div>
            </div>
        </div>
    );
};

export default Hero;