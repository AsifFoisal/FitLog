"use client"
import { WorkoutContext } from '@/context/workoutContext';
import { Oswald } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useContext } from 'react';

const oswald = Oswald({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700"]
});

const Navbar = () => {

    const pathName = usePathname();

    const context = useContext(WorkoutContext);
    if(!context){
        throw new Error('WorkoutContext is not available');
    }

    const { addWorkout, saveWorkout, isHydrated } = context;

    return (
        <div className="border-b border-white/6 sticky top-0 z-50 bg-[#000000]">
            <nav className="flex flex-wrap justify-between max-w-7xl mx-auto items-center min-h-17 px-4 sm:px-6 lg:px-8 xl:px-0 py-3 sm:py-0">

                <div>
                    <Link className="flex gap-2.5 items-center" href={"/"}>
                        <Image width={28} height={28} alt="" src={"/logo.png"} />
                        <h3 className={`${oswald.className} text-lg font-semibold tracking-[0.08em]`}>
                            FITLOG
                        </h3>
                    </Link>
                </div>

                <div className="order-3 sm:order-0 w-full sm:w-auto mt-3 sm:mt-0">
                    <ul className="flex gap-1 sm:gap-2 font-semibold items-center justify-center text-[13px] sm:text-[14px]">
                        <li>
                            <Link
                                className={`px-3 sm:px-4 py-1.5 rounded-full transition-colors duration-200 ${pathName === "/"
                                        ? "text-[#C2F800] bg-[#1A2312]"
                                        : "text-[#9CA3AF]"
                                    }`}
                                href={"/"}
                            >
                                Workout
                            </Link>
                        </li>

                        <li>
                            <Link
                                className={`px-3 sm:px-4 py-1.5 rounded-full transition-colors duration-200 ${pathName === "/my-plan"
                                        ? "text-[#C2F800] bg-[#1A2312]"
                                        : "text-[#9CA3AF]"
                                    }`}
                                href={"/my-plan"}
                            >
                                My Plan
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="flex items-center gap-3 sm:gap-6">
                    <Link
                        href={"/my-plan"}
                        className="flex items-center gap-1.5 sm:gap-2 text-[12px] sm:text-[14px] font-medium text-zinc-200 transition-colors hover:text-white"
                    >
                        <span className="">Plan</span>
                        <span className="flex h-5 w-5 sm:h-5.5 sm:w-5.5 items-center justify-center rounded-full bg-[#CCFF00] text-[10px] sm:text-xs font-bold text-black">
                            {isHydrated ? addWorkout.length : 0}
                        </span>
                    </Link>

                    <Link
                        href={"/my-plan"}
                        className="flex items-center gap-1.5 sm:gap-2 text-[12px] sm:text-[14px] font-medium text-zinc-200 transition-colors hover:text-white"
                    >
                        <span>Saved</span>
                        <span className="flex h-5 w-5 sm:h-5.5 sm:w-5.5 items-center justify-center rounded-full bg-white/6 text-[10px] sm:text-xs font-semibold text-zinc-400 ring-1 ring-inset ring-white/10">
                            {isHydrated ? saveWorkout.length : 0}
                        </span>
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;