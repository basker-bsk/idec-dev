import Link from "next/link";
export default function Links({ data, className }) {
  return (
    <Link
      id={data.linkId}
      className={`${className && className} ${data.linkClass}`}
      href={data.linkUrl}
      target={data.linkNewWindow ? "_blank" : "_self"}
    >
      {data.linkText}
    </Link>
  );
}
