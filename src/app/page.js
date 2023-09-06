import MiniDashboard from "./components/MiniDashboard";

export default function Home() {
  return (
    <main >
      <div className="flex flex-col items-center w-screen pt-16">
        <div className="flex flex-col items-center text-7xl font-bold gap-2">
          <h1>The Best Way to</h1>
          <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-[#7399FB] from-10 to-[#A5D9FF] to-90% p-3">Track your Daily Progress</h1>
        </div>
          <p className="text-customGray text-lg font-medium max-w-2xl text-center mt-9">UNX Allows you to track all your daily task progress using gamification methods and earn rewards for specific coupons</p>
          <button className=" mb-20 mt-9 py-4 px-12 rounded-xl  bg-customBlue hover:bg-blue-600 ">Try this app</button>
          <MiniDashboard/>
      </div>
    </main>
  )
}
