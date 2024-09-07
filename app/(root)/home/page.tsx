import Image from "next/image";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button"
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <div className="bg-black text-white border-white">
  
 

  <div className="grid grid-cols-12 ">
    <div className="col-span-7 bg-gray-900 p-4">
      <p className="text-3xl "> Your Journey to Tomorrow Begins Here</p>
      <p>Explore the Frontiers of Artificial Intelligence</p>
      <p>Welcome to the epicenter of AI innovation. FutureTech 
        AI News is your passport to a world where machines
         think, learn, and reshape the future. Join us on 
         this visionary expedition into the heart of AI.</p>
      
    </div>
    <div className="col-span-5 bg-gray-800 p-4">
    <div className="flex -space-x-3 *:ring *:ring-white">
      <Avatar>
        <AvatarImage src="/avatars/avatar-01.jpg" />
      </Avatar>
      <Avatar>
        <AvatarImage src="/avatars/avatar-02.jpg" />
      </Avatar>
      <Avatar>
        <AvatarImage src="/avatars/avatar-03.jpg" />
      </Avatar>
      <p>Explore 1000+ resources</p>
      <p>Over 1,000 articles on emerging tech trends and breakthroughs</p>
      <Button className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
      Explore Resources
      <ArrowTopRightIcon className="h-4 w-4" />
      </Button>
    </div>
    </div>

    
  </div>
</div>

  );
}
