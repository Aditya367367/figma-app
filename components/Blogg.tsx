import Image from 'next/image';
import bg from '../public/bg.png';
import trophy3 from '../public/trophy3.png';
import notes from '../public/notes.png';
import reward from '../public/reward.png';
import comp from '../public/comp.png'
import comp1 from '../public/comp1.png'
import checkIcon from '@/public/check-icon.png';
import legal from '@/public/legal.png';

const rewards = [
    { text: "Certificates of Achievement", icon: "/trophy4.png", bgColor: "#FFD700" },
    { text: "Free Subscription to Premium Features", icon: "/premium.png", bgColor: "#FF69B4" },
    { text: "Instant Cash Rewards", icon: "/cash.png", bgColor: "#32CD32" },
    { text: "Feature on Rachayitha", icon: "/feature.png", bgColor: "#1E90FF" },
    { text: "Internship Opportunities at Rachayitha", icon: "/internship.png", bgColor: "#FF4500" },
    { text: "Social Media Promotions", icon: "/social.png", bgColor: "#8A2BE2" },
    { text: "Access to Free Webinars and Writing Workshops", icon: "/webinars.png", bgColor: "#00CED1" },
  ];
  
    const points = [
      "Provide detailed and thoughtful critiques or submissions.",
      "Ensure all content is original, avoiding plagiarism.",
      "Focus on literary works like stories, poems, and shayaris.",
      "Support your work with relevant references and authentic information.",
      "High-quality, well-crafted submissions are more likely to be featured and rewarded."
    ];

