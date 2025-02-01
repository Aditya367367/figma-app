import Image from "next/image";
import logo from "@/public/logo.png";
import search from "@/public/search.png"
import explore from "@/public/explore.png"
import Ranking from "@/public/ranking.png"
import contest from "@/public/explore.png"
export function Navbar2()
{
 return(
    <div className="item-center px-5 pt-4 ">
        <div>
                   <Image src={logo} alt="nav"/>
         </div>

         <div className="relative flex item-center ml-[300px]  gap-8">
            <div className="w-[400px] h-[40px] rounded-[20px] border-[2px] ">
            <div className="flex h-full w-full items-center bg-white rounded-[20px]">
            <div className="relative ">
            <Image src={search}  alt=" searchbar "/>
            </div>
            <input type="text" placeholder="serch novel poem and many more"/>
            </div>
            </div>
            <div className="items-center   ">
                <Image src={explore} alt="explore"/>
                <span >Explore</span>
            </div>
            <div className="items-center">
                <Image src={Ranking} alt="Ranking"/>
                <span>Ranking</span>
            </div>
           
            <div className="items-center">
                <Image src={contest} alt="contest"/>
                <span>Contest</span>
            </div>
           
            

           
 
         </div>
 
    </div>

 );

}