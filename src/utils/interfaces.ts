export interface UserObject {
  success: boolean;
  user: User;
}

export interface User {
  _id: string;
  social_handles: SocialHandle[];
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
