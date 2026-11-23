
import {
    ArrowUpRight,
    Mail,
    MapPin,
    Smartphone,
    Apple,
    Bike,
    Download,
    ExternalLink,
} from "lucide-react";
import Image from "next/image";

const customerApp = {
    android: "", // Add Customer Android Play Store URL
    ios: "", // Add Customer iOS App Store URL
};

const pilotApp = {
    android: "", // Add Pilot Android Play Store URL
};

const footerLinks = {
    company: [
        { label: "About Us", href: "#about" },
        { label: "Our Services", href: "#services" },
        { label: "Why Turago", href: "#why-us" },
    ],
    support: [
        { label: "Contact Us", href: "#contact" },
        { label: "Download App", href: "#download" },
    ],
};

function AppLink({
    href,
    label,
    platform,
    icon: Icon,
}: {
    href: string;
    label: string;
    platform: string;
    icon: typeof Smartphone;
}) {
    if (!href) {
        return (
            <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 opacity-60">
                <Icon size={21} />
                <div>
                    <p className="text-xs text-white/45">{platform}</p>
                    <p className="text-sm font-semibold">{label} — Link coming soon</p>
                </div>
            </div>
        );
    }

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition-all hover:border-[#CFF36B]/40 hover:bg-white/10"
        >
            <Icon size={21} />
            <div>
                <p className="text-xs text-white/45">{platform}</p>
                <p className="text-sm font-semibold">{label}</p>
            </div>
            <ExternalLink size={15} className="ml-auto text-white/40" />
        </a>
    );
}

export default function ContactFooter() {
    return (
        <>
            {/* ================= CONTACT SECTION ================= */}
            <section
                id="contact"
                className="bg-[#FBFCF8] px-5 py-24 sm:px-8 sm:py-28"
            >
                <div className="mx-auto max-w-[1200px]">
                    <div className="relative overflow-hidden rounded-[32px] bg-[#CFF36B] px-7 py-12 sm:px-12 sm:py-16 lg:px-16">
                        <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full bg-white/30 blur-3xl" />

                        <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
                            <div>
                                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#17221D]/60">
                                    Get in Touch
                                </span>

                                <h2 className="mt-5 max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-[#17221D] sm:text-5xl">
                                    {`Let's make your next journey better.`}
                                </h2>

                                <p className="mt-5 max-w-xl text-base leading-8 text-[#17221D]/65">
                                    Have questions about Turago or need assistance?
                                    Our team is here to help.
                                </p>
                            </div>

                            <a
                                href="mailto:support@turago.in"
                                className="inline-flex items-center justify-center gap-3 self-start rounded-full bg-[#17221D] px-7 py-4 text-sm font-bold text-white transition-all hover:bg-[#12A66A]"
                            >
                                <Mail size={19} />
                                Contact Our Team
                                <ArrowUpRight size={18} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ================= FOOTER ================= */}
            <footer className="bg-[#17221D] text-white">
                <div className="mx-auto max-w-[1200px] px-5 pb-10 pt-16 sm:px-8 sm:pt-20">
                    <div className="grid gap-12 lg:grid-cols-[1.2fr_0.7fr_0.7fr_1.5fr]">
                        {/* Brand */}
                        <div>
                            <a
                                href="#home"
                                className="inline-flex items-center"
                                aria-label="Turago Home"
                            >
                                <Image
                                    src="/logo.png"
                                    alt="Turago"
                                    width={160}
                                    height={60}
                                    className="h-12 w-auto object-contain"
                                />
                            </a>

                            <p className="mt-5 max-w-xs text-sm leading-7 text-white/55">
                                Your mobility partner for everyday journeys.
                                Discover convenient travel options with Turago.
                            </p>

                            <div className="mt-6 flex items-center gap-2 text-sm text-white/55">
                                <MapPin size={17} className="text-[#CFF36B]" />
                                India
                            </div>
                        </div>

                        {/* Company links */}
                        <div>
                            <h3 className="text-sm font-bold text-white">Company</h3>

                            <ul className="mt-6 space-y-4">
                                {footerLinks.company.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="text-sm text-white/55 transition-colors hover:text-[#CFF36B]"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Support links */}
                        <div>
                            <h3 className="text-sm font-bold text-white">Support</h3>

                            <ul className="mt-6 space-y-4">
                                {footerLinks.support.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="text-sm text-white/55 transition-colors hover:text-[#CFF36B]"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                                <li>
                                    <a
                                        href="mailto:support@turago.in"
                                        className="text-sm text-white/55 transition-colors hover:text-[#CFF36B]"
                                    >
                                        Email Support
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* App downloads */}
                        <div>
                            <h3 className="text-sm font-bold text-white">
                                Download Our Apps
                            </h3>

                            {/* Customer app */}
                            <div className="mt-6">
                                <div className="mb-3 flex items-center gap-2">
                                    <Smartphone size={17} className="text-[#CFF36B]" />
                                    <p className="text-sm font-semibold text-white/85">
                                        Customer App
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    <AppLink
                                        href={customerApp.android}
                                        platform="ANDROID"
                                        label="Google Play"
                                        icon={Smartphone}
                                    />

                                    <AppLink
                                        href={customerApp.ios}
                                        platform="iOS"
                                        label="App Store"
                                        icon={Apple}
                                    />
                                </div>
                            </div>

                            {/* Pilot app */}
                            <div className="mt-7">
                                <div className="mb-3 flex items-center gap-2">
                                    <Bike size={17} className="text-[#CFF36B]" />
                                    <p className="text-sm font-semibold text-white/85">
                                        Pilot App
                                    </p>
                                    <span className="rounded-full bg-[#CFF36B]/15 px-2 py-1 text-[10px] font-bold text-[#CFF36B]">
                                        ANDROID ONLY
                                    </span>
                                </div>

                                <AppLink
                                    href={pilotApp.android}
                                    platform="ANDROID"
                                    label="Google Play"
                                    icon={Download}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Bottom footer */}
                    <div className="mt-16 flex flex-col gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-xs text-white/40">
                            © 2026 Turago. All rights reserved.
                        </p>

                        <a
                            href="#home"
                            className="inline-flex items-center gap-2 text-xs font-semibold text-white/55 transition-colors hover:text-[#CFF36B]"
                        >
                            Back to top
                            <ArrowUpRight size={15} />
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
}
