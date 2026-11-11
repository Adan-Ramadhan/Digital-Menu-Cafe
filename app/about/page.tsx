export default function AboutPage() {
  return (
    <section className="w-full min-h-auto p-4 ">
      <h1 className="font-bold uppercase text-xl">
        Tentang <span className="text-amber-600">Developer</span>
      </h1>
      <p className="text-sm text-gray-500">
        Nama saya{" "}
        <a
          href="https://www.instagram.com/adaan_ramadhan/"
          target="_blank"
          className="text-amber-400 hover:text-amber-700"
        >
          Adan
        </a>
        , saya mengembangkan website ini dengan tujuan pembelajaran, disini saya
        berfokus pada Front End Developer/Pengembangan pada tampilan UI (User
        Interface) yang interaktif dan responsive terhadap berbagai macam
        device, berikuf fitur dan teknologi yang saya gunakan :
      </p>

      <ul>
        <li className="font-semibold text-md mt-4 uppercase">Bahasa, Framework & Library</li>
        <li className="text-sm text-gray-500 list-disc list-inside">Typescript</li>
        <li className="text-sm text-gray-500 list-disc list-inside">Next Js</li>
        <li className="text-sm text-gray-500 list-disc list-inside">Tailwind Css</li>
        <li className="text-sm text-gray-500 list-disc list-inside">UI Shadcn</li>
        <li className="text-sm text-gray-500 list-disc list-inside">Zustand</li>
        <li className="text-sm text-gray-500 list-disc list-inside">Tankstack Query</li>

        <li className="font-semibold text-md mt-4 uppercase">Fitur</li>
        <li className="text-sm text-gray-500 list-disc list-inside">
          Menampilkan seluruh produk & produk best seller
        </li>
        <li className="text-sm text-gray-500 list-disc list-inside">
          Filtering berdasarkan kategori
        </li>
        <li className="text-sm text-gray-500 list-disc list-inside">
          Search produk berdasarkan title
        </li>
        <li className="text-sm text-gray-500 list-disc list-inside">Menampilkan sisa stock produk</li>
        <li className="text-sm text-gray-500 list-disc list-inside">Cart</li>
        <li className="text-sm text-gray-500 list-disc list-inside">Checkout</li>
      </ul>
    </section>
  );
}
