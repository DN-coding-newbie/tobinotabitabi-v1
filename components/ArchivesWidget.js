import { getArchives } from "@/lib/posts";

export default function ArchivesWidget() {
  const archives = getArchives();
  return (
    <div className="widget archives">
      <h3>Lưu trữ</h3>
      <ul className="list-plain">
        {archives.map((a) => (
          <li key={a.label}>
            <span>{a.label}</span>
            <span className="count">{a.count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
