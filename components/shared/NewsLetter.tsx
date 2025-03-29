import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Newsletter() {
  return (
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 items-center gap-8">
      {/* Left Section */}
      <div className="bg-blue-600 text-white p-8 rounded-lg relative">
        <h2 className="text-2xl md:text-3xl font-bold">
          Start Building for Free
        </h2>
        <p className="mt-2 text-sm md:text-base">
          And because your company is unique, you will need an extensible
          identity solution.
        </p>
        {/* Decorative Shape */}
        <div className="absolute bottom-0 right-0 w-20 h-20 bg-green-400 rounded-tl-full"></div>
      </div>

      {/* Right Section - Subscription Form */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold">Subscribe Now</h3>
        <p className="text-gray-600 text-sm mb-4">
          You will receive every news and pro tips.
        </p>
        <div className="flex gap-2">
          <Input type="email" placeholder="Your work mail" className="flex-1" />
          <Button className="bg-blue-600 hover:bg-blue-500 text-white">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
