'use client'
import { WorkoutContext } from "@/context/workoutContext";
import { useContext } from "react";


const Stats = () => {

    const context = useContext(WorkoutContext);
    if(!context){
        throw new Error('WorkoutContext is not available');
    }

    const { addWorkout, saveWorkout, activeTab,isHydrated } = context;
    const workouts = activeTab === 'today' ? addWorkout : saveWorkout;
    const totalExercises = workouts.length;
    const totalMinutes = workouts.reduce((acc, workout) => acc + workout.duration, 0);
    const totalCalories = workouts.reduce((acc, workout) => acc + workout.caloriesBurned, 0);




    return (
        <div>
            <div className="grid grid-cols-3 divide-x divide-white/10 rounded-2xl bg-[#101218] p-6 shadow-lg my-6">
                <div className="flex flex-col gap-2 pl-2">
                    <span className="text-xs font-medium text-zinc-400">Exercises</span>
                    <span className="font-oswald text-4xl font-bold text-[#CCFF00]">{isHydrated ? totalExercises : 0}</span>
                </div>


                <div className="flex flex-col gap-2 pl-8">
                    <span className="text-xs font-medium text-zinc-400">Minutes</span>
                    <span className="font-oswald text-4xl font-bold text-white">{isHydrated ? totalMinutes : 0}</span>
                </div>


                <div className="flex flex-col gap-2 pl-8">
                    <span className="text-xs font-medium text-zinc-400">Calories</span>
                    <span className="font-oswald text-4xl font-bold text-white">{isHydrated ? totalCalories : 0}</span>
                </div>
            </div>
        </div>
    );
};

export default Stats;