import Image from 'next/image';


export function Body() {

  const books = [
    {
      image: '/magnus.png', // Replace with actual image path
      genre: 'Fantasy',
      title: 'Supreme Magus',
      author: 'Tarun',
      likes: 430,
      comments: 44,
      date: 'Aug 14, 2024',
      time: '09:20 AM',
    },
    {
      image: '/magnus2.png',
      genre: 'Fantasy',
      title: 'Supreme Magus',
      author: 'Tarun',
      likes: 430,
      comments: 44,
      date: 'Aug 14, 2024',
      time: '09:20 AM',
    },
    {
      image: '/magnus3.png',
      genre: 'Fantasy',
      title: 'Supreme Magus',
      author: 'Tarun',
      likes: 430,
      comments: 44,
      date: 'Aug 14, 2024',
      time: '09:20 AM',
    },
    
  ];

  const bookss = [
    {
      image: '/magnus4.png',
      genre: 'Fantasy',
      title: 'Supreme Magus',
      author: 'Tarun',
      likes: 430,
      comments: 44,
      date: 'Aug 14, 2024',
      time: '09:20 AM',
    },
    {
      image: '/magnus5.png',
      genre: 'Fantasy',
      title: 'Supreme Magus',
      author: 'Tarun',
      likes: 430,
      comments: 44,
      date: 'Aug 14, 2024',
      time: '09:20 AM',
    },
    {
      image: '/magnus6.png',
      genre: 'Fantasy',
      title: 'Supreme Magus',
      author: 'Tarun',
      likes: 430,
      comments: 44,
      date: 'Aug 14, 2024',
      time: '09:20 AM',
    },



  ]

  return (
    <div className="items-center lg:container lg:mx-auto">
    <div>
    <h1 className="top-[15px] relative lg:left-[-480px]  lg:text-[40px] left-[0] gap-0 font-maven-pro text-[28px] font-semibold leading-[47.61px] text-center decoration-skip-ink-none text-[rgba(47,45,92,1)]">
  Recent Entries
</h1>


    </div>
    <div className="items-center flex justify-between px-3 lg:pl-[150px] lg:pr-[230px] lg:pt-5">
    <p className="text-center text-[16px] lg:text-[22px] font-Roboto font-semibold leading-[47.61px] decoration-skip-ink-none text-[#2F2D5C] ">
  Stories
</p>
<p className="text-center text-[16px] lg:text-[22px] font-Roboto underline decoration-skip-ink-none text-[#673CCB]">
  View All
</p>


    </div>
    
     {/* Book Cards layout Section */}
<div className="mt-6 flex flex-col lg:grid  lg:grid-cols-3  items-center space-y-6 lg:pl-[150px] lg:pr-[150px] lg:justify-center  ">
  {books.map((book, index) => (
    <div
      key={index}
      className="flex flex-col relative lg:-top-[35px] border rounded-lg p-4 w-[335px] h-[248.28px] gap-0 border-[1.83px] border-purple-300 shadow-md transition hover:shadow-lg"
    >
      <div
        className="relative w-[142.4px] h-[211.75px] rounded-tl-[3.16px] bg-white shadow-md"
        style={{
          boxShadow:
            "0.53px 6.33px 15.82px -5.27px rgba(0, 0, 0, 0.2), -2.11px 3.16px 10.55px 0px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Image
          src={book.image || "Cover Image/Authority"}
          alt={book.title}
          width={142.4}
          height={211.75}
          className="object-cover rounded-[3.16px]"
          priority
        />
      </div>
      <div
  className="bg-purple-600 absolute top-[5px] left-[180px] text-white text-center text-[11.27px] font-semibold px-2 py-1 rounded-[12.07px] mt-3 w-[70.32px] h-[19.61px] flex items-center justify-center"
>
  {book.genre}
</div>
      <h2
        className="mt-2 text-[16.43px] font-semibold absolute top-[40px] left-[180px] leading-[19.95px]  text-black w-[128px] h-[20px]"
        style={{ fontFamily: "Maven Pro" }}
      >
        {book.title}
      </h2>
      <p
        className="text-[14.6px] font-normal absolute top-[80px] left-[180px] leading-[17.73px]  w-[58px] h-[18px]"
        style={{ fontFamily: "Maven Pro", color: "rgba(86, 36, 193, 1)" }}
      >
        by {book.author}
      </p>
      <div className="flex items-center justify-between  mt-4">
        <div
          className="flex items-center space-x-2 text-purple-600 text-[15.06px] absolute top-[100px] left-[180px] font-medium leading-[18.28px]"
          style={{
            fontFamily: "Maven Pro",
            color: "rgba(86, 36, 193, 1)",
          }}
        >
          
          <span>{book.likes}</span>
          <span>{book.comments}</span>
        </div>
        <p
          className="text-[11.27px] font-normal absolute top-[216px] left-[180px] leading-[13.68px] text-left text-gray-800 w-[142.4px] h-[14px]"
          style={{ fontFamily: "Maven Pro", color: "rgba(62, 62, 62, 1)" }}
        >
          {book.date} | {book.time}
        </p>
      </div>
    </div>
  ))}
</div>
<div className="items-center flex justify-between px-3 lg:pl-[150px] lg:pr-[230px] lg:pt-5">
    <p className="text-center text-[16px] lg:text-[22px] font-Roboto font-semibold leading-[47.61px] decoration-skip-ink-none text-[#2F2D5C] ">
  Poem
</p>
<p className="text-center text-[16px] lg:text-[22px] font-Roboto underline decoration-skip-ink-none text-[#673CCB]">
  View All
</p>
</div>
 {/* Book Cards layout Section */}
 <div className="mt-6 flex flex-col lg:grid  lg:grid-cols-3  items-center space-y-6 lg:pl-[150px] lg:pr-[150px] lg:justify-center ">
  {bookss.map((book, index) => (
    <div
      key={index}
      className="flex flex-col relative lg:-top-[35px] border rounded-lg p-4 w-[335px] h-[248.28px] gap-0 border-[1.83px] border-purple-300 shadow-md transition hover:shadow-lg"
    >
      <div
        className="relative w-[142.4px] h-[211.75px] rounded-tl-[3.16px] bg-white shadow-md"
        style={{
          boxShadow:
            "0.53px 6.33px 15.82px -5.27px rgba(0, 0, 0, 0.2), -2.11px 3.16px 10.55px 0px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Image
          src={book.image || "Cover Image/Authority"}
          alt={book.title}
          width={142.4}
          height={211.75}
          className="object-cover rounded-[3.16px]"
          priority
        />
      </div>
      <div
  className="bg-purple-600 absolute top-[5px] left-[180px] text-white text-center text-[11.27px] font-semibold px-2 py-1 rounded-[12.07px] mt-3 w-[70.32px] h-[19.61px] flex items-center justify-center"
>
  {book.genre}
</div>
      <h2
        className="mt-2 text-[16.43px] font-semibold absolute top-[40px] left-[180px] leading-[19.95px]  text-black w-[128px] h-[20px]"
        style={{ fontFamily: "Maven Pro" }}
      >
        {book.title}
      </h2>
      <p
        className="text-[14.6px] font-normal absolute top-[80px] left-[180px] leading-[17.73px]  w-[58px] h-[18px]"
        style={{ fontFamily: "Maven Pro", color: "rgba(86, 36, 193, 1)" }}
      >
        by {book.author}
      </p>
      <div className="flex items-center justify-between  mt-4">
        <div
          className="flex items-center space-x-2 text-purple-600 text-[15.06px] absolute top-[100px] left-[180px] font-medium leading-[18.28px]"
          style={{
            fontFamily: "Maven Pro",
            color: "rgba(86, 36, 193, 1)",
          }}
        >
          
          <span>{book.likes}</span>
          <span>{book.comments}</span>
        </div>
        <p
          className="text-[11.27px] font-normal absolute top-[216px] left-[180px] leading-[13.68px] text-left text-gray-800 w-[142.4px] h-[14px]"
          style={{ fontFamily: "Maven Pro", color: "rgba(62, 62, 62, 1)" }}
        >
          {book.date} | {book.time}
        </p>
      </div>
    </div>
  ))}
</div>
</div>

  

   
  );
}
