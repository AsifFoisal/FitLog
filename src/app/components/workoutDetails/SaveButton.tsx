'use client'
import { WorkoutContext } from '@/context/workoutContext';
import { IWorkout } from '@/types/workout.type';
import React, { useContext } from 'react';
import { FaRegBookmark } from 'react-icons/fa6';

const SaveButton = ({ workout }: { workout: IWorkout }) => {
     const context = useContext(WorkoutContext);
        if(!context){
            throw new Error('WorkoutContext is not available');
        }
    
        const { saveWorkout, setSaveWorkout } = context;
        const isWorkoutSaved = saveWorkout.some((w) => w.id === workout.id);
        const handleWorkoutSave = () => {
            
            if(isWorkoutSaved){
                alert('Workout already Saved');
                return;
            }
            
            setSaveWorkout([...saveWorkout, workout]);
        }
    return (
        <div>
            <button onClick={handleWorkoutSave} className="flex items-center gap-2 rounded-xl px-6 py-3 text-xs font-semibold text-zinc-300 transition-colors hover:bg-white/10 hover:text-white border border-[#374151] cursor-pointer">
                <FaRegBookmark size={16} />
                <span>Save for later</span>
            </button>
        </div>
    );
};

export default SaveButton;