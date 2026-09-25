import React from 'react';

const Loading = () => {
    return (
        <div>
            <main className="min-h-screen bg-black flex items-center justify-center">
                <div className="flex items-center gap-3">
                    <div className="w-6 h-6 border-2 border-[#C2F800]/20 border-t-[#C2F800] rounded-full animate-spin" />

                    <span className="text-[#C2F800] text-[11px] font-bold tracking-[0.3em]">
                        LOADING
                    </span>
                </div>
            </main>
        </div>
    );
};

export default Loading;