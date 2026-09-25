'use client'
import { IWorkout } from '@/types/workout.type';
import React, { createContext, ReactNode, useEffect, useState, useSyncExternalStore } from 'react';

interface IWorkoutContext {
    addWorkout: IWorkout[],
    setAddWorkout: React.Dispatch<React.SetStateAction<IWorkout[]>>,
    saveWorkout: IWorkout[],
    setSaveWorkout: React.Dispatch<React.SetStateAction<IWorkout[]>>,
    activeTab: 'today' | 'saved',
    setActiveTab: React.Dispatch<React.SetStateAction<'today' | 'saved'>>,
    isHydrated: boolean,
}

export const WorkoutContext = createContext<IWorkoutContext | null>(null);

const subscribe = () => {
    return () => { };
};

const getServerSnapshot = () => false;

const getClientSnapshot = () => true;

const WorkoutProvider = ({children}: {children: ReactNode}) => {

    // const [addWorkout, setAddWorkout] = useState<IWorkout[]>([]);
    // const [saveWorkout, setSaveWorkout] = useState<IWorkout[]>([]);
    // const [activeTab, setActiveTab] = useState<'today' | 'saved'>('today');
    // const [isHydrated, setIsHydrated] = useState(false);

    const isHydrated = useSyncExternalStore(
        subscribe,
        getClientSnapshot,
        getServerSnapshot
    );

    const [addWorkout, setAddWorkout] = useState<IWorkout[]>(() => {
        if (typeof window === 'undefined') {
            return [];
        }

        const stored = localStorage.getItem('addWorkout');

        return stored ? JSON.parse(stored) : [];
    });

    const [saveWorkout, setSaveWorkout] = useState<IWorkout[]>(() => {
        if (typeof window === 'undefined') {
            return [];
        }

        const stored = localStorage.getItem('saveWorkout');

        return stored ? JSON.parse(stored) : [];
    });

    const [activeTab, setActiveTab] = useState<'today' | 'saved'>('today');

    // Save today's workout plan
    useEffect(() => {
        if (!isHydrated) return;

        localStorage.setItem(
            'addWorkout',
            JSON.stringify(addWorkout)
        );
    }, [addWorkout, isHydrated]);

    // Save saved workouts
    useEffect(() => {
        if (!isHydrated) return;

        localStorage.setItem(
            'saveWorkout',
            JSON.stringify(saveWorkout)
        );
    }, [saveWorkout, isHydrated]);


    const sharedData = {
        addWorkout,
        setAddWorkout,
        saveWorkout,
        setSaveWorkout,
        activeTab, 
        setActiveTab,
        isHydrated,
    }

    return (
        <div>
            <WorkoutContext.Provider value={sharedData}>{children}</WorkoutContext.Provider>
        </div>
    );
};

export default WorkoutProvider;