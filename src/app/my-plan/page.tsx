import Stats from "../components/myPlan/Stats";
import Tabs from "../components/myPlan/Tabs";

const MyPlanPage = () => {
    
    return (
        <div>
            <div className="mx-auto max-w-7xl px-4 py-8 text-white">
                <h1 className="font-oswald text-[30px] font-bold tracking-[-0.75px]">MY PLAN</h1>
                <p className="mb-6 text-sm text-[#8A92A0]">
                    Cap of five lifts for today. Finish them, then load more.
                </p>
                    <Stats />
                    
                    <Tabs />
            </div>
        </div>
    );
};

export default MyPlanPage;