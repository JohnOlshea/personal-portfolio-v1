import Header from "@/components/header";
import { UserObject } from "@/utils/interfaces";

export default async function Home() {
  const res = {
    "success": true,
    "user": {
      "_id": "65b3a22c01d900e96c4219ae",
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
    }
  }

  const { user } = res as UserObject;
  if (!user) return null;
  const {
    social_handles,
  } = user;

  return (
    <main className="relative">
      <Header social={social_handles} />
    </main>
  );
}
