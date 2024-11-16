export interface UserObject {
  success: boolean;
  user: User;
}

export interface User {
  about: About;
  _id: string;
  timeline: Timeline[];
  skills: Skill[];
  social_handles: SocialHandle[];
  services: Service[];
  projects: Project[];
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

export interface Skill {
  enabled: boolean;
  name: string;
  sequence: number;
  percentage: number;
  image: Avatar;
  _id: string;
}

export interface Project {
  liveurl: string;
  githuburl: string;
  title: string;
  sequence: number;
  image: Image;
  description: string;
  techStack: string[];
  _id: string;
  enabled: boolean;
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

export interface Service {
  name: string;
  charge: string;
  desc: string;
  enabled: boolean;
  _id: string;
  image: Image;
}

export interface Timeline {
  company_name: string;
  summary: string;
  sequence: number;
  startDate: string;
  endDate: string;
  jobTitle: string;
  jobLocation: string;
  bulletPoints: string[];
  forEducation: boolean;
  enabled: boolean;
  _id: string;
}
