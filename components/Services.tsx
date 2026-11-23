
import { ArrowUpRight, Bike, CarFront, CheckCircle2 } from "lucide-react";


const services = [
    {
        number: "01",
        title: "Bike Rides",
        subtitle: "Quick. Convenient. Flexible.",
        description:
            "A convenient option for everyday journeys. Get around with a ride experience designed to make short trips simpler.",
        icon: Bike,
        features: [
            "Convenient city travel",
            "Everyday mobility",
            "Easy ride experience",
        ],
        theme: "green",
    },
    {
        number: "02",
        title: "Car Rides",
        subtitle: "Comfort for every journey.",
        description:
            "Travel with added comfort and space. A practical ride option for your daily plans and longer journeys.",
        icon: CarFront,
        features: [
            "Comfortable journeys",
            "More room to travel",
            "Convenient transportation",
        ],
        theme: "dark",
    },
    {
        number: "03",
        title: "E-Rickshaw",
        subtitle: "Simple. Local. Convenient.",
        description:
            "A convenient option for short-distance local travel, designed to make everyday neighbourhood journeys easier.",
        icon: CarFront,
        features: [
            "Convenient local travel",
            "Ideal for short journeys",
            "An everyday mobility option",
        ],
        theme: "green",
    },
];


export default function Services() {
    return (
        <section
            id="services"
            className="bg-white py-24 sm:py-28 lg:py-32"
        >
            <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
                <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div>
                        <span className="inline-flex items-center gap-2 rounded-full border border-[#12A66A]/20 bg-[#12A66A]/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#12A66A]">
                            <span className="h-2 w-2 rounded-full bg-[#12A66A]" />
                            Our Services
                        </span>

                        <h2 className="mt-6 max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-[#17221D] sm:text-5xl lg:text-[56px]">
                            Choose your ride.
                            <span className="text-[#12A66A]"> Enjoy the journey.</span>
                        </h2>
                    </div>

                    <p className="max-w-md text-base leading-8 text-[#17221D]/60">
                        Whether you need a quick city ride or a more comfortable journey,
                        Turago brings convenient mobility options together.
                    </p>
                </div>

                <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => {
                        const Icon = service.icon;
                        const isGreen = service.theme === "green";

                        return (
                            <article
                                key={service.number}
                                className={`group relative overflow-hidden rounded-[32px] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(23,34,29,0.12)] sm:p-10 lg:p-12 ${isGreen
                                    ? "bg-[#12A66A] text-white"
                                    : "bg-[#17221D] text-white"
                                    }`}
                            >
                                <div
                                    className={`absolute -right-20 -top-20 h-72 w-72 rounded-full blur-3xl transition-transform duration-500 group-hover:scale-125 ${isGreen ? "bg-[#CFF36B]/20" : "bg-[#12A66A]/25"
                                        }`}
                                />

                                <div className="relative">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-bold tracking-widest text-white/60">
                                            SERVICE {service.number}
                                        </span>

                                        <div
                                            className={`flex h-16 w-16 items-center justify-center rounded-2xl ${isGreen
                                                ? "bg-white/15 text-[#CFF36B]"
                                                : "bg-[#CFF36B] text-[#17221D]"
                                                }`}
                                        >
                                            <Icon size={32} strokeWidth={1.7} />
                                        </div>
                                    </div>

                                    <p className="mt-12 text-sm font-semibold tracking-wide text-[#CFF36B]">
                                        {service.subtitle}
                                    </p>

                                    <h3 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
                                        {service.title}
                                    </h3>

                                    <p className="mt-5 max-w-md text-base leading-8 text-white/70">
                                        {service.description}
                                    </p>

                                    <div className="mt-8 space-y-3">
                                        {service.features.map((feature) => (
                                            <div
                                                key={feature}
                                                className="flex items-center gap-3 text-sm font-medium text-white/85"
                                            >
                                                <CheckCircle2
                                                    size={18}
                                                    className="shrink-0 text-[#CFF36B]"
                                                />
                                                {feature}
                                            </div>
                                        ))}
                                    </div>

                                    <a
                                        href="#download"
                                        className={`mt-10 inline-flex items-center gap-3 rounded-full px-6 py-4 text-sm font-bold transition-all duration-300 ${isGreen
                                            ? "bg-[#CFF36B] text-[#17221D] hover:bg-white"
                                            : "bg-white text-[#17221D] hover:bg-[#CFF36B]"
                                            }`}
                                    >
                                        Explore Turago
                                        <ArrowUpRight
                                            size={19}
                                            className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                                        />
                                    </a>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
