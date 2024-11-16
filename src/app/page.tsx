import About from "@/components/about";
import Experience from "@/components/experience";
import Header from "@/components/header";
import { Hero } from "@/components/hero";
import Projects from "@/components/projects";
import { HoverImageLink, ParallaxText, SectionHeading, SlideIn, Transition } from "@/components/ui";
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
      ],
      "skills": [
        {
          "enabled": true,
          "name": "string",
          "sequence": 1,
          "percentage": 2,
          "image": {
            "public_id": "portfolio3/1713995155677-122l5x.webp",
            "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/portfolio3/1713995155677-122l5x.webp"
          },
          "_id": "string",
        }
      ],
      "services": [
        {
          "name": "string",
          "charge": "string",
          "desc": "string",
          "enabled": true,
          "_id": "string",
          "image": {
            "public_id": "1708718250873-3038n7.webp",
            "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1708718250873-3038n7.webp"
          },
        }
      ],
      "projects": [
        {
          "liveurl": "string",
          "githuburl": "string",
          "title": "string",
          "sequence": 2,
          "image": {
            "public_id": "1708718250873-3038n7.webp",
            "url": "https://portfolio-image-store.s3.ap-south-1.amazonaws.com/1708718250873-3038n7.webp"
          },
          "description": "string",
          "techStack": ["string"],
          "_id": "string",
          "enabled": true, 
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
    skills,
    services,
    projects,
  } = user;

  return (
    <main className="relative">
      <Header social={social_handles} />
      <Hero about={about} />
      <About about={about} timeline={timeline} />
      <Experience timeline={timeline} />
      {/* ===SKILLS SECTION=== */}
      <section id="skills">
        <ParallaxText baseVelocity={-5}>
          {skills
            .sort((a, b) => a.sequence - b.sequence)
            .map((skill) =>
              skill.enabled ? (
                <span
                  key={skill._id}
                  className="md:text-7xl text-xl font-semibold uppercase text-white/30"
                >
                  {skill.name} •
                </span>
              ) : null
            )}
        </ParallaxText>
        <ParallaxText baseVelocity={5}>
          {skills
            .sort((a, b) => a.sequence - b.sequence)
            .map((skill) =>
              skill.enabled ? (
                <span
                  key={skill._id}
                  className="md:text-7xl text-xl font-semibold uppercase text-white/30"
                >
                  {skill.name} •
                </span>
              ) : null
            )}
        </ParallaxText>
        <ParallaxText baseVelocity={-5}>
          {skills
            .sort((a, b) => a.sequence - b.sequence)
            .map((skill) =>
              skill.enabled ? (
                <span
                  key={skill._id}
                  className="md:text-7xl text-xl font-semibold uppercase text-white/30"
                >
                  {skill.name} •
                </span>
              ) : null
            )}
        </ParallaxText>
      </section>
      {/* ===SERVICES SECTION=== */}
      <section className="px-2 py-20 relative" id="services">
        <span className="blob absolute top-[20%] right-0 w-1/3 h-5/6 blur-[100px] rotate-180 -z-10" />
        <SectionHeading className="md:pl-16 overflow-hidden">
          <SlideIn className="text-white/40">Here&apos;s how</SlideIn> <br />
          <SlideIn>I can help you</SlideIn>
        </SectionHeading>
        <div className="mx-auto pt-10">
          {services.map((service) => (
            <Transition key={service._id}>
              <HoverImageLink
                heading={service.name}
                href=""
                price={service.charge}
                imgSrc={service.image.url}
                subheading={service.desc}
              />
            </Transition>
          ))}
        </div>
        <Transition className="flex items-center py-10 md:hidden">
          <div className="p-4 rounded-full border border-white/50">
            <span>Discuss the project</span>
          </div>
        </Transition>
      </section>
      {/* ===PROJECTS SECTION=== */}
      <Projects data={projects} />
    </main>
  );
}
