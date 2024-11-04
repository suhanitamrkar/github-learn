import React from "react";
import Fetch from "./Components/Fetch";
import { GetStaticProps, GetStaticPaths } from "next";
import { useRouter } from "next/router";
import path from "path";
import fs from "fs/promises";
import Link from "next/link";

interface dataInterface {
  id: string;
  name: string;
  description: string;
  url: string;
}

const page = () => {
  return (
    <>
      <div>
        <Fetch />
      </div>
    </>
  );
};

export default page;
export async function getStaticParams() {
  const res = await fetch("https://jsonplaceholder.org/posts");
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}
