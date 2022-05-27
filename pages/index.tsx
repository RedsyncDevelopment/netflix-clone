import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import Banner from "../components/pages/HomePage/Banner";
import Header from "../components/pages/HomePage/Header";
import Modal from "../components/pages/HomePage/Modal";
import Row from "../components/pages/HomePage/Row";
import useAuth from "../hooks/useAuth";
import useStore from "../states/store/useStore";
import { Movie } from "../typings";
import requests from "../utils/requests";

interface HomePageProps {
  netflixOriginals: Movie[];
  trendingNow: Movie[];
  topRated: Movie[];
  actionMovies: Movie[];
  comedyMovies: Movie[];
  horrorMovies: Movie[];
  romanceMovies: Movie[];
  documentaries: Movie[];
}

const HomePage: NextPage<HomePageProps> = ({
  netflixOriginals,
  actionMovies,
  comedyMovies,
  documentaries,
  horrorMovies,
  romanceMovies,
  topRated,
  trendingNow,
}) => {
  const showModal = useStore((state) => state.showModal);
  const setShowModal = useStore((state) => state.setShowModal);
  const { loading } = useAuth();
  if (loading) return null;

  return (
    <div className="relative h-screen bg-gradient-to-b lg:h-[140vh]">
      <Head>
        <title>Netflix Clone</title>
        <meta name="description" content="Netflix clone Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
        <Banner netflixOriginals={netflixOriginals} />
        <section className="md:space-y-24">
          <Row title="Trending Now" movies={trendingNow} />
          <Row title="Top Rated" movies={topRated} />
          <Row title="Action Thrillers" movies={actionMovies} />
          {/* My List */}
          {/* {list.length > 0 && <Row title="My List" movies={list} />} */}

          <Row title="Comedies" movies={comedyMovies} />
          <Row title="Scary Movies" movies={horrorMovies} />
          <Row title="Romance Movies" movies={romanceMovies} />
          <Row title="Documentaries" movies={documentaries} />
        </section>
      </main>
      {showModal && <Modal />}
    </div>
  );
};

export default HomePage;

export const getServerSideProps = async () => {
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    axios.get(requests.fetchNetflixOriginals).then((res) => res.data),
    axios.get(requests.fetchTrending).then((res) => res.data),
    axios.get(requests.fetchTopRated).then((res) => res.data),
    axios.get(requests.fetchActionMovies).then((res) => res.data),
    axios.get(requests.fetchComedyMovies).then((res) => res.data),
    axios.get(requests.fetchHorrorMovies).then((res) => res.data),
    axios.get(requests.fetchRomanceMovies).then((res) => res.data),
    axios.get(requests.fetchDocumentaries).then((res) => res.data),
  ]);

  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
    },
  };
};
