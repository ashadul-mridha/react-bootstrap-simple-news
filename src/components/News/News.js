import React, { useEffect, useState } from 'react';
import {Row , Spinner } from 'react-bootstrap';
import Article from '../Article/Article';

const News = () => {
    const [news , setNews] = useState([]);

    useEffect(() => {

        fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-08-28&sortBy=publishedAt&apiKey=dea424b73ca645cf8a0a0c7b07befbeb')
        .then(res => res.json())
        .then(data => setNews(data.articles))
    },[])
    return (
        <div>
            {
                news.length === 0 ?  <Spinner animation="border" /> :
                <Row xs={1} md={2} className="g-4">
                
                {
                    news.map( news => <Article news={news}></Article>)
                }
            
            </Row>
            }
            
        </div>
    );
};

export default News;