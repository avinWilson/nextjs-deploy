import React from 'react';
import style from "../styles/Article.module.css"
import Link from 'next/link';

const ArticleItem = ({article}) => {
    return (
        <Link href="/article/[id]" as={`/article/${article.id}`}>
            <a className={article.card}>
                <h3>{article.title} &rarr;</h3>
                <p>{article.body}</p>
            </a>
        </Link>
    );
}

export default ArticleItem;
