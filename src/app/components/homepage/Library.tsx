import { IWorkout } from "@/types/workout.type";
import WorkoutCard from "./WorkoutCard";

const getWorkout = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data = res.json();
    return data;
}
const Library = async () => {

    const workoutData = await getWorkout();
    return (
        <div className="max-w-7xl mx-auto">
            <div className="mt-30">
                <h1 className="text-[30px] font-oswald font-bold tracking-[-0.75px]">THE LIBRARY</h1>
                <p className="text-[#9CA3AF] text-[14px]">Twelve lifts covering every major muscle group.</p>
            </div>
            <div className="  grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 mt-[32px]">
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