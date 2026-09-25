import Image from 'next/image';
import { FaDumbbell } from 'react-icons/fa6';

const Hero = () => {
    return (
        <div className="max-w-7xl mx-auto bg-[#15171D] rounded-2xl mt-6 sm:mt-8 lg:mt-12 mb-10 sm:mb-12 lg:mb-16 mx-4 sm:mx-6 lg:mx-auto overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10 p-6 sm:p-8 md:p-10 lg:p-14">

                <div className="space-y-4 sm:space-y-5 w-full lg:w-auto text-center lg:text-left">

                    <p className="text-[11px] sm:text-[12px] font-bold text-[#C2F800] tracking-[1.1px]">
                        WORKOUT LIBRARY
                    </p>

                    <h1 className="text-[38px] sm:text-[46px] md:text-[52px] lg:text-[60px] font-extrabold font-oswald w-full lg:w-150 leading-[1.05] sm:leading-[1.05] lg:leading-15 tracking-[-1px] sm:tracking-[-1.5px]">
                        TRAIN WITH INTENT. LOG EVERY SET.
                    </h1>

                    <p className="text-[#9CA3AF] text-[14px] sm:text-[15px] lg:text-[16px] w-full sm:max-w-xl lg:w-lg mx-auto lg:mx-0">
                        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                        into today&apos;s plan, and watch the weeks work add up.
                    </p>

                    <a
                        href="#library"
                        className="bg-[#C2F800] px-5 sm:px-6 py-2.5 sm:py-3 text-[#000000] text-[11px] sm:text-[12px] font-bold rounded-md cursor-pointer inline-flex items-center gap-2"
                    >
                        <FaDumbbell
                            size={16}
                            className="rotate-135"
                        />
                        BROWSE WORKOUTS
                    </a>

                </div>

                <div className="w-full lg:w-auto flex justify-center shrink-0">
                    <Image
                        width={400}
                        height={400}
                        alt=""
                        src="/banner.png"
                        className="w-55 sm:w-65 md:w-75 lg:w-100 h-auto object-contain"
                    />
                </div>

            </div>
        </div>
    );
};

export default Hero;