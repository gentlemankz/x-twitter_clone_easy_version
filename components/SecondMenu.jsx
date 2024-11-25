'use client';
import Search from "./Search";
import Subscribe from "./Subscirbe";
import TrendsForYou from "./TrendsForYou";

export default function SecondMenu({ onSearch }) {
    const handleSearch = (term) => {
        if (onSearch) {
            onSearch(term);
        }
    };

    return(
        <div className="h-full">
            <div className="flex flex-col gap-4 w-8/12 h-full my-6">
                <Search onSearch={handleSearch} />
                <Subscribe />
                <TrendsForYou />
            </div>
        </div>
    );
}