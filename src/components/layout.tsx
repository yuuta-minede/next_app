import Head from 'next/head'
import styles from './layout.module.css'
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'

const Title = 'Hello World'
const name = 'Yuta Minede'
export const siteTitle = 'My Blog'

export default function Layout({ children, home }:{children:React.ReactNode, home?:boolean}) {
	return (
		<div className={styles.container}>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="description"
					content="Learn how to build a personal website using Next.js"
				/>
				<meta
					property="og:image"
					content={`https://og-image.now.sh/${encodeURI(
						siteTitle
					)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
				/>
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<header className={styles.header}>
				{home ? (
					<>
						<h1 className={utilStyles.heading2Xl}>{Title}</h1>
						<img
							src="/images/profile.jpg"
							className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
							alt={name}
						/>
						<h2 className={utilStyles.headingLg}>{name}</h2>
					</>
				) : (
						<>
							<Link href="/">
								<a>
									<img
										src="/images/profile.jpg"
										className={`${styles.headerImage} ${utilStyles.borderCircle}`}
										alt={name}
									/>
								</a>
							</Link>
							<h2 className={utilStyles.headingLg}>
								<Link href="/">
									<a className={utilStyles.colorInherit}>{name}</a>
								</Link>
							</h2>
						</>
					)}
			</header>
			<main>{children}</main>
			{!home && (
				<div className={styles.backToHome}>
					<Link href="/">
						<a>← Back to home</a>
					</Link>
				</div>
			)}
			<footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
					<img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
		</div>
	)
}
