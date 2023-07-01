import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="mb-10 text-center my-6">
        <p className="text-xl">
          I'm Errik Rose and I am learning React and Next.js among other things.
        </p>
      </section>
      <section className="my-6 px-3 mb-10">
        <h2 className="text-4xl mb-10 font-bold">Blog</h2>
        <ul className="list-none p-0 m-0">
          {allPostsData.map(({ id, date, title }) => (
            <li className="mb-5" key={id}>
              <Link
                className="text-blue-600 hover:text-blue-800"
                href={`/posts/${id}`}
              >
                {title}
              </Link>
              <br />
              <small className="text-gray-600">
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
