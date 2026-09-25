"use client";


export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full animate-[fade-in-up_var(--trishanti-duration-slow)_var(--trishanti-ease-entrance)_forwards]">
      {children}
    </div>
  );
}
