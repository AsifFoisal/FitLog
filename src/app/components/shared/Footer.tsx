import Image from 'next/image';

const Footer = () => {
    return (
        <div className="border-t border-white/6">
            <div className="flex flex-col sm:flex-row justify-between items-center sm:items-center gap-4 sm:gap-6 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 xl:px-0 py-8 sm:py-10">

                <div className="flex gap-2 items-center">
                    <Image
                        width={28}
                        height={28}
                        alt=""
                        src="/logo.png"
                    />
                    <h3 className="text-lg font-semibold tracking-[0.08em] font-oswald">
                        FITLOG
                    </h3>
                </div>

                <div className="text-center sm:text-right">
                    <p className="text-[11px] sm:text-[12px] text-[#6B7280]">
                        © 2026 FitLog — Workout Library. Train hard, log honest.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Footer;