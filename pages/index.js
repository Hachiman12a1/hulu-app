import Head from "next/head";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import Results from "../components/Results/Results";
import requests from "../utils/requests";

export default function Home({ data }) {
  console.log(data);
  return (
    <div>
      <Head>
        <title>Hulu app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Nav />

      <Results data={data} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      data: request.results,
    },
  };
}
