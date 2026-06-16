import Image from "next/image";
import { Tweet } from "./Tweet";
import { TWEETS } from "@/shared/data/tweet.data";

export default function Home() {
  return (
    <div className="page-container gap-4 flex flex-col">
      <h1>Home</h1>
      <section className="tweets w-full h-full space-y-6">
        {TWEETS.map((tweet, index) => (
          <Tweet key={index} tweet={tweet} />
        ))}
      </section>
    </div>
  );
}
