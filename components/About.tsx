
import { ArrowUpRight, ShieldCheck, Clock3, MapPin } from "lucide-react";

const features = [
    {
        icon: ShieldCheck,
        title: "Reliable Mobility",
        description:
            "A convenient way to get around, with a focus on making every journey dependable.",
    },
    {
        icon: Clock3,
        title: "Everyday Convenience",
        description:
            "Designed to make everyday travel simpler, smoother, and more accessible.",
    },
    {
        icon: MapPin,
        title: "Built Around Your Journey",
        description:
            "A mobility experience designed around the places you need to go.",
    },
];

export default function About() {
    return (
        <section
            id="about"
            className="relative overflow-hidden bg-[#FBFCF8] py-24 sm:py-28 lg:py-32"
        >
            <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
                {/* Section heading */}
                <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
                    <div>
                        <span className="inline-flex items-center gap-2 rounded-full border border-[#12A66A]/20 bg-[#12A66A]/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#12A66A]">
                            <span className="h-2 w-2 rounded-full bg-[#12A66A]" />
                            About Turago
                        </span>

                        <h2 className="mt-6 max-w-xl text-4xl font-extrabold leading-[1.12] tracking-tight text-[#17221D] sm:text-5xl lg:text-[56px]">
                            More than a ride.
                            <span className="text-[#12A66A]"> A better way to move.</span>
                        </h2>
                    </div>

                    <div className="lg:pb-2">
                        <p className="max-w-xl text-base leading-8 text-[#17221D]/65 sm:text-lg">
                            Turago is built around one simple idea: getting from one place
                            to another should feel convenient and straightforward. We aim
                            to make everyday mobility easier through a thoughtful ride
                            experience designed around people and their journeys.
                        </p>

                        <a
                            href="#services"
                            className="mt-7 inline-flex items-center gap-3 text-sm font-bold text-[#12A66A] transition-all hover:gap-5"
                        >
                            Explore our services
                            <ArrowUpRight size={19} />
                        </a>
                    </div>
                </div>

                {/* Main content */}
                <div className="mt-16 grid gap-5 md:grid-cols-3">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <div
                                key={feature.title}
                                className="group rounded-[28px] border border-[#17221D]/[0.07] bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#12A66A]/30 hover:shadow-[0_20px_55px_rgba(23,34,29,0.07)] sm:p-9"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#12A66A]/10 text-[#12A66A] transition-colors duration-300 group-hover:bg-[#12A66A] group-hover:text-white">
                                        <Icon size={25} strokeWidth={1.8} />
                                    </div>

                                    <span className="text-sm font-semibold text-[#17221D]/25">
                                        0{index + 1}
                                    </span>
                                </div>

                                <h3 className="mt-9 text-xl font-bold text-[#17221D]">
                                    {feature.title}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-[#17221D]/60">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom highlight */}
                <div className="relative mt-6 overflow-hidden rounded-[28px] bg-[#17221D] px-8 py-10 sm:px-12 sm:py-12">
                    <div className="absolute -right-16 -top-24 h-64 w-64 rounded-full bg-[#12A66A]/20 blur-3xl" />

                    <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#CFF36B]">
                                The Turago experience
                            </p>
                            <h3 className="mt-3 max-w-xl text-2xl font-bold leading-snug text-white sm:text-3xl">
                                Your destination matters. So does the journey.
                            </h3>
                        </div>

                        <a
                            href="#download"
                            className="inline-flex shrink-0 items-center justify-center gap-3 self-start rounded-full bg-[#CFF36B] px-6 py-4 text-sm font-bold text-[#17221D] transition-all hover:bg-white sm:self-center"
                        >
                            Get the App
                            <ArrowUpRight size={19} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
