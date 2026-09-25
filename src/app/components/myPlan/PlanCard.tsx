import { WorkoutContext } from '@/context/workoutContext';
import { IWorkout } from '@/types/workout.type';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { FaCheck } from 'react-icons/fa6';
import { GoClock } from 'react-icons/go';
import { MdStarBorder } from 'react-icons/md';
import { PiFireSimpleFill } from 'react-icons/pi';
import { RxCross2 } from 'react-icons/rx';

const PlanCard = ({workout}: {workout: IWorkout}) => {

    const context = useContext(WorkoutContext);
    if(!context){
        throw new Error('WorkoutContext is not available');
    }

    const {activeTab, addWorkout, saveWorkout, setAddWorkout, setSaveWorkout} = context;

    const handleRemoveWorkout = () => {
        if(activeTab === 'today'){
            const updatedAddWorkout = addWorkout.filter((w) => w.id !== workout.id);
            setAddWorkout(updatedAddWorkout);
            toast.success('Removed from today\'s plan');
        }
        else {
            const updatedSaveWorkout = saveWorkout.filter((w) => w.id !== workout.id);
            setSaveWorkout(updatedSaveWorkout);
            toast.success("Removed from saved");
        }
    }

    const handleMarkAsDone = () => {
        const updatedAddWorkout = addWorkout.filter((w) => w.id !== workout.id);
        setAddWorkout(updatedAddWorkout);
        toast.success("Workout logged — nice work")
    }

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
                        className={`${activeTab === "saved" ? "hidden": "block"} flex items-center gap-1.5 cursor-pointer rounded-full bg-[#C2F10D] px-5 py-2 text-xs font-bold text-black transition-all hover:bg-[#b0dc0b] hover:scale-105`}
                        onClick={handleMarkAsDone}
                    >
                        
                        <span className='flex items-center gap-2'><FaCheck/>Mark as Done</span>
                    </button>

                    
                    <button
                        type="button"
                        onClick={handleRemoveWorkout}
                        className="p-1 text-[#717886] transition-colors hover:text-white cursor-pointer"
                        aria-label="Remove exercise"
                    >

                        <RxCross2 />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PlanCard;