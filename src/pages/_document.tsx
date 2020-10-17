// サーバーサイドでのみ実行される共通処理
import React from 'react'
import DocumentBase, { Head, Html, Main, NextScript } from 'next/document'

class Document extends DocumentBase {
	// 初期データが必要な時に実行
	// static async getInitialProps(ctx){
	// 	const initialProps = await Document.getInitialProps(ctx)
	// 	return {...initialProps}
	// }

	render(){
		return (
			<Html>
				<Head>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default Document;
