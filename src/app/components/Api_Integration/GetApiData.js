"use client";

import { fetchApiData } from "@/app/GlobalRedux/Features/fetchapi";
import { useDispatch, useSelector } from "react-redux";

const GetApiData = () => {
  // const apiUrl = 'https://jsonplaceholder.typicode.com/users';

  const apidata = useSelector((state) => state.fetchApi.data);
  const status = useSelector((state) => state.fetchApi.status);
  const error = useSelector((state) => state.fetchApi.error);

  console.log(apidata);

  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(fetchApiData())}>GetApiData</button>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Error: {error}</p>}
      {status === "succeeded" && (
        <div>
          <li>{apidata.statusCode}</li>
          {
            apidata.data && apidata.data.map((item)=>(
              <div key={item.id} className="my-[1rem]">
              <h1>{item.fullName}</h1>
              <p>{item.authorName}</p>
              <p>{item.bookDescription}</p>
              </div>
            ))
          }
        </div>
      )}
    </div>
  );
};

export default GetApiData;
