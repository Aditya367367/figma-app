import Image from "next/image";
import background from "../public/background.png";
import trophy from "../public/trophy.png";
import arrow from "../public/arrow.png";
import search from "../public/search.png";
import profile from "../public/profile.png";
import badge from "../public/badge.png";
import views from "../public/views.png";
import likes from "../public/likes.png";
import desktopbg from "../public/desktopbg.png";
export function Hero() {

    const leaderboardData = Array(10).fill({
        name: "Suraj Khandwal",
        location: "Jaipur, Rajasthan",
        badges: 4,
        views: 3450,
        likes: 3450,
      });
  return (
    <div className="relative flex flex-col items-center w-full h-full lg:w-full lg:h-full lg:container lg:mx-auto">
  {/* Mobile Background Image */}
  <Image
    src={background}
    alt="background"
    className="h-[1200px] w-full object-cover lg:hidden" // Visible on mobile only
  />
  
  {/* Desktop Background Image */}
  <Image
    src={desktopbg}
    alt="background"
    className="min-h-[1700px] w-full object-cover hidden  lg:block " // Visible on large devices only
  />


      {/* Gradient Heading */}
      
      <h1
      className="absolute  lg:text-[36px]  lg:left-[140px] text-center top-[50px] font-maven-pro text-[16px] font-bold leading-[25.75px] underline decoration-solid bg-gradient-to-r from-[#DBAEFF] to-[#FFFDFF] text-transparent bg-clip-text  p-[10px]"
    >
      Select Competition to view leadership board
    </h1>
    {/* Competition Card */}
<div className="absolute w-[340px]  top-[110px] lg:w-[742px] lg:h-[56px]  lg:px-5 lg:py-3 lg:left-[170px] bg-white rounded-lg shadow-md px-4 py-2 border-2 border-[#5624C1] flex items-center">
  <p className="text-[#5624C1] font-semibold text-[15px] text-left lg:text-[20px]">
    Novel Writing Competition
  </p>
  <Image src={arrow} alt="arrow" className="ml-auto w-[10px] h-[5px]" />


    
     {/* Subtext */}

     <p className="absolute text-center top-[50px] lg:text-[20px] left-[5px] lg:pt-[6px]  text-[#FFFFFF] text-[10px] font-maven-pro flex  items-center">
        Read | Write | Participate & Compete
      </p>
      

   
    <div className="absolute flex items-center   w-[390px] h-[354px] top-[15px] -left-[25px]  lg:left-[870px] lg:-top-[45px]">
    <Image src={trophy} alt="trophy"  className="lg:w-[699px] lg:h-[500px]" /></div>
    
    <div className="absolute font-medium text-[20px] top-[360px] lg:top-[200px] lg:text-[34px] -left-[4] font-maven-pro bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF] text-transparent bg-clip-text );
"><h1>Engagement Leaderboard</h1></div> 
           {/* Search Bar */}
<div
  className="absolute top-[395px] lg:-top-[50px] -left-[4px] lg:top-[200px]  lg:left-[400px] w-[335px] px-5 py-3 flex items-center bg-white rounded-[3.43px] shadow-[0px_1.72px_3.43px_0px_rgba(0,0,0,0.12)]"
>
  {/* Search Icon */}
  <div className="relative -left-[10px] top-[2px]">
    <Image src={search} alt="Search" width={16} height={16} />
  </div>

  {/* Search Input */}
  <input
    type="text"
    placeholder="Search your rank by writing your book name"
    className="relative text-gray-700 placeholder-[#272937B2] bg-transparent text-[10px] font-inter h-[8px] w-[290px] -left-[2px] top-[2px] outline-none"
  />
</div>
 {/* Leaderboard Frame */}
<div className="absolute top-[455px]  lg:pt-[80px]  lg:-top-[50px] lg:left-[395px]  -left-[6px] w-[335px] lg:top-[210px] flex flex-col items-center gap-3  backdrop-blur-[1.9787395000457764spx] rounded-tl-[5.94px]">
  {leaderboardData.map((item, index) => (
    <div
  key={index}
  className="flex items-center p-2 lg:p-7  lg:w-[1129px] lg:h-[70px]  h-[42.01px] w-full w-[360px] rounded-lg shadow-lg bg-[rgba(0,0,0,0.1)]"
>
      {/* Rank */}
      <div className="flex items-center justify-center bottom-[11px] relative w-[24px] -left-[2px] h-[16px] lg:w-[35px] lg:h-[22px]">
        {/* Crown Image */}
        <Image
          src={index === 0 ? "/crown.png" : "/brown.png"}
          alt="Crown"
          width={40} height={40}
          className="absolute top-[13.3px] left-[9.05px] "
        />
        {/* Rank Number */}
        <span className="text-white font-bold text-[7.92px] lg:text-[11px] lg:left-[21.95px] leading-[13.2px] z-10 absolute lg:top-[18.94px] top-[15.94px] left-[18.95px]">{index + 1}</span>
      </div>

      {/* Profile Image */}
      <div className="ml-4 lg:ml-[50px] w-[31.66px] h-[31.66px]  rounded-full overflow-hidden lg:w-[52px] lg:h-[52px] bg-gray-300 border-[1.48px] border-[#FFFFFF99] shadow-[0px_1.98px_1.98px_0px_#0000001F]">
        <Image src={profile} alt="Profile" width={30} height={31} className="lg:w-[52px] lg:h-[52px]"/>
      </div>

      {/* User Info */}
      <div className="ml-4 flex-1">
  <p className="text-white font-semibold text-[7.91px] lg:text-[15px] leading-[11.87px]">
    {item.name}
  </p>
  <p className="text-gray-200 text-[6.93px] lg:pt-2 font-normal lg:text-[13px] lg:text-[rgba(255, 255, 255, 0.7)] leading-[11.89px]">
    {item.location}
  </p>
</div>


      {/* Badges */}
      <div className="flex space-x-1 lg:space-x-3">
        {/* Badge */}
        <div className="flex items-center px-2 py-1 bg-[#0000001F] backdrop-blur-[9.893696784973145px] rounded-[14.84px] lg:w-[70px] lg:h-[35px]">
          <Image src={badge} alt="Badge" width={13.85} height={13.85} className="top-[13.85px] left-[173.44px] lg:w-[20px] lg:h-[20px]" />
          <span className="ml-1 lg:ml-3 text-white text-xs font-normal lg:text-[15px]">{item.badges}</span>
        </div>

        {/* Views */}
        <div className="flex items-center px-2 py-1 bg-[#0000001F] backdrop-blur-[9.893696784973145px] lg:w-[110px] lg:h-[35px] rounded-[14.84px]">
          <Image src={views} alt="Views" width={11.38} height={11.38} className="top-[15.58px] left-[214.5px] lg:w-[20px] lg:h-[20px]" />
          <span className="ml-1 lg:ml-3 text-white text-xs font-normal lg:text-[15px]">{item.views}</span>
        </div>

        {/* Likes */}
        <div className="flex items-center px-2 py-1 bg-[#0000001F] backdrop-blur-[9.893696784973145px] lg:w-[110px] lg:h-[35px] rounded-[14.84px]">
          <Image src={likes} alt="Likes" width={12.37} height={12.37} className="top-[14.84px] left-[276.83px] lg:w-[21px] lg:h-[21px]" />
          <span className="ml-1 lg:ml-3 text-white text-xs font-normalss lg:text-[15px]">{item.likes}</span>
        </div>
      </div>
    </div>
  ))}

<div
  className="absolute  lg:left-[40px] flex items-center w-[204px] h-[40px] lg:w-[290px] lg:top-[1050px] lg:h-[50px] top-[560px] left-[75px] px-[17.29px] py-[10.09px] gap-[7.21px] rounded-[3.6px] border-[0.72px] border-solid border-[#5624C1] bg-[#5624C1]"
>
  <button
    className="w-[166px] h-[14px] text-[16px]  lg:w-full font-[500]   font-maven-pro leading-[14px] text-center underline decoration-transparent underline-offset-[from-font] text-white "
  >
    View Full Leaderboard
  </button>
</div>

</div>

    
    <div className="absolute -left-[340px] hidden lg:flex"
  style={{
    width: "657px",
    height: "657px",
    
    background:
      "radial-gradient(50% 50% at 50% 50%, rgba(173, 137, 250, 0.4) 0%, rgba(173, 137, 250, 0) 100%)",
  }}
></div>
<div className="absolute left-[780px] hidden lg:flex top-[730px]"
  style={{
    width: "657px",
    height: "657px",
    
    background:
     "radial-gradient(50% 50% at 50% 50%, rgba(86, 36, 193, 0.6) 0%, rgba(86, 36, 193, 0) 100%)",
  }}
></div>

</div>
    

    </div>
   

    
  );
}
