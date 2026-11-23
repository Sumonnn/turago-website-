
import {
    Clock3,
    MapPinned,
    ShieldCheck,
    Smartphone,
    ArrowUpRight,
} from "lucide-react";

const benefits = [
    {
        number: "01",
        icon: Clock3,
        title: "Convenience",
        description:
            "A straightforward way to find a ride for your everyday travel needs.",
    },
    {
        number: "02",
        icon: MapPinned,
        title: "Multiple Ride Options",
        description:
            "Choose from Bike, Car, and E-Rickshaw rides based on your journey.",
    },
    {
        number: "03",
        icon: Smartphone,
        title: "Simple Experience",
        description:
            "Discover a user-friendly app experience designed to make getting around easier.",
    },
    {
        number: "04",
        icon: ShieldCheck,
        title: "A Focus on Reliability",
        description:
            "We aim to make every ride experience dependable and convenient.",
    },
];

export default function WhyChooseUs() {
    return (
        <section
            id="why-us"
            className="relative overflow-hidden bg-[#F2F6F0] py-24 sm:py-28 lg:py-32"
        >
            <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
                <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                    {/* Left content */}
                    <div>
                        <span className="inline-flex items-center gap-2 rounded-full border border-[#12A66A]/20 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#12A66A]">
                            <span className="h-2 w-2 rounded-full bg-[#12A66A]" />
                            Why Choose Turago
                        </span>

                        <h2 className="mt-6 max-w-lg text-4xl font-extrabold leading-[1.12] tracking-tight text-[#17221D] sm:text-5xl lg:text-[56px]">
                            Your journey.
                            <span className="text-[#12A66A]"> Your choice.</span>
                            <br />
                            Your Turago.
                        </h2>

                        <p className="mt-6 max-w-md text-base leading-8 text-[#17221D]/65">
                            {`Every journey is different. That's why Turago brings multiple
                            ride options together in one convenient mobility experience.`}
                        </p>

                        <a
                            href="#download"
                            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#12A66A] px-7 py-4 text-sm font-bold text-white transition-all hover:bg-[#0E925B] hover:shadow-lg hover:shadow-[#12A66A]/20"
                        >
                            Get Started with Turago
                            <ArrowUpRight size={19} />
                        </a>

                        {/* Decorative highlight */}
                        <div className="mt-12 flex items-center gap-4">
                            <div className="flex -space-x-3">
                                <div className="flex h-11 w-11 items-center justify-center rounded-full border-4 border-[#F2F6F0] bg-[#12A66A] text-white">
                                    <Smartphone size={17} />
                                </div>
                                <div className="flex h-11 w-11 items-center justify-center rounded-full border-4 border-[#F2F6F0] bg-[#CFF36B] text-[#17221D]">
                                    <MapPinned size={17} />
                                </div>
                                <div className="flex h-11 w-11 items-center justify-center rounded-full border-4 border-[#F2F6F0] bg-[#17221D] text-white">
                                    <Clock3 size={17} />
                                </div>
                            </div>

                            <p className="text-sm font-medium text-[#17221D]/60">
                                Mobility made more convenient
                            </p>
                        </div>
                    </div>

                    {/* Right benefit cards */}
                    <div className="grid gap-4 sm:grid-cols-2">
                        {benefits.map((benefit, index) => {
                            const Icon = benefit.icon;

                            return (
                                <div
                                    key={benefit.number}
                                    className={`group rounded-[26px] border border-[#17221D]/[0.06] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(23,34,29,0.08)] sm:p-8 ${index === 1 || index === 2
                                        ? "bg-[#17221D] text-white"
                                        : "bg-white text-[#17221D]"
                                        }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <div
                                            className={`flex h-13 w-13 items-center justify-center rounded-2xl ${index === 1 || index === 2
                                                ? "bg-[#CFF36B] text-[#17221D]"
                                                : "bg-[#12A66A]/10 text-[#12A66A]"
                                                }`}
                                        >
                                            <Icon size={24} strokeWidth={1.8} />
                                        </div>

                                        <span
                                            className={`text-sm font-bold ${index === 1 || index === 2
                                                ? "text-white/30"
                                                : "text-[#17221D]/25"
                                                }`}
                                        >
                                            {benefit.number}
                                        </span>
                                    </div>

                                    <h3 className="mt-9 text-xl font-bold">
                                        {benefit.title}
                                    </h3>

                                    <p
                                        className={`mt-3 text-sm leading-7 ${index === 1 || index === 2
                                            ? "text-white/60"
                                            : "text-[#17221D]/60"
                                            }`}
                                    >
                                        {benefit.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
