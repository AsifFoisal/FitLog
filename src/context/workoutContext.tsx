'use client'
import { IWorkout } from '@/types/workout.type';
import React, { createContext, ReactNode, useState } from 'react';

interface IWorkoutContext {
    addWorkout: IWorkout[],
    setAddWorkout: React.Dispatch<React.SetStateAction<IWorkout[]>>,
    saveWorkout: IWorkout[],
    setSaveWorkout: React.Dispatch<React.SetStateAction<IWorkout[]>>,
    activeTab: 'today' | 'saved',
    setActiveTab: React.Dispatch<React.SetStateAction<'today' | 'saved'>>,
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const WorkoutContext = createContext<IWorkoutContext | null>(null);

const WorkoutProvider = ({children}: {children: ReactNode}) => {

    const [addWorkout, setAddWorkout] = useState<IWorkout[]>([]);
    const [saveWorkout, setSaveWorkout] = useState<IWorkout[]>([]);
    const [activeTab, setActiveTab] = useState<'today' | 'saved'>('today');
    const [loading, setLoading] = useState(true);

    const sharedData = {
        addWorkout,
        setAddWorkout,
        saveWorkout,
        setSaveWorkout,
        activeTab, 
        setActiveTab,
        loading,
        setLoading
    }

    return (
        <div>
            <WorkoutContext.Provider value={sharedData}>{children}</WorkoutContext.Provider>
        </div>
    );
};

export default WorkoutProvider;