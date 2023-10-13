import { Index } from "./home";
import { Features } from "./home/features";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Index />
      <Features/>
    </main>
  );
}
