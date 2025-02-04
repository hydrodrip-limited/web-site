import {ElementType, useState} from "react";
import {Button} from "../components/Button";
import {
    ArrowRightIcon,
    ArrowUpRightIcon,
    Bars3Icon,
    ChartBarIcon,
    GlobeAltIcon,
    UsersIcon,
    XMarkIcon
} from "@heroicons/react/24/outline";
import {motion} from "framer-motion";
import HLogo from "../assets/HLogo";
import LinkedIn from "../assets/LinkedIn";
import Facebook from "../assets/Facebook";
import Twitter from "../assets/Twitter";
import {gsap} from "gsap";
import Logo from "../assets/Logo";
import {Link} from "react-router-dom";

interface Feature {
    icon: ElementType;
    title: string;
    description: string;
}

const features: Feature[] = [
    {
        icon: ChartBarIcon,
        title: "Smart Meters",
        description: "Real-time water consumption monitoring with precision accuracy"
    },
    {
        icon: ChartBarIcon,
        title: "Analytics",
        description: "Advanced data analysis for optimization and leak detection"
    },
    {
        icon: UsersIcon,
        title: "Community Impact",
        description: "Empowering communities with accessible water management"
    },
    {
        icon: GlobeAltIcon,
        title: "Sustainability",
        description: "Promoting water conservation and environmental responsibility"
    }
];
function App() {

    const [isOpen, setIsOpen] = useState(false);

    const openMenu = () => {
        setIsOpen(true);
        gsap.fromTo(
            ".mobile-menu",
            {y: "-100%", opacity: 0},
            {y: "0%", opacity: 1, duration: 0.5, ease: "power4.out"}
        );
        gsap.fromTo(
            ".menu-item",
            {opacity: 0, y: -20},
            {opacity: 1, y: 0, duration: 0.3, stagger: 0.1}
        );
    };

    const closeMenu = () => {
        const tl = gsap.timeline();
        tl.to(".menu-item", {
            opacity: 0,
            y: -20,
            duration: 0.3,
            stagger: 0.1,
        });
        tl.to(".mobile-menu", {
            y: "-100%",
            opacity: 0,
            duration: 0.5,
            ease: "power4.in",
            onComplete: () => setIsOpen(false),
        });
    };
    return (
        <div>
            {/* first Section */}

            <div className="h-screen w-screen pt-5 px-7 lg:px-20 bg-gradient-to-r from-primary-400 to-primary-200">
                <div className="h-screen w-full flex flex-col max-w-screen-xl m-auto">
                    <header className="flex items-center justify-between">
                          <span className="text-secondary-900">
                              <Logo width={99} height={64.31}/>
                          </span>

                        <nav className="w-auto z-50">
                            <div className="">
                                <button
                                    className="lg:hidden focus:outline-none"
                                    onClick={openMenu}
                                    aria-label="Open Menu"
                                >
                                    <Bars3Icon className="w-8 h-8 text-black"/>
                                </button>
                                <ul className="hidden lg:flex space-x-6 text-secondary-900 font-bold text-sm">
                                    <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
                                    <li><Link to="/products" className="hover:text-blue-600">Our Products</Link>
                                    </li>
                                    <li><Link to="/projects" className="hover:text-blue-600">Our Projects</Link>
                                    </li>
                                    <li><Link to="/abouts" className="hover:text-blue-600">About Us</Link></li>
                                </ul>
                            </div>

                            {/* Mobile Menu */}
                            {isOpen && (
                                <div
                                    className="mobile-menu lg:hidden bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 fixed top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center z-50">

                                    <div className="flex justify-between absolute top-5 right-7 left-7">
                                  <span className="text-white">
                                      <Logo width={99} height={64.31}/>
                                  </span>
                                        {/* Close Button */}
                                        <button
                                            className="text-white focus:outline-none"
                                            onClick={closeMenu}
                                            aria-label="Close Menu"
                                        >
                                            <XMarkIcon className="w-8 h-8"/>
                                        </button>
                                    </div>
                                    {/* Menu Items */}
                                    <ul>
                                        <li className="menu-item my-4 text-xl">
                                            <Link to="/" onClick={closeMenu}>Home</Link>
                                        </li>
                                        <li className="menu-item my-4 text-xl">
                                            <Link to="/products" onClick={closeMenu}>Our Products</Link>
                                        </li>
                                        <li className="menu-item my-4 text-xl">
                                            <Link to="/projects" onClick={closeMenu}>Our Projects</Link>
                                        </li>
                                        <li className="menu-item my-4 text-xl">
                                            <Link to="/abouts" onClick={closeMenu}>About Us</Link>
                                        </li>
                                    </ul>
                                    <p className="text-sm text-center absolute bottom-7 right-6 left-7">Copyright ©
                                        2025
                                        HydroDrip</p>
                                </div>
                            )}
                        </nav>
                        <Button variant="secondary" className="hidden lg:flex" outline>Contact Us <ArrowUpRightIcon
                            className="w-5 h-5"/></Button>
                    </header>
                    <div className="flex-grow flex items-center">
                        <div className="max-w-2xl flex flex-col gap-12">
                            <h1 className="font-bold text-4xl lg:text-6xl">
                                Smart Water Solutions for a Sustainable Future
                            </h1>
                            <p className="text-secondary-900 text-sm lg:block">
                                Our goal is to empower communities globally by implementing sustainable water
                                management
                                solutions, fostering water equity, and promoting responsible stewardship to preserve
                                this
                                vital resource for all. We are committed to creating a future where water scarcity is
                                addressed through innovation, and every drop is managed with care and responsibility.
                            </p>
                            <div>
                                <Button variant="secondary" size='xl'>Our Products <ArrowRightIcon
                                    className="w-5 h-5"/></Button>
                            </div>
                        </div>
                        <img src="/banner-img.svg" className="hidden lg:block" alt="banner" width={582}
                             height={593}/>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="w-screen px-7 lg:px-20 py-20 bg-white border-t border-seconday-900">
                <section className="max-w-screen-xl m-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-6">Innovative Water Management</h2>
                        <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
                            Our integrated solutions combine smart meters, real-time monitoring, and advanced analytics
                            to
                            transform water management.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{opacity: 0, y: 20}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{duration: 0.5, delay: index * 0.1}}
                                    className="glass-effect rounded-2xl p-6 hover:scale-105 transition-transform flex flex-col items-center md:items-start text-center md:text-left"
                                >
                                    <div
                                        className="w-16 h-16 rounded-full bg-gradient-to-r from-[#0EA5E9] to-[#059669] flex items-center justify-center mb-4">
                                        <Icon className="w-8 h-8 text-white"/>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                    <p className="text-gray-300">{feature.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </section>
            </div>

            {/* About Section */}
            <div className="w-screen px-7 lg:px-20 py-20 border-t border-seconday-900">
                <section className="flex gap-16 lg:gap-20 flex-col max-w-screen-xl m-auto">
                    <div className="text-center mx-auto ">
                        <h2 className="text-4xl md:text-5xl font-bold ">About Us</h2>
                    </div>

                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:h-screen">

                        <div className="bg-secondary-900 text-white p-8 flex justify-center items-center">
                            <div
                                className="flex flex-col lg:max-w-md bg-secondary-900 text-white justify-center">
                                <h2 className="text-2xl font-bold mb-4">OUR MISSION</h2>
                                <p>
                                    At HydroDrip, our mission is to harness innovative technology to drive the
                                    conservation
                                    and
                                    efficient management of water—one of the planet&#39;s most precious and limited
                                    resources.
                                </p>
                                <p className="mt-4">
                                    By
                                    integrating cutting-edge solutions into everyday water management systems, we aim to
                                    optimize water usage and ensure its sustainability for both present and future
                                    generations.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center justify-center p-8 bg-white">

                            <img
                                src="/cible_new.jpg"
                                alt="Water Meter"
                                width={400}
                                height={300}
                                className="rounded-lg"
                            />

                        </div>


                        <div className="md:flex items-center justify-center bg-white hidden">
                            <img
                                src="/meter.jpg"
                                alt="Water Meter"
                                width={400}
                                height={300}
                                className="rounded-lg"
                            />
                        </div>
                        <div className="flex flex-col bg-primary-400 text-white p-8 items-center justify-center">
                            <div className="flex flex-col lg:max-w-md">
                                <h2 className="text-2xl font-bold mb-4">OUR VISION</h2>
                                <p>
                                    HydroDrip envisions a world where equitable access to clean, safe water is a
                                    fundamental
                                    right for every individual.
                                </p>
                            </div>
                        </div>

                        <div className="flex md:hidden items-center p-8 justify-center bg-white">
                            <img
                                src="/meter.jpg"
                                alt="Water Meter"
                                width={400}
                                height={300}
                                className="rounded-lg"
                            />
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <Button className="bg-primary-700 hover:bg-primary-900" variant="secondary" size='xl'>
                            About Us
                            <ArrowRightIcon className="w-5 h-5 ml-2"/>
                        </Button>
                    </div>

                </section>
            </div>

            {/* Partners Section */}
            <div className="w-screen px-7 lg:px-20 py-20 bg-white border-t border-seconday-900">
                <section className="max-w-screen-xl m-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Partners</h2>
                        <p className="text-zinc-400">
                            At Hydrodrip, we firmly believe that success is the result of collective effort. Our
                            partners
                            play a vital role in our mission to deliver innovative and sustainable water management
                            solutions.
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-8 max-w-2xl mx-auto justify-center items-center">
                        <div className="p-3 rounded-lg">
                            <img
                                src="/B4T.svg"
                                alt="HR Wallingford"
                                width={100}
                                height={100}
                                className="mx-auto"
                            />
                        </div>
                        <div className="p-3 rounded-lg">
                            <img
                                src="/hrwallingford.svg"
                                alt="B4T"
                                width={200}
                                height={100}
                                className="mx-auto"
                            />
                        </div>
                    </div>
                </section>
            </div>

            {/* Newsletter Section */}
            <div className="w-screen px-7 lg:px-20 py-20 bg-primary-400 border-t border-seconday-900">
                <section className="max-w-screen-xl m-auto">
                    <div className="text-center max-w-3xl mx-auto">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-2.5">Sign up for our newsletter</h2>
                            <p className="text-zinc-800 mb-8">Stay in the loop with everything you need to know.</p>
                        </div>
                        <div className="flex flex-col gap-1.5 justify-center items-center">
                            <img
                                src="/newsletter.svg"
                                alt="HR Wallingford"
                                width={466}
                                height={313}
                                className="mx-auto mb-4"
                            />
                            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full md:w-96 px-6 py-3 rounded-xl border border-white/20 focus:outline-none focus:border-blue-500"
                                />
                                <Button size="xl" variant="secondary">Notify me</Button>
                            </div>
                        </div>
                        <p className="text-sm text-secondary-900 mt-4">
                            We care about your data in our{" "}
                            <Link to="#" className="text-white hover:underline">
                                privacy policy
                            </Link>
                        </p>
                    </div>
                </section>
            </div>

            {/* Contact Section */}
            <div className="w-screen px-7 lg:px-20 py-20 bg-white border-t border-seconday-900">
                <section className="max-w-screen-xl m-auto">
                    <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold">Let&#39;s stay connected</h2>
                        <p className="text-zinc-400 text-base md:text-lg">
                            It&#39;s never been easier to get in touch with HydroDrip. Call us, use our live chat widget
                            or
                            email and we&#39;ll get back to you as soon as possible!
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
                        <div className="text-center space-y-4">
                            <div
                                className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white"
                                     viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" strokeWidth="2">
                                    <path
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-secondary-800">Email</h3>
                            <p className="text-primary-500">admin@hydrodrip.ai</p>
                        </div>

                        <div className="text-center space-y-4">
                            <div
                                className="w-14 h-14 bg-primary-500 rounded-full flex items-center justify-center mx-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white"
                                     viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" strokeWidth="2">
                                    <path
                                        d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-secondary-800">Phone</h3>
                            <p className="text-primary-500">+27 76 527 7582</p>
                        </div>

                        <div className="text-center space-y-4">
                            <div
                                className="w-14 h-14 bg-primary-500 rounded-full flex items-center justify-center mx-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white"
                                     viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" strokeWidth="2">
                                    <path
                                        d="M17 2H7a5 5 0 00-5 5v10a5 5 0 005 5h10a5 5 0 005-5V7a5 5 0 00-5-5zM12 17a5 5 0 110-10 5 5 0 010 10z"/>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-secondary-800">Socials</h3>
                            <div className="flex justify-center space-x-4 text-primary-500">
                                <Link to="#">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path
                                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                                    </svg>
                                </Link>
                                <Link to="#">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path
                                            d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                                    </svg>
                                </Link>
                                <Link to="#">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path
                                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Footer Section */}
            <div className="w-screen px-7 lg:px-20 py-12 md:pt-16 bg-primary-400 border-t border-seconday-900">
                <footer className="text-white max-w-screen-xl m-auto">
                    <div className="flex flex-col gap-5 md:flex-row justify-between lg:items-center">

                        <div className="flex justify-center">
                            <HLogo className="h-24 w-24 md:h-20 md:w-20"/>
                        </div>

                        <nav className="flex flex-col gap-5 md:flex-row lg:space-x-8 md:items-center">
                            <Link to="/">Home</Link>
                            <Link to="/products">Our Products</Link>
                            <Link to="/projects">Our Projects</Link>
                            <Link to="/abouts">About us</Link>
                        </nav>

                        <div className="flex space-x-4 items-center">
                            <Link to="https://www.linkedin.com/company/hydrodrip/posts/">
                                <LinkedIn/>
                            </Link>
                            <Link to="https://www.facebook.com/hydrodripSA">
                                <Facebook/>
                            </Link>
                            <Link to="https://twitter.com/drip_hydro">
                                <Twitter/>
                            </Link>
                        </div>
                    </div>

                    <div
                        className="flex flex-col md:flex-row gap-6 md:justify-between items-center mt-8 pt-8 border-t border-white">
                        <p className="text-sm">Copyright © 2025 HydroDrip</p>
                        <Link to="#" className="text-sm font-semibold">
                            Privacy Policy
                        </Link>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default App
