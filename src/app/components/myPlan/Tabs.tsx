'use client'

import { useContext, useState } from "react";
import Today from "./Today";
import Saved from "./Saved";
import { WorkoutContext } from "@/context/workoutContext";

export type SortOption = "duration" | "calories" | "rating";
const Tabs = () => {
    const context = useContext(WorkoutContext);
    if (!context) {
        throw new Error('WorkoutContext is not available');
    }
    const { activeTab, setActiveTab} = context;
    const [sortBy, setSortBy] = useState('duration');

    return (
        <div className="mt-8">
            <div className="flex items-center justify-between">
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

                <div className="flex items-center gap-3">
                    <span className="text-[13px] text-[#8A92A0]">
                        Sort By
                    </span>

                    <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                        className="select w-32 rounded-xl border-[#232732] bg-[#13161D] text-white"
                       
                    >
                        <option value="duration">Duration</option>
                        <option value="calories">Calories</option>
                        <option value="rating">Rating</option>
                    </select>
                </div>

            </div>

            <div className="mt-6 w-full">
                {activeTab === "today" && <Today sortBy = {sortBy}/>}
                {activeTab === "saved" && <Saved sortBy = {sortBy}/>}
            </div>
        </div>
    );
};

export default Tabs;