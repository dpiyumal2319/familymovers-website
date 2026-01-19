import { Container } from "@/components/layout/Container";

export default function Home() {
  return (
    <Container className="py-16 md:py-24">
      <div className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          Welcome to Family Movers Auckland
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
          Your Trusted Local Movers In Auckland
        </p>
        <p className="text-base text-muted-foreground max-w-2xl">
          Phase 2 Design System & Layout components implemented. Homepage sections coming in Phase 3.
        </p>
      </div>
    </Container>
  );
}
