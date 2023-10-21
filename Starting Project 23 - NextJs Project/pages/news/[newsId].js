import { useRouter } from "next/router";

function DetailsPage() {
  const router = useRouter();
  const newsId = router.query.newsId;
  return <h1>The Details Page {newsId}</h1>;
}

export default DetailsPage;
