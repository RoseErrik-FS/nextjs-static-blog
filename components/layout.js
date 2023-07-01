import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const name = "Errik Rose";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
  return (
    <div className="mx-auto px-4 max-w-xl py-12">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
      </Head>
      <header className="flex flex-col items-center">
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className="rounded-full"
              height={144}
              width={144}
              alt={name}
            />
            <h1 className="text-5xl mt-4">{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className="rounded-full"
                height={144}
                width={144}
                alt={name}
              />
            </Link>
            <h2 className="text-5xl mt-4">
              <Link className="text-current" href="/">
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className="mt-12">
          <Link className="text-blue-600 hover:text-blue-800" href="/">
            ← Back to home
          </Link>
        </div>
      )}
    </div>
  );
}
