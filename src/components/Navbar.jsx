'use client'
import { useEffect, useState } from 'react'
import { BiSolidOffer } from "react-icons/bi";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import {
    Dialog,
    DialogPanel,
    PopoverGroup,
} from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [location, setLocation] = useState('Fetching...')
    const [scrollPercentage, setScrollPercentage] = useState(0)

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords
                    setLocation('Mumbai')
                },
                () => {
                    setLocation('Unable to retrieve location')
                }
            )
        } else {
            setLocation('Geolocation not supported')
        }

        // Scroll event listener
        const handleScroll = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollTop = window.scrollY;
            const scrollPercent = (scrollTop / scrollHeight) * 100;
            setScrollPercentage(scrollPercent);
        }

        // Listen to the scroll event
        window.addEventListener('scroll', handleScroll);
        
        // Clean up on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <header className="fixed top-0 left-0 right-0 bg-white shadow-xl z-50">
            <nav className="mx-auto flex max-w-6xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex items-center">
                    <a href="#" className="-m-1 p-1.5">
                        <img
                            alt="Logo"
                            src="https://play-lh.googleusercontent.com/ymXDmYihTOzgPDddKSvZRKzXkboAapBF2yoFIeQBaWSAJmC9IUpSPKgvfaAgS5yFxQ"
                            className="h-10 w-auto rounded-xl"
                        />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <PopoverGroup className="hidden lg:flex lg:gap-x-12 items-center">
                    {/* Current Location Display */}
                    <div className="flex p-3 items-center gap-x-2 text-sm font-semibold text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 .552-.448 1-1 1s-1-.448-1-1 .448-1 1-1 1 .448 1 1z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22s8-4.5 8-10a8 8 0 10-16 0c0 5.5 8 10 8 10z" />
                        </svg>
                        <span>Current Location: <strong>{location}</strong></span>
                    </div>

                    {/* Icons with Text */}
                    <div className="flex items-center gap-x-2">
                        <a href="#" className="flex items-center text-sm font-semibold text-gray-900">
                            <BiSolidOffer className="h-5 w-5 text-gray-600" />
                            <span>Offers</span>
                        </a>
                        <a href="#" className="flex items-center text-sm font-semibold text-gray-900">
                            <LiaHandsHelpingSolid className="h-5 w-5 text-gray-600" />
                            <span>Help</span>
                        </a>
                    </div>
                </PopoverGroup>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="#" className="text-sm font-semibold text-gray-900">
                        Log in <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </nav>

            {/* Scroll loader */}
            <div
                className="fixed top-0 left-0 h-1 bg-[#FC8019] z-50"
                style={{
                    width: `${scrollPercentage}%`,
                    transition: 'width 0.1s ease-out',
                }}
            />

            {/* Mobile menu */}
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <img
                                alt="Logo"
                                src="https://play-lh.googleusercontent.com/ymXDmYihTOzgPDddKSvZRKzXkboAapBF2yoFIeQBaWSAJmC9IUpSPKgvfaAgS5yFxQ"
                                className="h-8 w-auto"
                            />
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-12">
                                <div className="text-base font-semibold text-gray-900">
                                    Current Location: <span className="text-gray-600">{location}</span>
                                </div>
                                <a href="#" className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">
                                    Offers
                                </a>
                                <a href="#" className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">
                                    Help
                                </a>
                            </div>
                            <div className="py-6">
                                <a href="#" className="block rounded-lg px-3 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-50">
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}

export default Navbar;
