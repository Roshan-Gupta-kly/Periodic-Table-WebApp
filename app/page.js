import { Brain, Grid3X3, Trophy } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8 bg-[#E9F0FF] ">
      <div className="flex items-center justify-center flex-col gap-8">
        <section className="flex items-center justify-center flex-col gap-8">
          <div className=" space-y-2 flex items-center justify-center flex-col gap-4">
            <div className="bg-[#F1F5F9] rounded-4xl py-2 px-4 font-semibold text-xs">
              🧪 Educational Chemistry Tools
            </div>
            <h1 className="font-bold text-center text-3xl sm:text-6xl">
              Explore the{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Periodic Table
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 text-center max-w-2xl mx-auto">
              Discover the fascinating world of chemical elements through
              interactive exploration, engaging quizzes, and rewarding
              achievements.
            </p>
          </div>
          <div className="flex items-center justify-center gap-8">
            <Link
              href="/elements"
              className="bg-blue-500 hover:bg-blue-600 text-white text-sm flex items-center justify-center gap-2 px-4 py-2 rounded-lg"
            >
              <Grid3X3 className="w-5 h-5 mr-2 " />
              Explore Elements
            </Link>
            <Link
              href="/quiz"
              className="bg-gray-50 hover:bg-gray-100 text-black flex items-center justify-center gap-2 px-4 py-2 rounded-lg"
            >
              <Brain className="w-5 h-5 mr-2 " />
              Take Quiz
            </Link>
          </div>
        </section>
        <section className="w-full">
          <div className="grid md:grid-cols-3 grid-cols-1 gap-6 text-center">
            <div className="bg-white flex items-center justify-center flex-col gap-2 py-6 px-18 rounded-xl ">
              <div className="bg-[#DBEAFE] p-4 text-blue-500 w-fit rounded-sm">
                <Grid3X3 className="w-8 h-8 " />
              </div>
              <p className="font-bold text-2xl">118 Elements</p>
              <p className="text-sm text-gray-600">Complete Periodic Table</p>
            </div>
            <div className="bg-white flex items-center justify-center flex-col gap-2 py-6 px-18 rounded-xl ">
              <div className="bg-[#d3f6de] p-4 text-green-400 w-fit rounded-sm">
                <Brain className="w-8 h-8 " />
              </div>
              <p className="font-bold text-2xl">50 + Quizzes</p>
              <p className="text-sm text-gray-600">
                Test your chemistry knowledge
              </p>
            </div>
            <div className="bg-white flex items-center justify-center flex-col gap-2 py-6 px-18 rounded-xl ">
              <div className="bg-[#eee6f4] p-4 text-purple-400 w-fit rounded-sm">
                <Trophy className="w-8 h-8 " />
              </div>
              <p className="font-bold text-2xl">25 Achievements</p>
              <p className="text-sm text-gray-600">
                Unlock rewards as you learn
              </p>
            </div>
          </div>
        </section>
        <section className="space-y-8">
          <div className="text-center flex items-center justify-center flex-col gap-4">
            <h1 className="font-bold text-3xl mt-10">
              Learning Made Interative
            </h1>
            <p className="text-sm text-gray-600">
              Our comprehensive platform makes chemistry education engaging and
              accessible for everyone.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
