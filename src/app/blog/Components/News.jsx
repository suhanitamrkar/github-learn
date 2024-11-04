import Link from "next/link";
import React from "react";

const News = async () => {
    let data = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=13475e7197ee41f7b1306c779397db89");
    let news = await data.json();
    let articles= news.articles
   
    console.log(news);
  
  return (
    <div className="grid grid-cols-3">
         {articles.map((post) => (
      <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
      <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
        <h1>{post. publishedAt} </h1>
        <img
          src={post.urlToImage}
          alt="card-image"
        />
      </div>
      <div className="p-4">
        <h6 className="mb-2 text-slate-800 text-xl font-semibold">
          {post.title.slice(0,30)}....
        </h6>
        <p className="text-slate-600 leading-normal font-light">
          {post.description}
        </p>

       
      </div>
      <div className="px-4 pb-4 pt-0 mt-2">
        <Link
        href={post.url}
      
          className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        
        >
          Read more
        </Link>
      </div>
    </div>
      ))}
      
    </div>
  );
};

export default News;
