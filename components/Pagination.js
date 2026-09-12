import Link from "next/link";

export default function Pagination({ currentPage, totalPages }) {
  const hasPrev = currentPage > 1;
  const hasNext = currentPage < totalPages;

  return (
    <div className="pagination">
      {hasPrev ? (
        <Link href={currentPage - 1 === 1 ? "/" : `/?page=${currentPage - 1}`}>
          ← Mới hơn
        </Link>
      ) : (
        <span className="pagination-disabled">← Mới hơn</span>
      )}

      <span className="pagination-status">
        Trang {currentPage}/{totalPages}
      </span>

      {hasNext ? (
        <Link href={`/?page=${currentPage + 1}`}>Cũ hơn →</Link>
      ) : (
        <span className="pagination-disabled">Cũ hơn →</span>
      )}
    </div>
  );
}
