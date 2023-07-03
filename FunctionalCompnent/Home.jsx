import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import InfiniteScroll from "react-infinite-scroll-component";
export default function Home(props) {
    var [articles,setarticles]=useState([])
    var [totalResults,settotalresult]=useState(0)
    var [page,setpage]=useState(1)
    const getAPIData = async () => {
        var response = ""
        if (props.search)
            response = await fetch(`https://newsapi.org/v2/everything?q=${props.search}&page=1&pagesize=24&language=${props.language}&apiKey=54f885ba9e624bd4a2fc3e08823c0b19`)
        else
            response = await fetch(`https://newsapi.org/v2/everything?q=${props.q}&page=1&pagesize=24&language=${props.language}&apiKey=54f885ba9e624bd4a2fc3e08823c0b19`)
        var result = await response.json()
      setarticles(result.articles)
      settotalresult(result.totalResults)
    }
   const fetchMoreData = async () => {
        setpage(page+1)
        var response = ""
        if (props.search)
            response = await fetch(`https://newsapi.org/v2/everything?q=${props.search}&page=${page}&pagesize=24&language=${props.language}&apiKey=54f885ba9e624bd4a2fc3e08823c0b19`)
        else
            response = await fetch(`https://newsapi.org/v2/everything?q=${props.q}&page=${page}&pagesize=24&language=${props.language}&apiKey=54f885ba9e624bd4a2fc3e08823c0b19`)
        var result = await response.json()
        setarticles(articles.concat(result.articles))
    }
  useEffect(()=>{
    getAPIData()
  },[props])
        return (
            <>
                <div className="comtainer-fluid m-1">
                    <InfiniteScroll
                        dataLength={articles.length}
                        next={fetchMoreData}
                        hasMore={articles.length <totalResults}
                        loader={
                            <div>
                                <button className="btn background " type="button" disabled>
                                    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                    <span className="visually-hidden">Loading...</span>
                                </button>
                                <button className="btn btn-smbackground" type="button" disabled>
                                    <span className="spinner-border spinner-border-sm " role="status" aria-hidden="true"></span>
                                    Loading...
                                </button>
                            </div>
                        }
                    >
                        <div className="row">

                            <h5 className='background text-center'>{props.q} News</h5>
                            {
                                articles.map((item, index) => {
                                    return <NewsItem
                                        key={index}
                                        pic={item.urlToImage}
                                        title={item.title}
                                        description={item.description}
                                        source={item.source.name}
                                        date={item.publishedAt}
                                        url={item.url}
                                    />

                                })
                            }

                        </div>
                    </InfiniteScroll>
                </div>

            </>
        )
    
}


