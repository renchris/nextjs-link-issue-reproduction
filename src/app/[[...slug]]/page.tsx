import Image from 'next/image'
import styles from '../page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="/link-1"
          className={styles.card}
        >
          <h2>
            Link 1 <span>-&gt;</span>
          </h2>
          <p>Click to go to /link-1</p>
        </a>

        <a
          href="/link-2"
          className={styles.card}
        >
          <h2>
            Link 2 <span>-&gt;</span>
          </h2>
          <p>Click to go to /link-2</p>
        </a>

        <a
          href="/link-3"
          className={styles.card}
        >
          <h2>
            Link 3 <span>-&gt;</span>
          </h2>
          <p>Click to go to /link-3</p>
        </a>

        <a
          href="/"
          className={styles.card}
        >
          <h2>
            Home <span>-&gt;</span>
          </h2>
          <p>
            Click to go to /
          </p>
        </a>
      </div>
    </main>
  )
}
