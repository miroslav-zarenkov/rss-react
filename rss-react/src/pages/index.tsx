import Content from '@/components/Content/Content';
import Header from '@/components/Header/Header';
import type { GetServerSideProps } from 'next';

type Repo = {
  name: string;
  stargazers_count: number;
};

export const getServerSideProps = (async (context) => {
  const res = await fetch('https://api.github.com/repos/vercel/next.js');
  const repo = await res.json();
  return { props: { repo } };
}) satisfies GetServerSideProps<{
  repo: Repo;
}>;

const Home = ({ repo }: { repo: Repo }) => {
  return (
    <>
      <Header />
      <Content repo={repo} />
    </>
  );
};

export default Home;
