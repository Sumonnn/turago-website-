
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

                    {/* Section Heading */}
                    <div className="mb-14 max-w-2xl">
                        <span className="inline-flex items-center gap-2 rounded-full border border-[#12A66A]/20 bg-[#12A66A]/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#12A66A]">
                            <span className="h-2 w-2 rounded-full bg-[#12A66A]" />
                            Get in Touch
                        </span>

                        <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-[#17221D] sm:text-5xl lg:text-[56px]">
                            {`Let's talk about`}
                            <span className="text-[#12A66A]"> Turago.</span>
                        </h2>

                        <p className="mt-5 max-w-xl text-base leading-8 text-[#17221D]/60">
                            {`Have a question, need assistance, or want to become
                            part of Turago? We'd love to hear from you.
                            Send us your enquiry and our team will get back to you.`}
                        </p>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">

                        {/* LEFT: Contact Information */}
                        <div className="relative overflow-hidden rounded-[32px] bg-[#17221D] p-8 text-white sm:p-10 lg:p-12">

                            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#12A66A]/20 blur-3xl" />

                            <div className="relative">
                                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#CFF36B]">
                                    Contact Information
                                </span>

                                <h3 className="mt-6 text-3xl font-extrabold leading-tight sm:text-4xl">
                                    {`We're here to help you.`}
                                </h3>

                                <p className="mt-5 text-sm leading-8 text-white/60">
                                    {`Whether you're a customer, a pilot, or a business
                                    partner, our team is ready to assist you.`}
                                </p>

                                <div className="mt-12 space-y-8">

                                    {/* Email */}
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#CFF36B]/15 text-[#CFF36B]">
                                            <Mail size={22} />
                                        </div>

                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
                                                Email Us
                                            </p>

                                            <a
                                                href="mailto:support@turago.in"
                                                className="mt-2 block text-base font-semibold transition-colors hover:text-[#CFF36B]"
                                            >
                                                support@turago.in
                                            </a>
                                        </div>
                                    </div>

                                    {/* Website */}
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#CFF36B]/15 text-[#CFF36B]">
                                            <ArrowUpRight size={22} />
                                        </div>

                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
                                                Our Website
                                            </p>

                                            <a
                                                href="https://turago.in"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="mt-2 block text-base font-semibold transition-colors hover:text-[#CFF36B]"
                                            >
                                                www.turago.in
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom Highlight */}
                                <div className="mt-16 rounded-2xl border border-white/10 bg-white/5 p-6">
                                    <p className="text-sm font-bold text-[#CFF36B]">
                                        Join the Turago Community
                                    </p>

                                    <p className="mt-2 text-sm leading-7 text-white/60">
                                        {`Better mobility starts with better connections.
                                        Let's make every journey count.`}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Enquiry Form */}
                        <div className="rounded-[32px] border border-[#17221D]/5 bg-white p-7 shadow-[0_15px_50px_rgba(23,34,29,0.05)] sm:p-10 lg:p-12">

                            <div className="mb-9">
                                <h3 className="text-2xl font-extrabold text-[#17221D] sm:text-3xl">
                                    Send us an enquiry
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-[#17221D]/55">
                                    Fill in the details below and let us know how
                                    we can help.
                                </p>
                            </div>

                            <form
                                action="mailto:support@turago.in"
                                method="POST"
                                encType="text/plain"
                                className="space-y-6"
                            >
                                {/* Full Name */}
                                <div>
                                    <label
                                        htmlFor="fullName"
                                        className="mb-2 block text-sm font-bold text-[#17221D]"
                                    >
                                        Full Name <span className="text-[#12A66A]">*</span>
                                    </label>

                                    <input
                                        id="fullName"
                                        name="Full Name"
                                        type="text"
                                        placeholder="Enter your full name"
                                        required
                                        autoComplete="name"
                                        className="w-full rounded-xl border border-[#17221D]/10 bg-[#FBFCF8] px-5 py-4 text-sm text-[#17221D] outline-none transition-all placeholder:text-[#17221D]/35 focus:border-[#12A66A] focus:ring-4 focus:ring-[#12A66A]/10"
                                    />
                                </div>

                                {/* Email and Phone */}
                                <div className="grid gap-6 sm:grid-cols-2">
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="mb-2 block text-sm font-bold text-[#17221D]"
                                        >
                                            Email Address <span className="text-[#12A66A]">*</span>
                                        </label>

                                        <input
                                            id="email"
                                            name="Email"
                                            type="email"
                                            placeholder="your@email.com"
                                            required
                                            autoComplete="email"
                                            className="w-full rounded-xl border border-[#17221D]/10 bg-[#FBFCF8] px-5 py-4 text-sm text-[#17221D] outline-none transition-all placeholder:text-[#17221D]/35 focus:border-[#12A66A] focus:ring-4 focus:ring-[#12A66A]/10"
                                        />
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="phone"
                                            className="mb-2 block text-sm font-bold text-[#17221D]"
                                        >
                                            Phone Number
                                        </label>

                                        <input
                                            id="phone"
                                            name="Phone Number"
                                            type="tel"
                                            placeholder="+91 XXXXX XXXXX"
                                            autoComplete="tel"
                                            className="w-full rounded-xl border border-[#17221D]/10 bg-[#FBFCF8] px-5 py-4 text-sm text-[#17221D] outline-none transition-all placeholder:text-[#17221D]/35 focus:border-[#12A66A] focus:ring-4 focus:ring-[#12A66A]/10"
                                        />
                                    </div>
                                </div>

                                {/* Enquiry Type */}
                                <div>
                                    <label
                                        htmlFor="enquiry"
                                        className="mb-2 block text-sm font-bold text-[#17221D]"
                                    >
                                        Enquiry About <span className="text-[#12A66A]">*</span>
                                    </label>

                                    <select
                                        id="enquiry"
                                        name="Enquiry About"
                                        required
                                        defaultValue=""
                                        className="w-full appearance-none rounded-xl border border-[#17221D]/10 bg-[#FBFCF8] px-5 py-4 text-sm text-[#17221D] outline-none transition-all focus:border-[#12A66A] focus:ring-4 focus:ring-[#12A66A]/10"
                                    >
                                        <option value="" disabled>
                                            Select your enquiry type
                                        </option>

                                        <option value="Turago Customer">
                                            Turago Customer
                                        </option>

                                        <option value="Turago Pilot">
                                            Turago Pilot
                                        </option>

                                        <option value="Business / Partnership">
                                            Business / Partnership
                                        </option>

                                        <option value="General Enquiry">
                                            General Enquiry
                                        </option>

                                        <option value="Other">
                                            Other
                                        </option>
                                    </select>
                                </div>

                                {/* Subject */}
                                <div>
                                    <label
                                        htmlFor="subject"
                                        className="mb-2 block text-sm font-bold text-[#17221D]"
                                    >
                                        Subject <span className="text-[#12A66A]">*</span>
                                    </label>

                                    <input
                                        id="subject"
                                        name="Subject"
                                        type="text"
                                        placeholder="What is your enquiry about?"
                                        required
                                        className="w-full rounded-xl border border-[#17221D]/10 bg-[#FBFCF8] px-5 py-4 text-sm text-[#17221D] outline-none transition-all placeholder:text-[#17221D]/35 focus:border-[#12A66A] focus:ring-4 focus:ring-[#12A66A]/10"
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="mb-2 block text-sm font-bold text-[#17221D]"
                                    >
                                        Your Message <span className="text-[#12A66A]">*</span>
                                    </label>

                                    <textarea
                                        id="message"
                                        name="Message"
                                        rows={5}
                                        placeholder="Tell us how we can help you..."
                                        required
                                        className="w-full resize-none rounded-xl border border-[#17221D]/10 bg-[#FBFCF8] px-5 py-4 text-sm text-[#17221D] outline-none transition-all placeholder:text-[#17221D]/35 focus:border-[#12A66A] focus:ring-4 focus:ring-[#12A66A]/10"
                                    />
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#12A66A] px-7 py-5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#17221D] hover:shadow-xl"
                                >
                                    Submit Enquiry

                                    <ArrowUpRight
                                        size={19}
                                        className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                                    />
                                </button>

                                <p className="text-center text-xs leading-6 text-[#17221D]/45">
                                    Your information will only be used to respond
                                    to your enquiry.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>



            {/* ================= FOOTER ================= */}
            <footer className="bg-[#17221D] text-white">
                <div className="mx-auto max-w-[1200px] px-5 pb-8 pt-16 sm:px-8 sm:pt-20">

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
                    <div className="mt-16 border-t border-white/10 pt-7">
                        <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">

                            {/* Copyright */}
                            <p className="text-xs text-white/40">
                                © 2026 Turago. All rights reserved.
                            </p>

                            {/* Developer credit */}
                            <p className="text-xs text-white/45">
                                Designed & Developed by{" "}
                                <a
                                    href="https://apconsultingservices.net"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-semibold text-[#CFF36B] transition-colors duration-300 hover:text-white"
                                >
                                    AP Consulting Services
                                </a>
                            </p>

                            {/* Back to top */}
                            <a
                                href="#home"
                                className="inline-flex items-center gap-2 text-xs font-semibold text-white/55 transition-colors hover:text-[#CFF36B]"
                            >
                                Back to top
                                <ArrowUpRight size={15} />
                            </a>

                        </div>
                    </div>

                </div>
            </footer>
        </>
    );
}
