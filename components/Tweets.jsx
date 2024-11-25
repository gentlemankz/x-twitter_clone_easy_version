'use client';

export default function Tweets({fullName, userName, minutes, content, imageUrl}) {
  return (
    <div>
      <div className="flex justify-center items-center gap-4 my-2">
        <div className="flex justify-start gap-4">
          <div
            className="bg-cover rounded-full bg-center w-8 h-8"
            style={{ backgroundImage: `url(${imageUrl})` }}
          ></div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center gap-4">
              <div className="flex flex-row gap-2 text-sm ">
                <p>{fullName}</p>
                <p>{userName}</p>
                <p>.</p>
                <p>{minutes}</p>
              </div>
              <button className="flex h-full">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-1xvli5t r-1hdv0qi"
                  fill="currentColor"
                  width="16"
                  height="16"
                >
                  <g>
                    <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
                  </g>
                </svg>
              </button>
            </div>
            <p className="text-sm">{content}</p>
            {imageUrl && (
              <div
                className="bg-cover bg-center rounded-2xl min-h-80"
                style={{ backgroundImage: `url(${imageUrl})` }}
              ></div>
            )}
          </div>
        </div>
      </div>
      <div className="border-t border-[#3e4144]" />
    </div>
  );
}
