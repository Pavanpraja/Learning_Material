'use client';

import { useRouter, useSearchParams } from "next/navigation";

const Routing = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams?.get("id");
  const title = searchParams?.get("title");

  const data = { id: id || "", title: title || "" };
  return (
    <div>
      <button className="p-[0.5rem] shadow-lg font-bold" onClick={()=> router.push("/testing")}>click</button>
      <div>{JSON.stringify(data, undefined, 2)}</div>
      <p>{id}</p>
      <p>{data.title}</p>
    </div>
  )
}

export default Routing
