import Link from "next/link";

export default function NotFound() {
  return <section className="not-found shell"><p className="eyebrow">404 / Not found</p><h1>This route isn&apos;t in the system.</h1><Link className="button" href="/">Return home</Link></section>;
}
