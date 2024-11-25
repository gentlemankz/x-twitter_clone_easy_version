export default function Search({ onSearch }) {
    return(
        <div className="">
            <input 
                type="text"
                placeholder="Search" 
                className="w-full h-10 rounded-full bg-[#2f3336] text-center text-white"
                onChange={(e) => onSearch(e.target.value)}
            />
        </div>
    );
}