
import {
    ArrowUpRight,
    Bike,
    CarFront,
    MapPin,
    ShieldCheck,
    Route,
} from "lucide-react";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen overflow-hidden bg-[#FBFCF8] pt-32 pb-16 lg:pt-40 lg:pb-24"
        >
            {/* Background Decoration */}
            <div className="absolute top-20 right-0 w-[450px] h-[450px] bg-[#CFF36B]/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative max-w-[1200px] mx-auto px-5 sm:px-8">

                <div className="grid lg:grid-cols-2 gap-14 lg:gap-12 items-center">

                    {/* LEFT CONTENT */}
                    <div className="max-w-xl">

                        {/* Eyebrow */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#CFF36B]/40 border border-[#12A66A]/15 mb-7">
                            <span className="w-2 h-2 rounded-full bg-[#12A66A]" />
                            <span className="text-sm font-semibold text-[#17221D]">
                                Your Journey, Our Priority
                            </span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-[44px] sm:text-6xl lg:text-[68px] font-extrabold tracking-[-2.5px] leading-[1.08] text-[#17221D]">
                            Move Smarter.
                            <span className="block text-[#12A66A]">
                                Move Freely.
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="mt-7 max-w-lg text-base sm:text-lg leading-8 text-[#17221D]/65">
                            Every journey has a destination. Make yours easier
                            with Turago. Discover a smarter way to move around
                            with convenient mobility solutions designed for
                            everyday life.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap items-center gap-4 mt-9">

                            <a
                                href="#download"
                                className="group inline-flex items-center gap-4 pl-7 pr-2 py-2 rounded-full bg-[#12A66A] text-white font-bold hover:bg-[#0E925B] hover:shadow-xl hover:shadow-[#12A66A]/20 transition-all duration-300"
                            >
                                Download App

                                <span className="w-11 h-11 rounded-full bg-[#CFF36B] text-[#17221D] flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                                    <ArrowUpRight size={21} />
                                </span>
                            </a>

                            <a
                                href="#about"
                                className="inline-flex items-center gap-2 px-5 py-4 rounded-full text-[#17221D] font-semibold hover:text-[#12A66A] transition-colors"
                            >
                                Discover Turago
                                <ArrowUpRight size={18} />
                            </a>
                        </div>

                        {/* Trust Features */}
                        <div className="mt-12 pt-8 border-t border-[#17221D]/10 flex flex-wrap gap-x-8 gap-y-4">

                            <div className="flex items-center gap-2.5">
                                <div className="w-9 h-9 rounded-full bg-[#CFF36B]/50 flex items-center justify-center">
                                    <Route size={18} className="text-[#12A66A]" />
                                </div>
                                <span className="text-sm font-semibold text-[#17221D]/75">
                                    Convenient Mobility
                                </span>
                            </div>

                            <div className="flex items-center gap-2.5">
                                <div className="w-9 h-9 rounded-full bg-[#CFF36B]/50 flex items-center justify-center">
                                    <ShieldCheck size={18} className="text-[#12A66A]" />
                                </div>
                                <span className="text-sm font-semibold text-[#17221D]/75">
                                    Ride with Confidence
                                </span>
                            </div>

                        </div>
                    </div>

                    {/* RIGHT VISUAL */}
                    <div className="relative mx-auto w-full max-w-[520px]">

                        {/* Main Visual Background */}
                        <div className="relative aspect-square max-h-[510px] rounded-[40px] bg-[#EAF5E9] overflow-hidden">

                            {/* Decorative Circles */}
                            <div className="absolute w-[390px] h-[390px] rounded-full bg-[#CFF36B]/60 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

                            <div className="absolute w-[290px] h-[290px] rounded-full border border-[#12A66A]/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

                            <div className="absolute w-[200px] h-[200px] rounded-full border border-[#12A66A]/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

                            {/* Route Illustration */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative w-[75%] h-[65%]">

                                    <div className="absolute top-[20%] left-[15%] w-[65%] h-[55%] border-t-[3px] border-r-[3px] border-dashed border-[#12A66A]/50 rounded-tr-[90px] rotate-12" />

                                    {/* Starting Location */}
                                    <div className="absolute top-[10%] left-[8%] w-12 h-12 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                                        <MapPin size={24} className="text-[#12A66A]" />
                                    </div>

                                    {/* Main Vehicle Card */}
                                    <div className="absolute top-[32%] left-[25%] w-36 h-36 sm:w-44 sm:h-44 rounded-[32px] bg-[#12A66A] shadow-[0_25px_60px_rgba(18,166,106,0.25)] flex flex-col items-center justify-center rotate-[-6deg]">
                                        <Bike size={76} strokeWidth={1.4} className="text-white" />
                                        <span className="mt-3 text-white text-sm font-bold tracking-widest">
                                            TURAGO
                                        </span>
                                    </div>

                                    {/* Destination */}
                                    <div className="absolute bottom-[2%] right-[2%] w-12 h-12 bg-[#CFF36B] rounded-2xl shadow-lg flex items-center justify-center">
                                        <MapPin size={24} className="text-[#17221D]" />
                                    </div>

                                </div>
                            </div>

                            {/* Top Floating Card */}
                            <div className="absolute top-7 right-6 bg-white rounded-2xl px-4 py-3 shadow-xl shadow-[#17221D]/5 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-[#CFF36B]/50 flex items-center justify-center">
                                    <CarFront size={22} className="text-[#12A66A]" />
                                </div>
                                <div>
                                    <p className="text-xs text-[#17221D]/50 font-medium">
                                        Mobility
                                    </p>
                                    <p className="text-sm font-bold text-[#17221D]">
                                        Made Easier
                                    </p>
                                </div>
                            </div>

                            {/* Bottom Floating Card */}
                            <div className="absolute bottom-7 left-6 bg-white rounded-2xl px-4 py-3 shadow-xl shadow-[#17221D]/5">
                                <div className="flex items-center gap-2">
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#12A66A]" />
                                    <span className="text-sm font-bold text-[#17221D]">
                                        Your journey starts here
                                    </span>
                                </div>
                            </div>

                        </div>

                        {/* Decorative Floating Circle */}
                        <div className="absolute -top-5 -left-5 w-16 h-16 rounded-full bg-[#12A66A] flex items-center justify-center shadow-lg">
                            <ArrowUpRight size={28} className="text-white" />
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
