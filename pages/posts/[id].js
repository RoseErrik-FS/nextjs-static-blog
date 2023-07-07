import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Date from "../../components/date";
import Link from "next/link";

export default function Post({ postData, nextPostId, prevPostId }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className="mt-6 text-3xl text-center">{postData.title}</h1>
        <div className="mt-2 mb-2 text-gray-600">
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        {postData.image && (
          <div className="mt-2 mb-2">
            <img src={postData.image} alt={postData.alt} />
          </div>
        )}
      </article>
      <div className="flex justify-between my-4">
        {prevPostId && (
          <Link className="text-blue-500" href={`/posts/${prevPostId}`}>
            ← Previous Post
          </Link>
        )}
        {nextPostId && (
          <Link className="text-blue-500" href={`/posts/${nextPostId}`}>
            Next Post →
          </Link>
        )}
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const allPostIds = getAllPostIds();
  const postData = await getPostData(params.id);

  const currentPostIndex = allPostIds.findIndex(
    (idObj) => idObj.params.id === params.id
  );
  const nextPostId = allPostIds[currentPostIndex + 1]?.params.id || null;
  const prevPostId = allPostIds[currentPostIndex - 1]?.params.id || null;

  return {
    props: {
      postData,
      nextPostId,
      prevPostId,
    },
  };
}
