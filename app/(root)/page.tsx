import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className="p-4 mx-auto flex justify-center">
        <p>Admin Dashboard</p>
      </div>
      <div className="flex justify-center">
        <Button size="sm" variant="ghost">Click me</Button>
      </div>
    </>
  );
}
