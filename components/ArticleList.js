import React from "react";
import style from "../styles/Article.module.css";
import ArticleItem from "./ArticleItem";

const ArticleList = ({article}) => {
  return (
    <div className={style.grid}>
        {article && article.map((article) => 
        <ArticleItem article={article} />
        )}
    </div>
  );
};

export default ArticleList;
