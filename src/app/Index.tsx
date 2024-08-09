//page.jsx

//Basically, this is how access the stored state or update the store with state of your component.

"use client";

import GetApiData from "./components/Api_Integration/GetApiData";
import Counter from "./components/counterAction/counter";
// import TouchedCon from "./GlobalRedux/Features/touchedCon";

export default function Index() {

  return (
    <div>
      <Counter />
      <GetApiData />
      {/* <TouchedCon /> */}
    </div>
  )
}