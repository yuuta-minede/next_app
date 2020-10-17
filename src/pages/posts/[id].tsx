import Head from 'next/head'
import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../../lib/post'
import Date from '../../components/date'
import utilStyles from '../../../styles/utils.module.css'
import { GetStaticProps, GetStaticPaths } from 'next'

export default function Post({
	postData
 	}:{
		postData :{
			title:string
			date:string
			contentHtml:string
		}
	}) {
	return (
	<Layout>
		<Head>
		<title>{postData.title}</title>
		</Head>
		<article>
			<h1 className={utilStyles.headingXl}>{postData.title}</h1>
			<div className={utilStyles.lightText}>
				<Date dateString={postData.date} />
			</div>
			<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
		</article>
	</Layout>
	)
}

export const  getStaticPaths :GetStaticPaths = async () => {
	// id としてとりうる値のリストを返す
	const paths = getAllPostIds()
	return {
		paths,
		fallback: false
	}
}

export const  getStaticProps: GetStaticProps = async ({ params }) =>{
	// params.id を使用して、ブログの投稿に必要なデータを取得する
	const postData = await getPostData(params.id as string)
	return {
		props: {
			postData
		}
	}
}
