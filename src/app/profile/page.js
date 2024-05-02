import Profile from "@/components/profile/Profile";
import { BaseURL, ProjectName } from "@/constants/constants";

export const metadata = {
    title: `Profile - ${ProjectName} `,
    description:
      "Access your account, engage with the community, and participate in discussions.",
    keywords: ["profile", "community"],
    other: {
      "twitter:image": "https://web.programming-hero.com/thumbnail.png",
      "twitter:card": "summary_large_image",
      "og-url": `${BaseURL}/profile`,
      "og:image": "https://web.programming-hero.com/thumbnail.png",
    },
    image: "https://web.programming-hero.com/thumbnail.png",
    url: `${BaseURL}/profile`,
  };



const page = () => {
return <Profile />
};

export default page;