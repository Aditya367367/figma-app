import React from "react";
import Image from "next/image";
import brand from "../public/brand.png";
import brand2 from "../public/brand2.png";
import arrowd from "../public/arrowd.png";

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
{/*ssigned Domains
        figma-design-black.vercel.app
        figma-design-adityas-projects-72473e42.vercel.app
        figma-design-aditya367365-adityas-projects-72473e42.vercel.app*/}
     
     export function Footer() {
        return(
            <footer className="bg-transparent text-black lg:mt-[150px] lg:bg-[#F6F3FF] ">
                <div className="container mx-auto px-4 lg:pl-[150px] lg:container lg:mx-aut">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 text-center lg:text-left relative">
                        {/* Discover Section */}
                        <div>
                            <h3 className="font-semibold text-lg lg:text-[22px]">Discover <Image src={arrowd} alt="arrowd" className="lg:hidden ml-[220px] mt-[-13px] flex"/></h3>
                            <ul className="space-y-2 hidden lg:block lg:mt-4 lg:text-[15px]">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Novels</a></li>
                                <li><a href="#">Authors</a></li>
                                <li><a href="#">Subjects</a></li>
                                <li><a href="#">Collections</a></li>
                                <li><a href="#">Advanced Search</a></li>
                                <li><a href="#">Return to Top</a></li>
                            </ul>
                        </div>
                        
                        {/* Resources Section */}
                        <div>
                            <h3 className="font-semibold text-lg lg:text-[22px]">Resources <Image src={arrowd} alt="arrowd" className="lg:hidden ml-[240px] mt-[-13px]"/></h3>
                            <ul className="space-y-2 hidden lg:block lg:mt-4 lg:text-[15px]">
                                <li><a href="#">Tags</a></li>
                                <li><a href="#">Download Apps</a></li>
                                <li><a href="#">Be an Author</a></li>
                                <li><a href="#">Help Center</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms of Service</a></li>
                                <li><a href="#">Keywords</a></li>
                            </ul>
                        </div>
    
                        {/* Help Section */}
                        <div>
                            <h3 className="font-semibold text-lg lg:text-[22px]">Help <Image src={arrowd} alt="arrowd" className="lg:hidden ml-[220px] mt-[-13px]"/></h3>
                            <ul className="space-y-2 hidden lg:block lg:mt-4 lg:text-[15px]">
                                <li><a href="#">Support Us</a></li>
                                <li><a href="#">Help Center</a></li>
                                <li><a href="#">Report a Problem</a></li>
                                <li><a href="#">Suggesting Edits</a></li>
                            </ul>
                        </div>
    
                        {/* Language Selection */}
                        <div>
                            <h3 className="font-semibold text-lg lg:text-[22px]">Change Website Language <Image src={arrowd} alt="arrowd" className="lg:hidden ml-[290px] mt-[-13px]"/></h3>
                            <ul className="space-y-2 hidden lg:block lg:mt-4 lg:text-[15px]">
                                <li>English</li>
                                <li>Hindi</li>
                            </ul>
                        </div>
    
                        {/* Social Media Section */}
                        <div>
                            <h3 className="font-semibold text-lg lg:text-[22px]">Follow Us</h3>
                            <div className="flex justify-center lg:justify-start space-x-4 mt-2">
                                <FaFacebook size={24} className="text-purple-700" />
                                <FaInstagram size={24} className="text-purple-700" />
                                <FaTwitter size={24} className="text-purple-700" />
                            </div>
                        </div>
                    </div>
    
                    {/* Bottom Branding */}
                    <div className="w-[400px] h-[57px] mt-[50px] ml-auto flex items-center justify-center bg-[#673CCB] lg:hidden">
                        <Image src={brand} alt="brand"/>
                    </div>
    
                    {/* Desktop Branding */}
                    <div className="w-[400px] h-[57px] mt-[-50px] ml-auto lg:ml-[850px] flex items-center justify-end hidden lg:flex">
                        <Image src={brand2} alt="brand2"/>
                    </div>
                </div>
            </footer>
        );
    }
    