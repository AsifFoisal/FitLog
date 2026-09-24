import { IWorkout } from "@/types/workout.type";
import WorkoutCard from "./WorkoutCard";

const getWorkout = async() => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data = res.json();
    return data;
}
const Library = async() => {

    const workoutData = await getWorkout();
    return (
        <div className=" max-w-7xl mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {
                workoutData.map((workout: IWorkout) => {
                    return <WorkoutCard key={workout.id} workout={workout}/>
                })
            }
        </div>
    );
};

export default Library;