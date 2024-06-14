import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl text-rose-500 py-6">Welcome to Self Learning Portal</h1>
      <div className="py-2">
        <UserButton />
      </div>
    </>
  );
}
