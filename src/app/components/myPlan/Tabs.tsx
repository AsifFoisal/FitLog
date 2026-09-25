'use client'

import { useContext } from "react";
import Today from "./Today";
import Saved from "./Saved";
import { WorkoutContext } from "@/context/workoutContext";

const Tabs = () => {
    const context = useContext(WorkoutContext);
    if(!context){
        throw new Error('WorkoutContext is not available');
    }
    const { activeTab, setActiveTab } = context;
    return (
        <div className="mt-8">
            <div className="inline-flex rounded-xl bg-[#151921] p-1">
                <button
                    onClick={() => setActiveTab("today")}
                    className={`rounded-lg px-4 py-1.5 text-xs font-semibold transition-all cursor-pointer ${activeTab === "today"
                        ? "bg-[#1F242D] text-white shadow"
                        : "text-[#8A92A0] hover:text-white"
                        }`}
                >
                    Today&apos;s Plan
                </button>

                <button
                    onClick={() => setActiveTab("saved")}
                    className={`rounded-lg px-6 py-2 text-xs font-semibold transition-all cursor-pointer ${activeTab === "saved"
                        ? "bg-[#212530] text-white shadow"
                        : "text-[#8A92A0] hover:text-white"
                        }`}
                >
                    Saved
                </button>
            </div>

            <div className="mt-6 w-full">
                {activeTab === "today" && <Today />}
                {activeTab === "saved" && <Saved />}
            </div>
        </div>
    );
};

export default Tabs;