import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
// import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingBar from 'react-top-loading-bar';

const News = (props) => {
  const [article,setArticle] =  useState([]);
  const [loading,setLoading] =  useState(true);
  const [page,setPage] =  useState(1);
  const [totalRecords,setTotalRecords] =  useState(0);
  // const [lastPage,setLastPage] =  useState(0);
  // const [pageSize,setPageSize] =  useState(props.page_size);
  const [progress,setProgress] =  useState(0);
  const [progressSize,setProgressSize] =  useState(0);


  const getApiData = async (bool) => {
    setLoading(true);
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${process.env.REACT_APP_API_KEY}&pageSize=${props.page_size}&page=${(bool === 1 ? page+1 : page)}`;
    // let data = await fetch(url);
    let data = {};
    let parsedData = await data.json();
    // let last_page = Math.ceil(parsedData.totalResults / pageSize);
    
    if(bool === 1){
      setArticle(article.concat(parsedData.articles));
      setPage(page + 1);
      setProgress(progress + progressSize);
    }else{
      let page_percent = Math.ceil((100 / parsedData.totalResults) * props.page_size);
      setArticle(parsedData.articles);
      setTotalRecords(parsedData.totalResults);
      setProgress(page_percent);
      // setLastPage(last_page);
      setLoading(false);
      setProgressSize(page_percent);
    }
    
    return parsedData;
  }

  useEffect(() => {  
    getApiData(0);
  },[]);

  const fetchMoreData = () => {
    setTimeout(() => {
      getApiData(1);
    }, 1500);
  };

    return (
      <>
        {/* <div>This is news Component</div> */}
          {!loading && (
            <h1 className="text-center">This is newsmonkey headlines</h1>
          )}
          {loading && <Spinner></Spinner>}
          <LoadingBar
          color='#f11946'
          progress={progress}
          onLoaderFinished={0}
          />
          <InfiniteScroll
            dataLength={article.length}
            next={fetchMoreData}
            hasMore={article.length !== totalRecords}
            loader={<Spinner />}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! Tum sab pakde gaye ho</b>
              </p>
            }
          >
            <div className="container">
              <div className="row">
                {!loading &&
                  article.map((element) => {
                    return (
                      <div className="col-md-4" key={element.url}>
                        <NewsItem
                          title={element.title}
                          description={element.description}
                          imageUrl={element.urlToImage}
                          url={element.url}
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
          </InfiniteScroll>
        {/* {!loading && <div className="container d-flex justify-content-between">
          <button type="button" disabled={page <= 1} className="btn btn-dark" onClick={() => this.handleClick('prev')}>&larr; Previous</button>
          <button type="button" disabled={page === lastPage} className="btn btn-dark" onClick={() => this.handleClick('next')}>Next &rarr;</button>
        </div>} */}
      </>
    );
}

export default News;
