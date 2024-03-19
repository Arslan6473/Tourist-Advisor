import React, { useState } from "react";
import { Search } from "lucide-react";
function Header({getCity}) {
  const [city,setCity] = useState('');

   const clickHandle =()=>{
      getCity(city)
      setCity('')
   }

  return (
    <>
      <nav className="flex justify-between items-center bg-[#333C4A] text-white shadow-2xl max-w-[100vw] h-[12vh]">
        <div className=" p-3 font-medium text-[1rem]">Tourist Advisor</div>
        <div className="flex justify-center items-center gap-2 p-3">
          <h4 className="text-[0.9rem]">Explore new places</h4>
          <div className="flex justify-center items-center">
         
              <div onClick={clickHandle} className=" p-1 cursor-pointer">
                <Search strokeWidth={2} className="text-white" />
              </div>
              <div>
                {" "}
                <input
                  type="text"
                  name="search"
                  id="search"
                  value={city}
                  placeholder="Search..."
                  className="border-none bg-[#495664] p-1 focus:outline-none rounded-sm text-white"
                  onChange={(e)=>(setCity(e.target.value))}
                />
              </div>
           
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
