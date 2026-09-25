import AddButton from '@/app/components/workoutDetails/AddButton';
import SaveButton from '@/app/components/workoutDetails/SaveButton';
import { IWorkout } from '@/types/workout.type';
import Image from 'next/image';
import React from 'react';


interface IWorkpoutDetailsPageProps {
    params: Promise<{
        id: string;
    }>;
}

const getWorkout = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data = res.json();
    return data;
}

const WorkoutDetailsPage = async({params} : IWorkpoutDetailsPageProps) => {
    const { id } = await params;
    const workoutData = await getWorkout();
    const workout = workoutData.find((workout: IWorkout) => workout.id === parseInt(id),) as IWorkout;

    return (
        <div>
            <div className="max-w-7xl mx-auto p-6 text-white">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    
                    <div className="relative min-h-120 w-full overflow-hidden rounded-2xl">
                        <Image
                            src={workout.image} // Replace with your image path
                            alt={workout.name}
                            fill
                            className="object-cover object-center"
                            priority
                        />
                    </div>

                    
                    <div className="flex flex-col justify-between">
                        <div>
                            
                            <h1 className="font-oswald text-4xl font-bold uppercase tracking-[-0.9px] text-white md:text-4xl">
                                {workout.name}
                            </h1>
                            <p className="mt-2 text-[16px] text-[#9CA3AF]">
                                {workout.description}
                            </p>

                          
                            <div className="mt-4 flex gap-2">
                                <span className="rounded-full bg-[#CCFF00] px-3 py-1 text-xs font-semibold text-black">
                                    {workout.muscleGroups[0]}
                                </span>
                                <span className={` ${workout.muscleGroups[1] ? 'block' : 'hidden'} rounded-full bg-[#CCFF00] px-3 py-1 text-xs font-semibold text-black`}>
                                    {workout.muscleGroups[1]}
                                </span>
                            </div>


                            <div className="mt-6 divide-y divide-white/5 rounded-xl bg-[#1E2330] text-xs">
                                <div className="flex justify-between px-6 py-3.5">
                                    <span className="font-bold uppercase tracking-[0.6px] text-zinc-400">Equipment</span>
                                    <span className="font-medium text-white text-[14px]">{workout.equipment}</span>
                                </div>
                                <div className="flex justify-between px-6 py-3.5">
                                    <span className="font-bold uppercase tracking-[0.6px] text-zinc-400">Difficulty</span>
                                    <span className="font-medium text-white text-[14px]">{workout.difficulty}</span>
                                </div>
                                <div className="flex justify-between px-6 py-3.5">
                                    <span className="font-bold uppercase tracking-[0.6px] text-zinc-400">Sets</span>
                                    <span className="font-medium text-white text-[14px]">{workout.sets}</span>
                                </div>
                                <div className="flex justify-between px-6 py-3.5">
                                    <span className="font-bold uppercase tracking-[0.6px] text-zinc-400">Reps</span>
                                    <span className="font-medium text-white text-[14px]">{workout.reps}</span>
                                </div>
                                <div className="flex justify-between px-6 py-3.5">
                                    <span className="font-bold uppercase tracking-[0.6px] text-zinc-400">Duration</span>
                                    <span className="font-medium text-white text-[14px]">{workout.duration} min</span>
                                </div>
                                <div className="flex justify-between px-6 py-3.5">
                                    <span className="font-bold uppercase tracking-[0.6px] text-zinc-400">Calories</span>
                                    <span className="font-medium text-white text-[14px]">{workout.caloriesBurned} kcal</span>
                                </div>
                                <div className="flex justify-between px-6 py-3.5">
                                    <span className="font-bold uppercase tracking-[0.6px] text-zinc-400">Rating</span>
                                    <span className="font-medium text-white text-[14px]">{workout.rating}</span>
                                </div>
                            </div>

                           
                            <div className="mt-6">
                                <h3 className="font-inter text-[16px] font-extrabold uppercase tracking-[0.8px] text-white">
                                    Instructions
                                </h3>
                                <ol className="mt-3 text-xs text-[#D1D5DB] space-y-3">

                                    {
                                        workout.instructions.map((instruction:string, index:number) => (
                                            <li key={index} className="flex gap-2">
                                                <span className="text-[#9CA3AF]">{index + 1}.</span>
                                                <span>{instruction}</span>
                                            </li>
                                        ))
                                    }
                                </ol>
                            </div>
                        </div>

                        
                        <div className="mt-8 flex gap-3">
                            <AddButton workout={workout} />
                            <SaveButton workout={workout} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkoutDetailsPage;