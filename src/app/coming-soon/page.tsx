import Link from "next/link";

export default function ComingSoonPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center text-center p-6">
      <div className="max-w-md">
        <h1 className="text-5xl font-extrabold text-[#eb7f13] mb-4">🚧 Coming Soon</h1>
        <p className="text-lg text-black mb-8 leading-relaxed">
          This page is under construction. We&apos;re working hard to bring it to life.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-2 text-white bg-[#eb7f13] hover:bg-[#d96f10] rounded-full transition duration-200 shadow-md"
        >
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}
