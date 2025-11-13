// src/app/meeting/success/page.tsx
import Link from "next/link";

export default function Success({
  searchParams,
}: {
  searchParams: { link?: string };
}) {
  const link = searchParams.link ?? "";

  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold text-green-600 mb-4">Booked!</h1>
      {link && (
        <>
          <p>Join your meeting:</p>
          <a
            href={link}
            target="_blank"
            rel="noopener"
            className="inline-block mt-2 px-6 py-3 bg-green-600 text-white rounded"
          >
            Open Zoom
          </a>
        </>
      )}
      <Link href="/schedules" className="block mt-6 text-blue-600">
        ← Book another
      </Link>
    </div>
  );
}
