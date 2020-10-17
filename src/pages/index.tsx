import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilsStyles from '../../styles/utils.module.css'
import { getSortedPostsData } from '../../lib/post'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'

export default function Home(
  { allPostsData }:{
		allPostsData: {
			date: string
			title: string
			id: string
		}[]
	}) {
  return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilsStyles.headingMd}>
				<p>I'm engineer.</p>
			</section>
			<section className={`${utilsStyles.headingMd} ${utilsStyles.padding1px}`}>
				<h2 className={utilsStyles.headingLg}>Blog</h2>
				<ul className={utilsStyles.list}>
					{allPostsData.map(({ id, date, title }) => (
						<li className={utilsStyles.listItem} key={id}>
							<Link href={`/posts/${id}`}>
								<a>{title}</a>
							</Link>
							<br />
							<small className={utilsStyles.lightText}>
								<Date dateString={date} />
							</small>
						</li>
					))}
				</ul>
			</section>
		</Layout>
  )
}

export const getStaticProps: GetStaticProps = async() => {
	const allPostsData = getSortedPostsData()
	return {
		props: {
			allPostsData
		}
	}
}
