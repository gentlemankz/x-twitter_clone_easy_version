'use client';
import { useState } from 'react';
import LeftSideBar from "@/components/LeftSideBar";
import MainMenu from "@/components/MainMenu";
import SecondMenu from "@/components/SecondMenu";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="container">
      <main className="flex flex-row gap-4">
        <LeftSideBar />
        <MainMenu searchTerm={searchTerm} />
        <SecondMenu onSearch={handleSearch} />
      </main>
      <footer>
      </footer>
    </div>
  );
}
