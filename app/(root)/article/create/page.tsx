import ArticleForm from "@/components/ArticleForm";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await auth();

  if (!session) redirect("/");

  return (
    <>
      <section className="pink_container !min-h-[230px]">
        <h1 className="heading">Submit Your Blog Posts</h1>
      </section>

      <ArticleForm />
    </>
  );
};

export default Page;
