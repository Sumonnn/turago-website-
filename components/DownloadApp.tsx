
import {
    ArrowUpRight,
    Smartphone,
    Bike,
    CarFront,
    CheckCircle2,
    Apple,
    Download,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

// Add your actual store URLs here
const APP_LINKS = {
    customerAndroid: "",
    customerIos: "",
    pilotAndroid: "",
};

const rideOptions = [
    { name: "Bike", icon: Bike },
    { name: "Car", icon: CarFront },
    { name: "E-Rickshaw", icon: Smartphone },
];

type AppDownloadLinkProps = {
    href: string;
    label: string;
    icon: LucideIcon;
};

function AppDownloadLink({
    href,
    label,
    icon: Icon,
}: AppDownloadLinkProps) {
    const className =
        "inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-bold transition-all duration-300";

    if (!href) {
        return (
            <span
                aria-disabled="true"
                title="Download link coming soon"
                className={`${className} cursor-not-allowed border border-white/10 bg-white/5 text-white/35`}
            >
                <Icon size={17} />
                {label}
                <span className="text-[10px] font-medium">Coming Soon</span>
            </span>
        );
    }

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${className} bg-[#CFF36B] text-[#17221D] hover:scale-[1.03] hover:bg-white`}
        >
            <Icon size={17} />
            {label}
            <ArrowUpRight size={15} />
        </a>
    );
}

export default function DownloadApp() {
    return (
        <section
            id="download"
            className="relative overflow-hidden bg-[#17221D] py-24 sm:py-28 lg:py-32"
        >
            {/* Background decoration */}
            <div className="absolute -left-40 -top-40 h-[450px] w-[450px] rounded-full bg-[#12A66A]/15 blur-[100px]" />
            <div className="absolute -bottom-40 -right-32 h-[400px] w-[400px] rounded-full bg-[#CFF36B]/10 blur-[100px]" />

            <div className="relative mx-auto max-w-[1200px] px-5 sm:px-8">
                <div className="grid items-center gap-14 lg:grid-cols-2">

                    {/* Left content */}
                    <div>
                        <span className="inline-flex items-center gap-2 rounded-full border border-[#CFF36B]/20 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#CFF36B]">
                            <span className="h-2 w-2 rounded-full bg-[#CFF36B]" />
                            Get the Turago App
                        </span>

                        <h2 className="mt-7 max-w-xl text-4xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[60px]">
                            Your next journey is just
                            <span className="text-[#CFF36B]"> a tap away.</span>
                        </h2>

                        <p className="mt-6 max-w-lg text-base leading-8 text-white/60 sm:text-lg">
                            Discover a convenient way to travel with Turago.
                            Choose your preferred ride option and make your
                            everyday journeys simpler.
                        </p>

                        {/* Ride options */}
                        <div className="mt-9 flex flex-wrap gap-3">
                            {rideOptions.map((ride) => {
                                const Icon = ride.icon;

                                return (
                                    <div
                                        key={ride.name}
                                        className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-white/85"
                                    >
                                        <Icon
                                            size={17}
                                            className="text-[#CFF36B]"
                                        />
                                        {ride.name}
                                    </div>
                                );
                            })}
                        </div>

                        {/* App download cards */}
                        <div className="mt-10 grid gap-4 sm:grid-cols-2">

                            {/* Customer App */}
                            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#CFF36B]/15 text-[#CFF36B]">
                                        <Smartphone size={22} />
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-white">
                                            Customer App
                                        </h3>
                                        <p className="text-xs text-white/45">
                                            Book your rides
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-5 flex flex-col gap-3">
                                    <AppDownloadLink
                                        href={APP_LINKS.customerAndroid}
                                        label="Google Play"
                                        icon={Smartphone}
                                    />

                                    <AppDownloadLink
                                        href={APP_LINKS.customerIos}
                                        label="App Store"
                                        icon={Apple}
                                    />
                                </div>
                            </div>

                            {/* Pilot App */}
                            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#12A66A]/20 text-[#CFF36B]">
                                        <Bike size={22} />
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-white">
                                            Pilot App
                                        </h3>
                                        <p className="text-xs text-white/45">
                                            For Turago pilots
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-5 flex flex-col gap-3">
                                    <AppDownloadLink
                                        href={APP_LINKS.pilotAndroid}
                                        label="Google Play"
                                        icon={Smartphone}
                                    />

                                    <span className="inline-flex items-center gap-2 px-2 py-2 text-xs font-semibold text-white/45">
                                        <CheckCircle2
                                            size={15}
                                            className="text-[#CFF36B]"
                                        />
                                        Android only
                                    </span>
                                </div>
                            </div>
                        </div>

                        <p className="mt-5 flex items-center gap-2 text-xs text-white/40">
                            <CheckCircle2
                                size={15}
                                className="text-[#CFF36B]"
                            />
                            Your mobility experience starts with Turago.
                        </p>
                    </div>

                    {/* Right visual */}
                    <div className="relative mx-auto flex w-full max-w-[440px] items-center justify-center">
                        <div className="absolute h-[340px] w-[340px] rounded-full border border-white/10 sm:h-[410px] sm:w-[410px]" />

                        <div className="absolute h-[270px] w-[270px] rounded-full border border-[#CFF36B]/20 sm:h-[330px] sm:w-[330px]" />

                        <div className="relative w-[260px] rounded-[42px] border-[7px] border-[#39443E] bg-[#FBFCF8] p-3 shadow-[0_30px_90px_rgba(0,0,0,0.4)] sm:w-[290px]">
                            {/* Phone top */}
                            <div className="mx-auto mb-5 h-5 w-20 rounded-full bg-[#17221D]" />

                            <div className="rounded-[30px] bg-[#F2F6F0] p-5">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-[10px] font-semibold text-[#17221D]/50">
                                            WELCOME TO
                                        </p>
                                        <h3 className="mt-1 text-2xl font-extrabold text-[#12A66A]">
                                            Turago
                                        </h3>
                                    </div>

                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#12A66A] text-white">
                                        <Smartphone size={20} />
                                    </div>
                                </div>

                                <div className="mt-7 rounded-2xl bg-white p-4 shadow-sm">
                                    <p className="text-xs font-semibold text-[#17221D]/50">
                                        WHERE TO?
                                    </p>

                                    <div className="mt-3 flex items-center gap-2 rounded-xl bg-[#F2F6F0] p-3">
                                        <span className="h-2.5 w-2.5 rounded-full bg-[#12A66A]" />
                                        <span className="text-xs font-semibold text-[#17221D]">
                                            Choose your destination
                                        </span>
                                    </div>
                                </div>

                                <p className="mt-6 text-xs font-bold text-[#17221D]">
                                    Choose your ride
                                </p>

                                <div className="mt-3 space-y-2">
                                    {rideOptions.map((ride) => {
                                        const Icon = ride.icon;

                                        return (
                                            <div
                                                key={ride.name}
                                                className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm"
                                            >
                                                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#12A66A]/10 text-[#12A66A]">
                                                    <Icon size={19} />
                                                </div>

                                                <span className="text-xs font-bold text-[#17221D]">
                                                    {ride.name} Ride
                                                </span>

                                                <ArrowUpRight
                                                    size={15}
                                                    className="ml-auto text-[#12A66A]"
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="mx-auto mt-3 h-1.5 w-16 rounded-full bg-[#39443E]" />
                        </div>

                        {/* Floating badge */}
                        <div className="absolute -right-2 top-16 rounded-2xl border border-white/10 bg-[#26352C] px-4 py-3 shadow-xl sm:-right-5">
                            <p className="text-[10px] font-medium text-white/50">
                                YOUR JOURNEY
                            </p>
                            <p className="mt-1 text-sm font-bold text-[#CFF36B]">
                                Starts Here
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
