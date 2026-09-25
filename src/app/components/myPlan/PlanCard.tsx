import { IWorkout } from '@/types/workout.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { GoClock } from 'react-icons/go';
import { MdStarBorder } from 'react-icons/md';
import { PiFireSimpleFill } from 'react-icons/pi';

const PlanCard = ({workout}: {workout: IWorkout}) => {
    return (
        <div className="mb-4">
            <div className="flex w-full items-center justify-between gap-4 rounded-2xl border border-white/5 bg-[#101216] p-4 text-white shadow-xl">
                
                <div className="flex items-center gap-4">
                    
                    <div className="relative h-20 w-36 shrink-0 overflow-hidden rounded-xl border border-white/10">
                        <Image
                            src={workout.image}
                            alt={workout.name}
                            fill
                            className="object-cover"
                        />
                    </div>

                    
                    <div className="flex flex-col justify-center gap-1">
                        <h3 className="font-oswald text-lg font-bold uppercase tracking-wider text-white">
                            {workout.name}
                        </h3>
                        <p className="text-xs font-medium text-[#717886]">{workout.equipment}</p>

                        <div className="mt-1 flex items-center gap-3 text-xs text-[#A1A1AA]">
                            
                            <div className="flex items-center gap-1">
                                <GoClock size={15} color='#CCFF00' />
                                <span>{workout.duration} min</span>
                            </div>

                            <div className="flex items-center gap-1">
                                <PiFireSimpleFill size={15} color='#CCFF00' />
                                <span>{workout.caloriesBurned} kcal</span>
                            </div>

                            <div className="flex items-center gap-1">
                                <MdStarBorder size={16} color='#CCFF00' />
                                <span>{workout.rating}</span>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="flex items-center gap-3">
                    
                    <Link
                        href={`/workout/${workout.id}`}
                        type="button"
                        className="rounded-full border border-white/20 bg-transparent px-5 py-2 text-xs font-semibold text-white transition-all hover:bg-white/10"
                    >
                        View Details
                    </Link>

                    
                    <button
                        type="button"
                        className="flex items-center gap-1.5 rounded-full bg-[#C2F10D] px-5 py-2 text-xs font-bold text-black transition-all hover:bg-[#b0dc0b] hover:scale-105"
                    >
                        
                        <span>Mark as Done</span>
                    </button>

                    
                    <button
                        type="button"
                        className="p-1 text-[#717886] transition-colors hover:text-white"
                        aria-label="Remove exercise"
                    >
                        
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PlanCard;