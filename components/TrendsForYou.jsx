export default function TrendsForYou() {
    return(
        <div className="flex justify-around items-center border border-[#3e4144] rounded-3xl">
            <div className="flex flex-col gap-6 my-6">
                <p>Trends for you</p>
                <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                    <div className="flex flex-row gap-2">
                        <p>Music</p>
                        <p>.</p>
                        <p>Trending</p>
                    </div>
                    <p>#ENHYPEN</p>
                    <p>380k posts</p>
                </div>
                <div className="flex flex-col gap-1">
                    <p>Trending in Kazakhstan</p>
                    <p>Главное</p>
                    <p>1,665 posts</p>
                </div>
                <div className="flex flex-col gap-1">
                    <p>Trending in Kazakhstan</p>
                    <p>Давай</p>
                    <p>1,487 posts</p>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="flex flex-row gap-2">
                    <p>Business&finance</p>
                    <p>Trending</p>
                    </div>
                    <p>0.3 ETH</p>
                    <p>6,039 posts</p>
                </div>
                <div className="flex flex-col gap-1">
                    <div className="flex flex-row gap-2">
                    <p>Only on X</p>
                    <p>Trending</p>
                    </div>
                    <p>Jarret</p>
                    <p>1,358 posts</p>
                </div>
                </div>
            </div>
        </div>
    );
}