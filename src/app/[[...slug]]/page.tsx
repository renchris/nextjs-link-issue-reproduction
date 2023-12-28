import Image from 'next/image'
import styles from '../page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <Link
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
          </Link>
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
        <Link
          href="/link-1"
          className={styles.card}
        >
          <h2>
            Link 1 <span>-&gt;</span>
          </h2>
          <p>Click to go to /link-1</p>
        </Link>

        <Link
          href="/link-2"
          className={styles.card}
        >
          <h2>
            Link 2 <span>-&gt;</span>
          </h2>
          <p>Click to go to /link-2</p>
        </Link>

        <Link
          href="/link-3"
          className={styles.card}
        >
          <h2>
            Link 3 <span>-&gt;</span>
          </h2>
          <p>Click to go to /link-3</p>
        </Link>

        <Link
          href="/"
          className={styles.card}
        >
          <h2>
            Home <span>-&gt;</span>
          </h2>
          <p>
            Click to go to /
          </p>
        </Link>
      </div>
    </main>
  )
}
