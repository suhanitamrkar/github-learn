"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const BlogList = () => {
    const [data,setData] = useState([])
    const [expandedId,setExpandedId] = useState(null)
    const [searchQuery,setSearchQuery] = useState('')

    useEffect(() => {
      const blogs = JSON.parse(localStorage.getItem('myData')||'[]')
      setData(blogs)
    
      
    }, [])
    const toggleExpanded = (id) => {
        setExpandedId(expandedId === id ? null :id)
    }
    let filteredData = data
    if (searchQuery.trim() !== '') {
        filteredData = data.filter(item => item.title.toLowerCase().includes(searchQuery.toLocaleLowerCase()))
    }
    
  return (
    <div>
        
        <div>
            <div className=" "
                style={{ marginTop: '5rem' }}>
                <input
                    type="text"
                    className=" mb-2"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="row">
                    {
                        filteredData.map((item) => (
                            <div key={item.id} className="">
                                <div className="">
                                    <img src={item.imageUrl} 
                                        className="" 
                                        alt="Blog" />
                                    <div className="">
                                        <h5 className="">
                                            {item.title}
                                        </h5>
                                        <p className="">
                                            {
                                                expandedId ===
                                                    item.id ?
                                                    item.description :
                                                    `${item.description.substring(0, 50)}...`
                                            }
                                        </p>
                                        <div className="d-flex justify-content-between 
                                            align-items-center row">
                                            <div>
                                                <p className="m-0 ">
                                                    {"posted by "}
                                                    {item.author}
                                                </p>
                                                <small className="text-muted">
                                                    {item.date}
                                                </small>
                                            </div>
                                        </div>
                                        <Link href={`/blog/${item.id}`}>
                                            <button className=''>
                                                Read more
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogList