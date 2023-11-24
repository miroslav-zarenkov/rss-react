type Repo = {
  name: string;
  stargazers_count: number;
};

export default function Content({ repo }: { repo: Repo }) {
  return <div>test {repo.stargazers_count};</div>;
}
