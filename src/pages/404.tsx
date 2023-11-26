import Link from 'next/link';

const Custom404 = () => {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>
        <span>Sorry, the page you are looking for does not exist. </span>
        <Link href="/">
          <span>Go back to the homepage.</span>
        </Link>
      </p>
    </div>
  );
};

export default Custom404;
