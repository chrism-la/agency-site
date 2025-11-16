import './App.css';
import { FaAddressBook, FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};
const portfolioFadeUp = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
};

function App() {
    return (
        <>
            {/* Background image with muted overlay */}
            <div
                className="absolute inset-0 -z-20"
                style={{
                    backgroundImage: "url('/Photos/Background.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'grayscale(100%) brightness(50%)',
                }}
            ></div>

            <div className="font-sans relative min-h-screen">
                {/* NAV */}
                <nav className="px-6 md:px-20 lg:px-32 py-6 flex justify-between items-center relative z-10">
                    <h1 className="text-2xl font-extrabold tracking-wide text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>
                        VisionCraft
                    </h1>
                    <div className="hidden md:flex space-x-6">
                        <button className="text-neutral-300 hover:text-blue-600 transition">Resources</button>
                        <button className="text-neutral-300 hover:text-blue-600 transition">Products</button>
                        <button className="text-neutral-300 hover:text-blue-600 transition">Brand Campaigns</button>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <button className="p-2 rounded-full bg-white text-slate-800 hover:bg-blue-600 hover:text-white transition">
                                <FaAddressBook />
                            </button>
                            <span className="text-white font-semibold">Contact</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <button className="p-2 rounded-full bg-white text-slate-800 hover:bg-blue-600 hover:text-white transition">
                                <FaUser />
                            </button>
                            <span className="text-white font-semibold">Login</span>
                        </div>
                    </div>
                </nav>

                {/* HERO - full-width video */}
                <motion.section
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    transition={{ duration: 0.6 }}
                    className="relative text-center overflow-hidden h-[80vh] flex flex-col justify-center items-center"
                >
                    <video className="absolute top-0 left-0 w-screen h-full object-cover -z-20" autoPlay loop muted playsInline>
                        <source src="Videos/BoxerVisionCraft6Video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="absolute top-0 left-0 w-full h-full bg-black/50 -z-10"></div>

                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 text-white relative z-10">
                        <span className="text-blue-600">Creative</span> Agency for Brands &<br /> Athletes
                    </h1>
                    <p className="text-neutral-200 max-w-xl mx-auto mb-8 relative z-10">We create high-impact visuals, commercials, photo campaigns & event coverage for modern brands.</p>
                    <button className="px-6 py-3 bg-blue-600 rounded-full text-sm font-medium hover:bg-blue-500 transition relative z-10">View Work</button>
                </motion.section>

                {/* SERVICES */}
                <section className="px-6 md:px-20 lg:px-32 py-20 relative z-10">
                    <motion.h2 initial="hidden" whileInView="visible" variants={fadeUp} className="text-3xl font-bold mb-10 text-center">
                        Services
                    </motion.h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: 'Photography', desc: 'High-quality lifestyle, product & event shots.' },
                            { title: 'Videography', desc: 'Cinematic commercials & social video content.' },
                            { title: 'Brand Campaigns', desc: 'Complete visuals for brands & athletes.' },
                        ].map((service, i) => (
                            <motion.div
                                key={i}
                                initial="hidden"
                                whileInView="visible"
                                variants={fadeUp}
                                transition={{ delay: i * 0.15 }}
                                className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 hover:border-slate-800 transition"
                            >
                                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                                <p className="text-neutral-400">{service.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>
                {/* PORTFOLIO */}
                <section className="w-full relative flex flex-col gap-6">
                    {/* Top row: Image + Video with slower slide-in */}
                    <motion.div className="w-full h-[60vh] flex">
                        <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.2 }} className="relative w-1/2 h-full overflow-hidden ">
                            <img src="Photos/Portfolio1.jpg" alt="Portfolio 1" className="w-full h-full object-cover " />
                            <span className="absolute bottom-4 left-4 text-white font-bold text-xl bg-black/40 px-3 py-1 rounded">Photography</span>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.2 }} className="relative w-1/2 h-full overflow-hidden ">
                            <video className="w-full h-full object-cover " autoPlay loop muted playsInline>
                                <source src="Videos/portfolioVideo.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <span className="absolute bottom-4 left-4 text-white font-bold text-xl bg-black/40 px-3 py-1 rounded">Videography</span>
                        </motion.div>
                    </motion.div>

                    {/* Bottom row: Three images with staggered fade-up */}
                    <div className="flex flex-col md:flex-row gap-6 px-6 md:px-20 lg:px-32 mt-10">
                        {[
                            { src: 'Photos/Portfolio2.jpg', label: 'Brand Campaigns' },
                            { src: 'Photos/Portfolio3.jpg', label: 'Events' },
                            { src: 'Photos/Portfolio4.jpg', label: 'Products' },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial="hidden"
                                whileInView="visible"
                                variants={portfolioFadeUp}
                                transition={{ delay: i * 0.15, duration: 0.6 }}
                                className="relative w-full md:w-1/3 h-64 md:h-80 overflow-hidden hover:scale-105 transition duration-500 rounded-xl"
                            >
                                <img src={item.src} alt={item.label} className="w-full h-full object-cover rounded-xl" />
                                <span className="absolute bottom-4 left-4 text-white font-bold text-lg">{item.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* ABOUT */}
                <motion.section initial="hidden" whileInView="visible" className="py-16 flex flex-col md:flex-row items-center gap-10 md:gap-16 px-6 md:px-20 lg:px-32">
                    <motion.div initial={{ opacity: 0, x: -50, scale: 0.95 }} whileInView={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.6 }} className="md:w-1/2">
                        <img src="Photos/about.jpg" alt="About Us" className="w-full h-64 md:h-72 rounded-xl shadow-lg object-cover" />
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 50, scale: 0.95 }} whileInView={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.6 }} className="md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl font-bold mb-4">About Us</h2>
                        <p className="text-neutral-400 leading-relaxed">
                            We’re a creative team specializing in visual storytelling. Our work blends cinematic style with modern brand identity — crafted for athletes, creators, startups, and global
                            brands. Every project is designed to look clean, bold, and unforgettable.
                        </p>
                    </motion.div>
                </motion.section>

                {/* CONTACT / LET'S WORK */}
                <section className="py-20 relative z-10 px-6 md:px-20 lg:px-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="max-w-xl mx-auto backdrop-blur-xl bg-white/5 px-10 py-14 rounded-2xl border border-white/10 shadow-lg text-center"
                    >
                        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-4xl font-bold mb-6">
                            Let's Work Together
                        </motion.h2>

                        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-neutral-300 mb-10">
                            Have a project in mind? We'd love to hear from you.
                        </motion.p>

                        <a
                            href="mailto:youremail@example.com"
                            className="px-6 py-3 bg-blue-600 rounded-full text-sm font-medium shadow-[0_0_10px_rgba(99,102,241,0.6)] hover:shadow-[0_0_20px_rgba(99,102,241,0.8)] transition-all"
                        >
                            Contact Us
                        </a>
                    </motion.div>
                </section>

                <footer className="text-neutral-600 text-center py-10 text-sm relative z-10">© 2025 VisionCraft Agency. All rights reserved.</footer>
            </div>
        </>
    );
}

export default App;
