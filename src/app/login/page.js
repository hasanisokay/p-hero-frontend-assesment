import Login from "@/components/login/Login";
import { BaseURL, ProjectName } from "@/constants/constants";

export const metadata = {
    title: `Login - ${ProjectName} `,
    description:
      "Login and access your account, engage with the community, and participate in discussions.",
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

const page = () => {
return <Login />
};

export default page;