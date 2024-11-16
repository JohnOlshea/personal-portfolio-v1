import About from "@/components/about";
import Header from "@/components/header";
import { Hero } from "@/components/hero";
import { UserObject } from "@/utils/interfaces";

export default async function Home() {
  const res = {
    "success": true,
    "user": {
      "_id": "65b3a22c01d900e96c4219ae",
      "about": {
        "name": "John AKala",
        "title": "Software Developer",
        "subTitle": "I pleasing visuals, user interfaces and web applications",
        "description": "As a React developer with 5 years of experience, I have honed my skills in JavaScript and am currently learning TypeScript to expand my expertise. I pride myself on being a quick learner and attentive listener, which allows me to collaborate effectively with clients to create efficient and scalable solutions. My focus is on developing user-friendly applications that solve real-world problems.",
        "quote": "Live the Life as you want",
        "exp_year": "5",
        "address": "Abuja, Nigeria",
        "some_total": "90",
        "phoneNumber": "+234-12345678",
        "contactEmail": "johnolshea@gmail.com",
        "avatar": {
          "public_id": "portfolio3/1713995155677-122l5x.webp",
          "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1713995155677-122l5x.webp"
        },
        "alternateAvatars": [
          {
            "public_id": "portfolio3/1713996156944-1hro1b.webp",
            "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1713996156944-1hro1b.webp"
          }
        ]
      },
      "social_handles": [
        {
          "platform": "Instagram",
          "url": "#",
          "image": {
            "public_id": "1708718250873-3038n7.webp",
            "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1708718250873-3038n7.webp"
          },
          "enabled": true,
          "_id": "65b3ea4feb20546ae6d4641d"
        },
        {
          "platform": "LinkedIn",
          "url": "#",
          "image": {
            "public_id": "1708718263294-2lfj67.webp",
            "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1708718263294-2lfj67.webp"
          },
          "enabled": true,
          "_id": "65b3e99beb20546ae6d463c2"
        },
        {
          "enabled": true,
          "platform": "Twitter",
          "url": "#",
          "image": {
            "public_id": "1708718328750-d4jsq.webp",
            "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1708718328750-d4jsq.webp"
          },
          "_id": "65b3e47cb48589dfcae185bd"
        },
        {
          "enabled": true,
          "platform": "Facebook",
          "url": "#",
          "image": {
            "public_id": "1708718346601-xldm.webp",
            "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1708718346601-xldm.webp"
          },
          "_id": "65b3e43cb48589dfcae1856c"
        }
      ],
      "timeline": [
        {
          "company_name": "7360",
          "summary": "string",
          "sequence": 2,
          "startDate": "date",
          "endDate": "date",
          "jobTitle": "Fullstack developer",
          "jobLocation": "UK",
          "bulletPoints": ["a", "b"],
          "forEducation": true,
          "enabled": true,
          "_id": "1",
        }
      ]
    }
  }

  const { user } = res as UserObject;
  if (!user) return null;
  const {
    about,
    social_handles,
    timeline,
  } = user;

  return (
    <main className="relative">
      <Header social={social_handles} />
      <Hero about={about} />
      <About about={about} timeline={timeline} />
    </main>
  );
}
