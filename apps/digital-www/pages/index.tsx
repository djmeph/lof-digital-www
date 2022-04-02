import styles from './index.module.scss';

export function Index() {
  return (
    <main className='container'>
      <div className={styles.page}>
        <h1 className="page-title">
          Welcome to digital-www!
        </h1>
      </div>
    </main>
  );
}

export default Index;
