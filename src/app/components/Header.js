export default function Header(){
    return(
        <div className="flex flex-row px-28 py-16 justify-between items-center">
          <button className="text-4xl font-bold">UNX</button>
          <ul className="flex flex-row gap-16 text-lg">
            <li>Products</li>
            <li>About</li>
            <li>Resources</li>
            <li>Contact</li>
          </ul>
          <button className="text-lg px-9 py-4 rounded-xl bg-[#242424]">DashBoard</button>
        </div>
    )
}
