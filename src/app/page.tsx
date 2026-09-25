import { Suspense } from "react";
import Hero from "./components/homepage/Hero";
import Library from "./components/homepage/Library";
import Loading from "./components/shared/loading";

export default function Home() {
  return (
    <div>
      <Hero />
      <Suspense fallback={<Loading/>}>
        <Library />
      </Suspense>
    </div>
  );
}
