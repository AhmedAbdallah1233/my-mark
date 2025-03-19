/* eslint-disable @typescript-eslint/no-unused-vars */
import Mdx from "@/components/mdx-components";
import { allPosts } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { getMDXComponent } from "next-contentlayer2/hooks";

interface PostPageProps {
  params: {
    slug: string;
  };
}

// const page = () => {
//   return <div>postPage</div>;
// };

export default function PostPage({ params }: PostPageProps) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post?.body.code) {
    return <div>No Post Here!</div>;
  }
  const Content = getMDXComponent(post.body.code);
  return (
    <article className="py-8 mx-auto max-w-xl">
      <div className="mb-8 text-center">
        <time dateTime={post.date}>
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
        <h1>{post.title}</h1>
      </div>

      <Mdx code={post.body.code} />
      <Content />
      {/* <div
        className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0"
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      /> */}
    </article>
  );
}
