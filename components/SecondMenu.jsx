import Search from "./Search";
import Subscribe from "./Subscirbe";
import TrendsForYou from "./TrendsForYou";

export default function SecondMenu() {
    return(
        <div className="h-full">
            <div className="flex flex-col gap-4 w-8/12 h-full my-6">
            <Search />
            <Subscribe />
            <TrendsForYou />
            </div>
        </div>
    );
}