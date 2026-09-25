
export default function Loading() {
  return (
    <div className="w-full h-[60vh] flex items-center justify-center flex-col gap-4">
      <div className="w-8 h-8 border-2 border-[var(--trishanti-color-primary)] border-t-transparent rounded-full animate-spin" />
      <p className="text-sm text-[var(--trishanti-color-primary)] font-medium animate-pulse">Loading content...</p>
    </div>
  );
}
