import LeftSideBar from "@/components/LeftSideBar";
import MainMenu from "@/components/MainMenu";
import SecondMenu from "@/components/SecondMenu";

export default function HomePage() {
  return (
    <div className="container">
      <main className="flex flex-row gap-4">
        <LeftSideBar />
        <MainMenu />
        <SecondMenu />
      </main>
      <footer>
      </footer>
    </div>
  );
}