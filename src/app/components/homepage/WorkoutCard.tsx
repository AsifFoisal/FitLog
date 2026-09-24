import { IWorkout } from '@/types/workout.type';
import Image from 'next/image';
import Link from 'next/link';
import { GoClock } from 'react-icons/go';
import { MdStarBorder } from 'react-icons/md';
import { PiFireSimpleFill } from 'react-icons/pi';

const WorkoutCard = ({ workout }: { workout: IWorkout }) => {
    return (
        <div>
            <Link href={`/workout/${workout.id}`}>
                <div className="w-full mx-auto rounded-2xl bg-[#15171D] text-white shadow-lg border border-white/5">

                    <div className="relative h-56 w-full overflow-hidden">
                        <Image
                            src={workout.image}
                            alt={workout.name}
                            fill
                            className="object-cover object-center rounded-2xl"
                        />
                    </div>

                    <div className="p-6">

                        <div className="flex gap-2">
                            <span className="rounded-full bg-[#C2F800] px-2.5 py-1 text-xs font-bold tracking-[0.55px] text-black uppercase">
                                {workout.muscleGroups[0]}
                            </span>
                            <span className="rounded-full bg-[#C2F800] px-2.5 py-1 text-xs font-bold tracking-wider text-black uppercase">
                                {workout.muscleGroups[1]}
                            </span>
                        </div>


                        <div className="mt-4">
                            <h3 className="font-oswald text-[18px] font-bold uppercase tracking-[0.45] text-white">
                                {workout.name}
                            </h3>
                            <p className="mt-1 text-[12px] font-medium text-zinc-400">
                                {workout.equipment}
                            </p>
                        </div>


                        <div className="my-4 h-px w-full bg-white/10" />


                        <div className="flex items-center gap-5 text-xs text-zinc-400">
                            <div className="flex items-center gap-1.5">
                                <GoClock size={15} color='#9CA3AF' />
                                <span>{workout.duration} min</span>
                            </div>

                            <div className="flex items-center gap-1.5">
                                <PiFireSimpleFill size={15} />
                                <span>{workout.caloriesBurned} kcal</span>
                            </div>

                            <div className="flex items-center gap-1.5">
                                <MdStarBorder size={16} />
                                <span>{workout.rating}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default WorkoutCard;