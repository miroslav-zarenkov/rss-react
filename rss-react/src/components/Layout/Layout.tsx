import styles from './Layout.module.css';

type LayoutProps = {
  children: React.ReactNode;
  totalPages?: number;
  currentPage?: number;
  onPageChange?: (newPage: number) => void;
  handlePerPageChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

function Layout({ children }: LayoutProps) {
  return <main className={styles.main}>{children}</main>;
}

export default Layout;
