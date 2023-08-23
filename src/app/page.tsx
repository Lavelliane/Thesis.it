import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      {/* Ibutang ni supposedly og navbar component and UserButton */}
      <UserButton afterSignOutUrl="/"/> 
      {/* Landing page ni diri with buttons to /sign-in and /sign-up */}
    </div>
  )
}
