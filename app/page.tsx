import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const font = Poppins ({
  subsets: ["latin"],
  weight: ["600"]
})

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center
    bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] 
    from-sky-600 to-blue-800"
    >
      <div className="space-y-6 text-center">
        <h1 className={cn(
          "text-6xl text-white drop-shadow-md",
          font.className,
          )}>
          CENID
        </h1>
        <p className="text-white text-lg">
          Centro Interdisciplinar em Diabetes Unimar
        </p>
        <Button variant={"secondary"} size="lg">
          Entrar
        </Button>
      </div>
    </main>
  );
}
