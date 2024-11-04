import React from "react";





const Fetch = async () => {
  let data = await fetch("https://jsonplaceholder.org/posts");
  let posts = await data.json();
  console.log(posts);
 
  
 
  return (
    <div className="pl-3 grid grid-cols-3 bg-[#121212] ">
      {posts.map((post) => (
        <div class="relative flex flex-col my-6 bg-[#2D2D2D] shadow-sm border border-slate-200 rounded-lg w-96">
          <div class="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
            <img src={post.image} />
          </div>
          <div class="p-4">
            <h6 class="mb-2 text-white text-xl font-semibold">{post.title.slice(0,50)}</h6>
            <p class="text-white leading-normal font-light">
             {post.content.slice(0,100)}....
            </p>
          </div>
          <div class="px-4 pb-4 pt-0 mt-2">
            <button
              class="rounded-md bg-[#03DAC6] py-2 px-4 border border-transparent text-center text-sm text-black transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Read more
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Fetch;
