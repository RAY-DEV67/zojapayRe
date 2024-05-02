import comment from "../assets/comment.png";
import share from "../assets/share.png";

interface TrendingPostsProps {
  heading: string;
  text: string;
}

const TrendingPosts: React.FC<TrendingPostsProps> = ({ heading, text }) => {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between">
      <div className="border p-[16px] mt-[16px] lg:mt-[0px] rounded-[20px] lg:w-[28vw]">
        <p className="text-[16px] font-bold">{heading}</p>
        <p className="text-custom-darkGray font-semibold text-[14px]">{text}</p>
        <div className="flex flex-row mt-[16px]">
          <div className="bg-[#f6f6f6] py-[4px] px-[16px] rounded-[50px] flex flex-row items-center">
            <svg
              width="15px"
              viewBox="0 0 128 128"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="img"
              preserveAspectRatio="xMidYMid meet"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M93.99 8.97c-21.91 0-29.96 22.39-29.96 22.39s-7.94-22.39-30-22.39c-16.58 0-35.48 13.14-28.5 43.01c6.98 29.87 58.56 67.08 58.56 67.08s51.39-37.21 58.38-67.08c6.98-29.87-10.56-43.01-28.48-43.01z"
                  fill="#f44336"
                >
                  {" "}
                </path>{" "}
                <g fill="#c33">
                  {" "}
                  <path d="M30.65 11.2c17.2 0 25.74 18.49 28.5 25.98c.39 1.07 1.88 1.1 2.33.06L64 31.35C60.45 20.01 50.69 8.97 34.03 8.97c-6.9 0-14.19 2.28-19.86 7.09c5.01-3.29 10.88-4.86 16.48-4.86z">
                    {" "}
                  </path>{" "}
                  <path d="M93.99 8.97c-5.29 0-10.11 1.15-13.87 3.47c2.64-1.02 5.91-1.24 9.15-1.24c16.21 0 30.72 12.29 24.17 40.7c-5.62 24.39-38.46 53.98-48.49 65.27c-.64.72-.86 1.88-.86 1.88s51.39-37.21 58.38-67.08c6.98-29.86-10.53-43-28.48-43z">
                    {" "}
                  </path>{" "}
                </g>{" "}
                <path
                  d="M17.04 24.82c3.75-4.68 10.45-8.55 16.13-4.09c3.07 2.41 1.73 7.35-1.02 9.43c-4 3.04-7.48 4.87-9.92 9.63c-1.46 2.86-2.34 5.99-2.79 9.18c-.18 1.26-1.83 1.57-2.45.46c-4.22-7.48-5.42-17.78.05-24.61z"
                  fill="#ff8a80"
                >
                  {" "}
                </path>{" "}
                <path
                  d="M77.16 34.66c-1.76 0-3-1.7-2.36-3.34c1.19-3.02 2.73-5.94 4.58-8.54c2.74-3.84 7.95-6.08 11.25-3.75c3.38 2.38 2.94 7.14.57 9.44c-5.09 4.93-11.51 6.19-14.04 6.19z"
                  fill="#ff8a80"
                >
                  {" "}
                </path>{" "}
              </g>
            </svg>
            <p className="font-bold text-[12px] ml-[4px]">260</p>
          </div>
          <div className="bg-[#f6f6f6] flex flex-row items-center py-[4px] px-[16px] rounded-[50px] mx-[16px]">
            <img src={comment} />
            <p className="font-bold text-[12px] ml-[4px]">234</p>
          </div>
          <div className="bg-[#f6f6f6] flex flex-row items-center py-[4px] px-[16px] rounded-[50px]">
            <img src={share} />
            <p className="font-bold text-[12px] ml-[4px]">123</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingPosts;
