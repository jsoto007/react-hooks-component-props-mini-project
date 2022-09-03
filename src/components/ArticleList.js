import React from './React';

function ArticleList({ article }) {
    const articleArray = article.map((item) => <main key={article}>{article}</main> )
    return (
        <main>
            {articleArray}
        </main>
    )
}

export default ArticleList;