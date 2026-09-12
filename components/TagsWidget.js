import { getAllTags } from "@/lib/posts";

export default function TagsWidget() {
  const tags = getAllTags();
  return (
    <div className="widget tags">
      <h3>Tags</h3>
      <div className="tag-cloud">
        {tags.map((tag) => (
          <a key={tag} href="#">
            {tag}
          </a>
        ))}
      </div>
    </div>
  );
}
