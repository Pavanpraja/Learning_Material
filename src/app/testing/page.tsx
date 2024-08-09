'use client';

import { useRouter } from "next/navigation";

const Testing = ({
  searchParams,
} : {searchParams : {id: string | undefined; include: string | undefined}}) => {
  const router = useRouter();

  return (
    <>
    <div>
      This is testing page
    </div>
    <button className="p-[0.5rem] font-bold shadow-lg" onClick={()=> router.push("/routing")}>Back to routing page</button>
    <div>
      <p>The search value is : {searchParams.id}</p>
    </div>
    </>
  )
}

export default Testing
