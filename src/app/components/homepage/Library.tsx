import { IWorkout } from "@/types/workout.type";
import WorkoutCard from "./WorkoutCard";

const getWorkout = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data = await res.json();
    return data;
}
const Library = async () => {

    const workoutData = await getWorkout();
    return (
        <div id="library" className="max-w-7xl mx-auto mb-10 sm:mb-12 lg:mb-16 px-4 sm:px-6 lg:px-8 xl:px-0">
            <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-30 lg:text-left md:text-left px-4 sm:px-0 text-center">
                <h1 className="text-[26px] sm:text-[28px] md:text-[30px] font-oswald font-bold tracking-[-0.5px] sm:tracking-[-0.75px]">
                    THE LIBRARY
                </h1>

                <p className="text-[#9CA3AF] text-[13px] sm:text-[14px]">
                    Twelve lifts covering every major muscle group.
                </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mt-8">
                {
                    workoutData.map((workout: IWorkout) => {
                        return <WorkoutCard key={workout.id} workout={workout} />
                    })
                }
            </div>
        </div>
    );
};

export default Library;