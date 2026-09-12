import Link from "next/link";
import { getCategoriesWithCount } from "@/lib/posts";

export default function CategoriesWidget() {
  const categories = getCategoriesWithCount();
  return (
    <div className="widget categories">
      <h3>Categories</h3>
      <ul className="list-plain">
        {categories.map((c) => (
          <li key={c.slug}>
            <Link href={`/category/${c.slug}`}>{c.name}</Link>
            <span className="count">{c.count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
