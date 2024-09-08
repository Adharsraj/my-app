import Image from "next/image";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import BlogContents from "./components/BlogContents";

export default function Home() {
  return (
    <div className="bg-[#141414] text-white border-white">
      <div className="grid grid-cols-12 ">
        <div className="col-span-7  ">
          <p>Your Journey to Tomorrow Begins Here</p>
          <p>Explore the Frontiers of Artificial Intelligence</p>
          <p>
            Welcome to the epicenter of AI innovation. FutureTech AI News is
            your passport to a world where machines think, learn, and reshape
            the future. Join us on this visionary expedition into the heart of
            AI.
          </p>
          <div className="grid grid-cols-3  border-2">
            <div className="flex flex-col justify-start items-start border p-3">
              <span>300+</span>
              <span>Resources available</span>
            </div>
            <div className="flex flex-col justify-start items-start border p-3">
              <span>300+</span>
              <span>Resources available</span>
            </div>
            <div className="flex flex-col justify-start items-start border p-3">
              <span>300+</span>
              <span>Resources available</span>
            </div>
          </div>
        </div>

        <div className="col-span-5  relative">
          <Image
            src="/home/hero.svg"
            alt="hero"
            width={100}
            height={100}
            className="w-full "
          />
          <div className="absolute top-1/2 px-10">
            <p>Avtar</p>
            <p>Explore 1000+ resources</p>
            <p>
              Over 1,000 articles on emerging tech trends and breakthroughs.
            </p>
            <p>Explore Resources</p>
          </div>
        </div>
      </div>
      {/* second section */}
      <div className="min-h-[40vh]">
        <div className="grid grid-cols-3">
          <div>
            <p>image</p>
            <div className="flex justify-between items-center">
              <div>
                <p>Latest News Updates</p>
                <p>Stay Current</p>
              </div>
              <div>image</div>
            </div>
            <p>Over 1,000 articles published monthly</p>
          </div>
          <div>
            <p>image</p>
            <div className="flex justify-between items-center">
              <div>
                <p>Latest News Updates</p>
                <p>Stay Current</p>
              </div>
              <div>image</div>
            </div>
            <p>Over 1,000 articles published monthly</p>
          </div>
          <div>
            <p>image</p>
            <div className="flex justify-between items-center">
              <div>
                <p>Latest News Updates</p>
                <p>Stay Current</p>
              </div>
              <div>image</div>
            </div>
            <p>Over 1,000 articles published monthly</p>
          </div>
        </div>
      </div>

      <div>
<BlogContents/>
      </div>
    </div>
  );
}
