import PostMenu from "./PostMenu";
import TweetList from "./TweetList";

export default function MainMenu({ searchTerm }) {
    
    const tweets = [
        {
            id: "1",
            fullName: "Shynggys Zhakenuly",
            userName: "zhakenuly",
            minutes: "12h",
            content: "Создал новый проект -клон X",
            imageUrl: "/profile.webp"
        },
        {
            id: "2",
            fullName: "Lusio Beno",
            userName: "lbeno",
            minutes: "1h",
            content: "What a beautiful architecture",
            imageUrl: "/second.jpg"
        }
    ]
    return(
        <div className="w-6/12 border-solid border-[#3e4144] border-[0.5px] my-6">
        <div>
          <div className="flex gap-2">
            <div className="flex justify-center items-center w-8/12 h-12 hover:bg-[rgb(62,65,68)]">
              <p className="text-sm">For you</p>
            </div>
            <div className="flex justify-center items-center w-8/12 h-12 hover:bg-[rgb(62,65,68)]">
              <p className="text-sm">Following</p>
            </div>
          </div>
          <div className="border-t border-[#3e4144]" />
        </div>
        <PostMenu />
        <TweetList tweets={tweets} searchTerm={searchTerm} />
      </div>
    );
}