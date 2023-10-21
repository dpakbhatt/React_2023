import Link from "next/link";

function NewsPage() {
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/testing-1">Testing 1</Link>
        </li>
        <li>
          <Link href="/news/testing-2">Testing 2</Link>
        </li>
      </ul>
    </>
  );
}

export default NewsPage;
