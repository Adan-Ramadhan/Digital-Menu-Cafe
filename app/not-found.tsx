import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-full h-screen flex flex-col gap-4 items-center justify-center">
      <h1 className="font-bold text-3xl uppercase">
        Not <span className="text-amber-600">Found</span> - 404
      </h1>
      <p className="text-sm text-gray-500">
        Halaman yang anda cari tidak ditemukan.
      </p>
      <Link
        href={"/"}
        className="bg-amber-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-amber-700 cursor-pointer transition-colors duration-300"
      >
        Back to Home
      </Link>
    </div>
  );
}
