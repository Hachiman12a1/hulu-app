import Head from "next/head";
import Nav from "../components/Home/Nav/Nav";
import Results from "../components/Home/Results/Results";
import Footer from "../components/Layout/Footer/Footer";
import Header from "../components/Layout/Header/Header";
import requests from "../utils/requests";

export default function Home({ data }) {
  // console.log(data);
  return (
    <div>
      <Head>
        <title>Hulu app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Nav />

      <Results data={data} />

      <Footer/>
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
