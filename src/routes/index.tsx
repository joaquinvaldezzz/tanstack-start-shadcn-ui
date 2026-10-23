import { createFileRoute } from "@tanstack/react-router";

function Home() {
  return (
    <div className="p-8">
      <h1>Hello</h1>
    </div>
  );
}

export const Route = createFileRoute("/")({ component: Home });
