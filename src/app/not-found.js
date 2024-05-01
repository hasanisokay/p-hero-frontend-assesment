import { BaseURL, ProjectName } from "@/constants/constants";

export const metadata = {
    title: `Login - ${ProjectName} `,
    description:
      "Login to the Ruqyah Forum by Ruqyah Support BD. Access your account, engage with the community, and participate in discussions on spiritual well-being.",
    keywords: ["login", "community"],
    other: {
      "twitter:image": "https://web.programming-hero.com/thumbnail.png",
      "twitter:card": "summary_large_image",
      "og-url": `${BaseURL}/login`,
      "og:image": "https://web.programming-hero.com/thumbnail.png",
    },
    image: "https://web.programming-hero.com/thumbnail.png",
    url: `${BaseURL}/login`,
  };

const NotFound = () => {
    return (
        <div className='text-center text-xl absolute top-[30%] left-0 right-0'>
            <h1>404</h1>
            <p>Not Found</p>
        </div>
    );
};

export default NotFound;