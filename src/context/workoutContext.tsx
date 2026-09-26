'use client'
import { IWorkout } from '@/types/workout.type';
import React, { createContext, ReactNode, useEffect, useState } from 'react';

interface IWorkoutContext {
    addWorkout: IWorkout[],
    setAddWorkout: React.Dispatch<React.SetStateAction<IWorkout[]>>,
    saveWorkout: IWorkout[],
    setSaveWorkout: React.Dispatch<React.SetStateAction<IWorkout[]>>,
    activeTab: 'today' | 'saved',
    setActiveTab: React.Dispatch<React.SetStateAction<'today' | 'saved'>>,
    isLoaded: boolean,
}

export const WorkoutContext = createContext<IWorkoutContext | null>(null);


const WorkoutProvider = ({children}: {children: ReactNode}) => {

    const [addWorkout, setAddWorkout] = useState<IWorkout[]>([]);
    const [saveWorkout, setSaveWorkout] = useState<IWorkout[]>([]);

    const [activeTab, setActiveTab] = useState<'today' | 'saved'>('today');
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {

        const loadData = () => {

            const storedAddWorkout = localStorage.getItem('addWorkout');
            const storedSaveWorkout = localStorage.getItem('saveWorkout');

            setAddWorkout(storedAddWorkout? JSON.parse(storedAddWorkout): []);

            setSaveWorkout(storedSaveWorkout? JSON.parse(storedSaveWorkout): []);

            setIsLoaded(true);
        };
        queueMicrotask(loadData);

    }, []);

    useEffect(() => {

        if (!isLoaded) return;

        localStorage.setItem(
            'addWorkout',
            JSON.stringify(addWorkout)
        );

    }, [addWorkout, isLoaded]);

    useEffect(() => {

        if (!isLoaded) return;

        localStorage.setItem(
            'saveWorkout',
            JSON.stringify(saveWorkout)
        );

    }, [saveWorkout, isLoaded]);

    const sharedData = {
        addWorkout,
        setAddWorkout,
        saveWorkout,
        setSaveWorkout,
        activeTab, 
        setActiveTab,
        isLoaded,
    }

    return (
        <div>
            <WorkoutContext.Provider value={sharedData}>{children}</WorkoutContext.Provider>
        </div>
    );
};

export default WorkoutProvider;