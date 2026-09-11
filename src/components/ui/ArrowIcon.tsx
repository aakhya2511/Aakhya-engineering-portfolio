export function ArrowIcon({ external = false }: { external?: boolean }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" width="16" height="16" fill="none">
      {external ? (
        <path d="M5 3h8v8M13 3 3 13" stroke="currentColor" strokeWidth="1.5" />
      ) : (
        <path d="M2 8h11m-4-4 4 4-4 4" stroke="currentColor" strokeWidth="1.5" />
      )}
    </svg>
  );
}
