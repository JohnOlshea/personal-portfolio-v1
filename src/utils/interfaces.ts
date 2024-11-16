export interface UserObject {
  success: boolean;
  user: User;
}

export interface User {
  about: About;
  _id: string;
  social_handles: SocialHandle[];
}

export interface About {
  name: string;
  title: string;
  subTitle: string;
  description: string;
  quote: string;
  exp_year: string;
  address: string;
  some_total: string;
  phoneNumber: string;
  avatar: Avatar;
  alternateAvatars: Avatar[];
}

export interface Avatar {
  public_id: string;
  url: string;
}

export interface Image {
  public_id: string;
  url: string;
}

export interface SocialHandle {
  platform: string;
  url: string;
  image: Image;
  enabled: boolean;
  _id: string;
}
