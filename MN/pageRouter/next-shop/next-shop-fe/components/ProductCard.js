import Link from "next/link";
import Title from "./shared/Title";
import Image from "next/image";

export const ProductCard = ({ product }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link href={`/products/${product.id}`}>
        {product.picture?.url && (
          <Image
            className="rounded-t-lg"
            src={`${process.env.NEXT_PUBLIC_SERVER_URL}${product.picture?.url}`}
            width={product.picture?.width}
            height={product.picture?.height}
            alt=""
          />
        )}
      </Link>
      <div className="p-5">
        <Link href={`/products/${product.id}`}>
          <Title>{product.title}</Title>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {product.description}
        </p>
        <Link
          href={`/products/${product.id}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};