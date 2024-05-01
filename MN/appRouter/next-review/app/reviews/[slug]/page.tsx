import Heading from "@/components/Heading";
import { getReview, getSlugs } from "@/lib/reviews";
import ShareLinkButton from "@/components/ShareLinkButton";

interface ReviewPageParams {
  slug: string;
}

interface ReviewPageProps {
  params: ReviewPageParams;
}

export async function generateStaticParams(): Promise<ReviewPageParams[]> {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));
}

// here props wo ReviewPage will be props={params: {slug: string}}
export default async function ReviewPage({
  params: { slug }, // destructure params from props then destructuring slug
}: ReviewPageProps) {
  const review = await getReview(slug);
  return (
    <>
      <Heading>{review.title}</Heading>

      <div className="flex align-baseline gap-x-1 justify-items-center content-center">
        <p className="italic pb-2">{review.date}</p>
        <ShareLinkButton />
      </div>

      <img
        src={review.image}
        alt=""
        width="640"
        height="360"
        className="mb-2 rounded"
      />
      <article
        dangerouslySetInnerHTML={{ __html: review.body }}
        className="max-w-screen-sm prose prose-slate"
      />
    </>
  );
}
