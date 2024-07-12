import { cn } from "@/utils/cn";
import Marquee from "@/components/ui/marquee";
import React from "react";


const reviews = [
  {
    name: "Omkar",
    username: "@omkar007",
    body: "Transformative sessions that bring peace and clarity!",
    img: "https://media.licdn.com/dms/image/D4D03AQFWWnfP7QPKQw/profile-displayphoto-shrink_400_400/0/1679454301799?e=1726099200&v=beta&t=32VWqqx7hQDyIRBWdywSlM74vQ8RLOFtOg-9XQjRtOc",
  },
  {
    name: "Arsh",
    username: "@arsh72",
    body: "A life-changing experience—highly recommend! 🌟🙌",
    img: "https://media.licdn.com/dms/image/D5603AQH3OXCs5a05Og/profile-displayphoto-shrink_400_400/0/1706903307026?e=1726099200&v=beta&t=oD1Up-0xGkFoU7rKeib7Ufp3K8uqZFu64alpOdBqwBU",
  },
  {
    name: "Neha",
    username: "@neha_21",
    body: "The perfect blend of guidance and support! 🥰🧘‍♀️",
    img: "https://media.licdn.com/dms/image/D4D03AQHsQatbNGggOw/profile-displayphoto-shrink_400_400/0/1709533612492?e=1726099200&v=beta&t=BkOSvn67Z1AQCSJ1qlTRXRvRf9Q2MtONVYFyBRGFCAQ",
  },
  {
    name: "Ashish",
    username: "@ashish^28",
    body: "The best online meditation experience I've ever had! 💻🌟",
    img: "https://media.licdn.com/dms/image/D4D03AQGT29tIR5jSGQ/profile-displayphoto-shrink_400_400/0/1711979520864?e=1726099200&v=beta&t=TAT4b2wkdDxus6CHPkcp_D0ZozeIPFiq7CraFDImm1A",
  },
  {
    name: "Aditi",
    username: "@aditi_18",
    body: "Incredible guidance from a knowledgeable instructor. 🌟🙏",
    img: "https://media.licdn.com/dms/image/D4D03AQH64kC9r8dghg/profile-displayphoto-shrink_800_800/0/1720761122052?e=1726099200&v=beta&t=ThgOE3gV2FAvStRbw9GtIZVHcTR2Epy9Id2spKBQt84",
  },
  {
    name: "Abhilash",
    username: "@abhi66",
    body: "I feel more balanced and centered every day. 🌈🧘‍♂️",
    img: "https://media.licdn.com/dms/image/D4D03AQGQoS8SLpRJyA/profile-displayphoto-shrink_400_400/0/1711856565714?e=1726099200&v=beta&t=yj9wZkRWRlqtzR9A4-gO5oa_NRC6Hd9YWO6Me1drCiA",
  },
  {
    name: "Prasad",
    username: "@prasad03",
    body: "These sessions have helped me find inner peace. 🧘‍♀️🌿",
    img: "https://media.licdn.com/dms/image/D5603AQHhiJFajf4ZwA/profile-displayphoto-shrink_200_200/0/1719500479925?e=2147483647&v=beta&t=MInwWc4p7Wzhs2JwLxtbw8URBDJlnm-rA-0D7fFauUA",
},
  {
    name: "Mandar",
    username: "@mandar_99",
    body: "A wonderful journey towards mindfulness and relaxation. 🌸🧘‍♂️",
    img: "https://media.licdn.com/dms/image/D5603AQEEx2J4T6uwfA/profile-displayphoto-shrink_200_200/0/1711979911240?e=2147483647&v=beta&t=jeeiCBAyNJiiN0EVPw8DMGVwODIfR411Oh7EGZlDhSo",
  },
  {
    name: "Shreyash",
    username: "@shreyash08",
    body: "I’ve never felt so connected and at ease. 💖🌍",
    img: "https://media.licdn.com/dms/image/D5603AQGMHQ9GJ7uPow/profile-displayphoto-shrink_200_200/0/1692896842257?e=2147483647&v=beta&t=sXDrL7AcN7vCpNp7ko3sRZnomlb8kj3wOMrhtTfnGkg",
  },
  {
    name: "Sushant",
    username: "@sushant_b",
    body: "Exceptional instruction that truly makes a difference. 🌟🧘‍♀️",
    img: "https://media.licdn.com/dms/image/D4D03AQHBPV6UVBedmw/profile-displayphoto-shrink_200_200/0/1694682990445?e=2147483647&v=beta&t=3oGwF614TjOp9wMkwHRl7WGvct9uThFKMSSU8HlhDaI",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative text-lg flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background md:shadow-xl">
        <h1 className="mb-4 font-bold  bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-200">See What Our Students Are Saying</h1>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black dark:from-background"></div>
    </div>
  );
}
