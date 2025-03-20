import BlogBox from "./BlogBox";

const NewBlogs = () => {
  return (
    <section className="container mx-auto flex flex-col gap-[1.5rem]">
      <header className="flex justify-between items-center">
        <h2 className="text-2xl border-r-zinc-500 border-r-2 pr-1">آخرین مقالات</h2>
      </header>
      <div className="flex justify-between items-center flex-wrap gap-2">
        <BlogBox />
        <BlogBox />
        <BlogBox />
        <BlogBox />
      </div>
    </section>
  );
};

export default NewBlogs;
