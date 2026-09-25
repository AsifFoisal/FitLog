import { WorkoutContext } from '@/context/workoutContext';
import Link from 'next/link';
import React, { useContext } from 'react';
import PlanCard from './PlanCard';

const Saved = () => {

    const context = useContext(WorkoutContext);
        if (!context) {
            throw new Error('WorkoutContext is not available');
        }
    
        const { saveWorkout } = context;
    return (
        <div>
            <div className={`${saveWorkout.length > 0 ? "bg-transparent" : "flex min-h-95 w-full flex-col items-center justify-center rounded-2xl bg-[#101216] px-6 py-24.25 text-center "}`}>

                {
                    saveWorkout.length > 0 ? (
                        saveWorkout.map((workout) => {
                            return <PlanCard key={workout.id} workout={workout} />
                        })
                    ) : (<>
                        <h2 className="font-oswald text-xl font-bold uppercase tracking-[0.7px] text-white md:text-3xl">
                                No Saved Workouts
                        </h2>
                        <p className="mt-2 text-xs font-medium text-[#A1A1AA]">
                                Save lifts from the library to quickly access them later.
                        </p>
                        <Link
                            href="/"
                            className="mt-6 rounded-full bg-[#C2F10D] px-6 py-2.5 text-xs font-bold text-black transition-transform hover:scale-105"
                        >
                            Go to workouts
                        </Link>
                    </>)
                }

            </div>
        </div>
    );
};

export default Saved;