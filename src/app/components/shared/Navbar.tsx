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

    const { addWorkout, saveWorkout } = context;

    return (
        <div className="border-b border-white/6 sticky top-0 z-50 bg-[#000000]">
            <nav className='flex justify-between max-w-7xl mx-auto items-center h-17 '>
                <div>
                    <Link className='flex gap-2.5 items-center' href={"/"}>
                        <Image width={28} height={28} alt='' src={"/logo.png"} />
                        <h3 className={`${oswald.className} text-lg font-semibold tracking-[0.08em]`}>FITLOG</h3>
                    </Link>
                </div>

                <div>
                    <ul className='flex gap-2 font-semibold items-center text-[14px]'>
                        <li>
                            <Link className={`px-4 py-1.5 rounded-full transition-colors duration-200 ${pathName === "/" ? "text-[#C2F800] bg-[#1A2312]" : "text-[#9CA3AF]"}`} href={"/"}>Workout</Link>
                        </li>
                        <li>
                            <Link className={`px-4 py-1.5 rounded-full transition-colors duration-200 ${pathName === "/my-plan" ? "text-[#C2F800] bg-[#1A2312]" : "text-[#9CA3AF]"}`} href={"/my-plan"}>My Plan</Link>
                        </li>
                    </ul>
                </div>

                <div className='flex items-center gap-6 '>
                    <Link href={"/my-plan"} className='flex items-center gap-2 text-[14px] font-medium text-zinc-200 transition-colors hover:text-white'>Plan <span className="flex h-5.5 w-5.5 items-center justify-center rounded-full bg-[#CCFF00] text-xs font-bold text-black">{addWorkout.length}</span></Link>
                    <Link href={"/my-plan"} className='flex items-center gap-2 text-[14px] font-medium text-zinc-200 transition-colors hover:text-white'>Saved <span className='flex h-5.5 w-5.5 items-center justify-center rounded-full bg-white/6 text-xs font-semibold text-zinc-400 ring-1 ring-inset ring-white/10'>{saveWorkout.length}</span></Link>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;