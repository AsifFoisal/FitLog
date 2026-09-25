import Link from 'next/link';
import React from 'react';
import { FaArrowLeft, FaDumbbell } from 'react-icons/fa6';

const NotFound = () => {
    return (
        <div>
            <main className="min-h-screen bg-black text-white flex items-center justify-center px-6 relative overflow-hidden">

                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="text-[25rem] md:text-[35rem] font-black text-[#111111] leading-none select-none">
                        404
                    </span>
                </div>

                <div className="relative z-10 text-center max-w-2xl">

                    <div className="flex justify-center mb-8">
                        <div className="w-16 h-16 rounded-full bg-[#C2FF00] text-black flex items-center justify-center">
                            <FaDumbbell size={24} className="-rotate-45" />
                        </div>
                    </div>

                    <p className="text-[#C2FF00] text-sm font-bold tracking-[0.3em] mb-4">
                        ERROR 404
                    </p>

                    <h1 className="text-5xl md:text-7xl font-black uppercase leading-none">
                        Page Not Found
                    </h1>

                    <p className="text-gray-400 text-sm md:text-base mt-6 max-w-md mx-auto leading-relaxed">
                        Looks like this workout went missing. The page you&apos;re looking for
                        doesn&apos;t exist or may have been moved.
                    </p>

                    <div className="mt-8 flex justify-center">
                        <Link
                            href="/"
                            className="bg-[#C2FF00] text-black px-6 py-3 rounded-md text-[12px] font-bold inline-flex items-center gap-2 hover:bg-white transition-colors duration-300"
                        >
                            <FaArrowLeft size={14} />
                            BACK TO HOME
                        </Link>
                    </div>

                </div>
            </main>
        </div>
    );
};

export default NotFound;