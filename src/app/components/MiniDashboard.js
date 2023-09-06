"use client";
import { useState } from "react";
import BlueBarIcon from "./icons/BlueBarIcon";
import Charts from "./Charts";


export default function MiniDashboard() {
  const month = [50, 60, 30, 45, 60, 70, 50]
  const week = [35, 80, 75, 45, 90, 35, 40]
  const day = [25, 55, 40, 35, 85 ,60, 30]
  const [selected, setSelected] = useState("Dashboard");
  const [chartSelected, setChartSelected] = useState(month);


  return (
    <div className="flex flex-row bg-[#111214] rounded-tr-xl w-[1023px] h-[560px">
      <div className="flex flex-col w-44 bg-[#1D1818] pt-12 pl-8 rounded-tl-xl">
        <div className="relative bg-[#E3FF37] w-14 h-14 rounded-full">
          <div className="absolute left-3 top-3">
            <img
              src="https://i.postimg.cc/L8km95KN/avatar.png"
              width={27}
              height={35}
              alt="Avatar image"
              className="flex"
            />
          </div>
        </div>
        <div className="pt-2">
          <h2 className="font-bold text-sm">Zernonia</h2>
          <h3 className="text-customGray text-xs ">PRO account</h3>
        </div>
        <ul className="flex flex-col mt-16 gap-4 text-customGray text-xs">
          <li className="flex flex-row items-center gap-2">
            {selected === "HomeScreen" && (
            <div className="ml-[-32px]">

              <BlueBarIcon/>
            </div>
            )}
            <button
              onClick={() => {
                setSelected("HomeScreen");
              }}
              className={` ${selected === "HomeScreen" ? 'text-lg text-white' :''} `}
            >
              HomeScreen
            </button>
          </li>
          <li className="flex flex-row items-center gap-2">
            {selected === "Dashboard" && (
            <div className="ml-[-32px]">

              <BlueBarIcon/>
            </div>
            )}
            <button
              onClick={() => {
                setSelected("Dashboard");
              }}
              className={` ${selected === "Dashboard" ? 'text-lg text-white' :''} `}
            >
              Dashboard
            </button>
          </li>
          <li className="flex flex-row items-center gap-2">
            {selected === "Settings" && (
            <div className="ml-[-32px]">

              <BlueBarIcon/>
            </div>
            )}
            <button
              onClick={() => {
                setSelected("Settings");
              }}
              className={` ${selected === "Settings" ? 'text-lg text-white' :''} `}
            >
              Settings
            </button>
          </li>
        </ul>
      </div>
      <div className="flex flex-col w-full pt-12 pl-14 pr-7 max-w-[893px]">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-2xl">Dashboard</h1>
          <ul className="flex flex-row gap-1 text-xs" >
            <li><button onClick={()=>setChartSelected(month)} className="bg-customBlue px-4 py-2 rounded-md">monthly</button></li>
            <li><button onClick={()=>setChartSelected(week)}  className="bg-customBlue px-4 py-2 rounded-md">weekly</button></li>
            <li><button onClick={()=>setChartSelected(day)}  className="bg-customBlue px-4 py-2 rounded-md">daily</button></li>
          </ul>
        </div>
        <Charts values={chartSelected}/>
      </div>
    </div>
  );
}
