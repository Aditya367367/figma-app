import Image from "next/image";
import logo from "../public/logo.png"
import mobile from "../public/mobile.png"
import search from "../public/search.png";
import explore from "../public/explore.png";
import ranking from "../public/ranking.png";
import library from "../public/librery.png";
import shorts from "../public/shorts.png";
import create from "../public/create.png";
import arrow from "../public/arrow.png";
import translate from "../public/translate.png";
import profile from "../public/profile.png";


const Navlinks=[
    { src: explore, label: "Explore", width: 21 },
    { src: ranking, label: "Ranking", width: 19 },
    { src: create, label: "Create", width: 20 },
    { src: library, label: "Library", width: 21 },
    { src: shorts, label: "Shorts", width: 20 },
    
]

export function Navbar() {
    return(
        <nav className="flex w-full items-center justify-between px-[20px] py-[25px] lg:container lg:mx-auto lg:px-[50.44] lg:py-[20] shadow-md lg:h-[114.21px] lg:top-[-18.1px]  ">
            <div className="flex items-center">
                <Image src={logo} alt="logo" className="lg:w-[200.1] lg:h-[36.17] lg:top-[56.15] lg:left-[50.44] w-[122] h-[22.61] top-[25] left-[20] "/>

            
            

             {/* Search Bar */}
      
        <div className="pl-[50px] hidden lg:flex">
          <div className="w-[402.58px] h-[44.73px] rounded-[22.37px] border-[1.9px] border-gradient-to-r from-purple-600 to-indigo-500 bg-gradient-to-r p-[1.9px]">
            <div className="flex h-full w-full items-center bg-white rounded-[22.37px]">
              {/* Search Icon */}
              <div className="relative left-[25.69px]">
                <Image src={search} alt="Search" width={19.98} height={19.99} />
              </div>

              {/* Search Input */}
              <input
                type="text"
                placeholder="Search novels, poems and many more"
                className="w-[281px] h-[17px] text-gray-700 placeholder-gray-500 text-[14.28px] font-roboto font-light leading-[16.73px] tracking-[0.09em] focus:outline-none relative left-[34px] bottom-[2px]"
              />
            </div>
          </div>
          </div>
        
        {/* navitems*/ }
        <div className="hidden lg:flex pl-[45px] gap-x-[45px] flex items-center">
            {Navlinks.map((item,index)=> (
                
                <p key={index} className="flex items-center gap-1 hover:scale-105 transition-all">
              <Image src={item.src} alt={item.label} width={item.width} height={20} />
              <span className="text-[16px]  font-roboto">{item.label}</span>
            </p>
            ))}
            

            {/*translate button */}
            <p className=" hover:scale-105 transition-all hidden lg:flex">
            <div className="flex items-center border-[0.95px] rounded-[4.76px] border-[#5624C1] w-[55.68px] h-[36.17px] p-[5.71px]">
              <Image src={translate} alt="Translate" width={24.74} height={24.74} />
           
            <Image src={arrow} alt="Dropdown arrow" />
            </div>
            </p>
            {/*profile*/}
            <p className="hidden lg:flex">
            <Image
              src={profile}
              alt="Profile"
              width={35.21}
              height={35.21}
              className="rounded-full hover:scale-105 transition-all"
            />
            </p>
            </div>

            </div>
            <div className="flex gap-x-5">
             
             <div>
                <Image src={mobile} alt="mobile" className="lg:hidden"/>
            </div>
            </div> 

        </nav>
    )
}