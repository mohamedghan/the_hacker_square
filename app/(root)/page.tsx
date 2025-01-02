import SearchForm from "@/components/SearchForm";
import ArticleCard, { ArticleTypeCard } from "@/components/ArticleCard";
import { ARTICLES_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { auth } from "@/auth";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const params = { search: query || null };

  const session = await auth();

  console.log(session?.id);

  const { data: posts } = await sanityFetch({ query: ARTICLES_QUERY, params });

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          The Hacker Square, <br />
          Connect With Hackers
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit your Blog Posts and Get Noticed!
        </p>

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Blog posts"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: ArticleTypeCard) => (
              <ArticleCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No articles found</p>
          )}
        </ul>
      </section>

      <SanityLive />
    </>
  );
}
