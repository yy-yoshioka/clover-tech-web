import Hero from "@/src/components/Hero";
import Services from "@/src/components/Services";
import TrustedBy from "@/src/components/TrustedBy";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <main className="flex flex-col">
        <Hero />
        <TrustedBy />
        <Services />
      </main>
    </div>
  );
}
