'use client';
import { WorkoutContext } from '@/context/workoutContext';
import { IWorkout } from '@/types/workout.type';
import React, { useContext } from 'react';
import { LuCalendarPlus2 } from 'react-icons/lu';

const AddButton = ({ workout }: { workout: IWorkout }) => {
    const context = useContext(WorkoutContext);
    if(!context){
        throw new Error('WorkoutContext is not available');
    }

    const { addWorkout, setAddWorkout } = context;
    const isWorkoutAdded = addWorkout.some((w) => w.id === workout.id);
    const handleWorkoutAdd = () => {
        
        if(isWorkoutAdded){
            alert('Workout already added to today\'s plan!');
            return;
        }
        
        setAddWorkout([...addWorkout, workout]);
    }

    console.log(addWorkout);

    return (
        <div>
            <button onClick={handleWorkoutAdd} className="flex items-center gap-2 rounded-xl bg-[#CCFF00] px-6 py-3 text-xs font-semibold text-black transition-opacity hover:opacity-90 cursor-pointer">
                <LuCalendarPlus2 size={16} />
                <span>Add to today&apos;s plan</span>
            </button>
        </div>
    );
};

export default AddButton;