export function Blogg() {
  return (
    <div className="flex flex-col items-start px-4 lg:grid lg:grid-cols-2 lg:px-0 lg:container lg:mx-auto">
      {/* Headings Section */}
      <div className="mt-[100px] w-full text-center lg:text-left lg:mt-[150px] lg:pl-[150px]">
        {/* h1 */}
        <h1 className="text-[26px] font-[600] lg:text-[42px] leading-[42px] text-[rgba(47,45,92,1)] lg:pl-0">
          <span className="block">
            Pursue, <span className="text-[rgba(86,36,193,1)]">Your Hobby</span>
          </span>
          <span className="block lg:pl-0 lg:pt-[10px]">Unleash Your Creativity!</span>
        </h1>

          {/* h3 */}
    <h3 className="text-[15px] font-[400] leading-[30px] text-[rgba(0,0,0,1)] mt-[10px] lg:text-[18px] lg:pl-0 lg:inline-block lg:pt-[10px]">
      <span className="inline">Nurture Your Talent, <span className="text-[rgba(86,36,193,1)]"> Share Your Stories,</span> and</span>
      <span className="inline mt-1 lg:ml-2">Inspire Others</span>
    </h3>


        {/* Button */}
        <button className="relative text-center w-[152px] h-[40px] px-[17px] pl-[10px]  lg:mt-[15px] mt-[60px] rounded-[3.6px] border-[0.72px] border-[rgba(86,36,193,1)] bg-[rgba(86,36,193,1)] text-white lg:mt-0">
          Start Writing
        </button>
      </div>

      {/* Image Section */}
<div className="mt-[5px] ml-[20px] lg:mt-0 lg:ml-0 lg:flex  justify-end lg:relative lg:-top-[120px] lg:-left-[65px]">
  <Image src={bg} alt="bg" className="w-[334px] h-[360px] lg:w-[638px] lg:h-[657px] object-contain" />
</div>
<div className="mt-[100px] w-full text-center lg:text-center lg:mt-[40px] lg:pl-[150px] lg:ml-[320px]">
  {/* h3 "How to Win" */}
  <h3 className="text-[15px] font-[600] lg:text-[24px] leading-[42px] text-[rgba(47,45,92,1)] lg:pl-0 font-[Mevan Pro]">
    How to Win
  </h3>

  {/* h1 */}
  <h1 className="text-[26px] font-[600] lg:text-[56px] leading-[42px] text-[rgba(47,45,92,1)] lg:pl-0 flex items-center justify-center font-[Mevan Pro]">
    <span className="block">
      Join the <span className="text-[rgba(86,36,193,1)]">contest</span>
    </span>
    <Image
      src={trophy3}
      alt="trophy3"
      className="inline w-[21px] h-[21.65px] ml-[5px]"
    />
  </h1>

  {/* h3 */}
  <h3 className="text-[15px] font-[400] leading-[24px] lg:leading-[30px] lg:w-[606px] text-[rgba(0,0,0,1)] lg:text-[rgba(102,102,102,1)] mt-[10px] lg:text-[16px] font-[Mevan Pro]">
    The best way is by writing and sharing your creative pieces—stories, poems, or shayaris
    <span className="hidden lg:inline ">—and joining our Literary Ambassador Program.</span>
  </h3>
</div>

 {/* New div for Submit your Work Section */}
 <div>
<div className="mt-[50px] w-full text-left px-[20px] lg:text-left lg:mt-[250px] lg:pl-[50px]">
  <h1 className="text-[20px]  lg:text-[42px] font-[600] text-[rgba(47,45,92,1)]">Submit your<span className='text-[rgba(86,36,193,1)] ml-1'>Work</span> </h1>

  <h3 className="text-[14px] lg:text-[16px] font-[500] text-[rgba(47,45,92,1)] flex items-center mt-1 lg:pl-[60px]">
    <Image src={notes} alt="notes" className="mr-3 lg:w-[37px] lg:h-[37px] "  />
    Write a Story or Poem:
  </h3>
  <h4 className="text-[12px] lg:text-[16px] font-[400] text-[rgba(102,102,102,1)] w-[297px] pl-9 lg:w-[400px] lg:ml-[70px] ">
    Share your creativity with the world! Submit your original works and contribute to the literary community.
  </h4>

  <h3 className="text-[14px] lg:text-[16px] font-[500] text-[rgba(47,45,92,1)]  lg:pl-[60px] flex items-center mt-3">
    <Image src={reward} alt="Reward" className="mr-3 relative top-[4px] lg:w-[37px] lg:h-[37px]" /> {/* Add 'relative' and 'top' to adjust position */}
    Receive your Reward:
  </h3>
  <h4 className="text-[12px] font-[400] lg:text-[16px] text-[rgba(102,102,102,1)] w-[297px] pl-9 lg:w-[400px] lg:ml-[70px]">
    Each published piece will be rewarded with Rs. 50-200 within 14 days. Higher engagement and quality will lead
    to greater rewards!
  </h4>


</div>
<div className="relative mt-5 lg:flex lg:items-left lg:-ml-[700px] lg:-mt-[250px]">
  {/* Background Image (comp1) */}
  <Image 
    src={comp} 
    alt="comp" 
    className="absolute -left-[60px] top-0 w-[348.81px] h-[370px]  lg:w-[690px] lg:h-[720px] lg:-top-[30px]" 
  />

  {/* Foreground Image (comp) */}
  <Image 
    src={comp1} 
    alt="comp1" 
    className="relative w-[352px] h-[371.83px]   lg:w-[544px] lg:h-[432px] lg:top-[90px] object-contain" 
  />
</div>
<div className="w-full px-6 lg:px-12 py-8 bg-white lg:mt-[150px]">
      <h1 className="text-[28px] lg:text-4xl font-bold lg:text-[42px]  lg:ml-[-250px] lg:font-[600]  mt-[100px] text-gray-800 mb-6 px-4 justify-center font-[Mevan Pro]">
        Rules and Guidelines
      </h1>

      {/* Key Points Section */}
      
        <h2 className="text-[16px] font-semibold lg:text-[20px] text-gray-700 mb-4">Key Points</h2>
      <ul className="space-y-4">
        {points.map((point, index) => (
          <li key={index} className="flex items-start text-[12px] lg:text-[20px] font-[400] text-[rgba(102,102,102,1)] font-[inter] ">
            <Image src={checkIcon} alt="Check" width={17} height={17} className="mr-3  lg:w-[28px] lg:h-[28px] sflex-none" />
            {point}
          </li>
        ))}
      </ul>
      <button className="mt-8 px-5 mt-[50px] ml-[80px] lg:ml-[-1px] spy-2 text-[12px] lg:w-[321px] lg:py-3 text-[#5624C1] lg:text-[16px] lg:text-base rounded-[8px] border border-solid border-[#5624C1]">
  Read Terms & Guidelines
</button>




</div>
<div className="relative lg:w-[550px] lg:h-[400px] lg:ml-[-650px] lg:mt-[-440px]">
  <Image 
    src={legal} 
    alt="legal" 
    className="w-full h-full object-cover"
  />
</div>

<div className="w-[297px] lg:w-full lg:ml-[-400px] lg:mt-[100px]">
  <h1 className="font-[Maven Pro] ml-9 text-[24px] lg:text-[28px] lg:font-[500] font-semibold text-[#333333] mt-10 text-center">
    Benefits of Participating in contest:
  </h1>
</div>
<div className="p-4 flex justify-center lg:ml-[-700px]">
  <div className="grid lg:grid-cols-2 gap-4 mx-auto w-full lg:w-[70%]  lg:gap-7 h-auto shadow-[0px_12.52px_15.5px_0px_rgba(47,63,87,0.08)] backdrop-blur-[35.765px]">
    {rewards.map((reward, index) => (
      <div
        key={index}
        className="flex items-center gap-4 p-4 bg-white shadow-md rounded-lg"
        style={{
          width: 'auto',
        }}
      >
        {/* Background div for the icon */}
        <div
          className={`flex items-center justify-center w-[28px] h-[28px] rounded-full`}
          style={{ backgroundColor: reward.bgColor }}
        >
          <Image
            src={reward.icon}
            alt={reward.text}
            width={15.92}
            height={18.94}
            className="top-[11.33px] left-[17.88px] lg:w-[20px] lg:h-[25px]"
          />
        </div>
        <p className="text-[#000000] font-inter font-normal text-[11.92px] lg:ml-3 tracking-[0.0596px] lg:text-[20px] text-center">
          {reward.text}
        </p>
      </div>
    ))}
  </div>
</div>


</div>

    </div>
  );
}
