'use client';

import {createSlice} from '@reduxjs/toolkit'

// // pages/index.tsx
// import React, { useState } from 'react';
// import TextBox from '../page';

// const initialBoxes = [
//   { id: 'box1', text: 'Hello' },
//   { id: 'box2', text: 'World' },
//   { id: 'box3', text: 'Hello' },
//   { id: 'box4', text: 'Next.js' },
//   { id: 'box5', text: 'Pavan' },
//   { id: 'box6', text: 'Next.js' },
//   { id: 'box7', text: 'Pavan' },
//   { id: 'box8', text: 'Frontend' },
//   { id: 'box9', text: 'Next.js' },
//   { id: 'box10', text: 'Frontend' },
//   { id: 'box11', text: 'World' },
// ];

// const TouchedCon = () => {
//   const [boxes, setBoxes] = useState(initialBoxes);
//   const [selectedId, setSelectedId] = useState(null);

//   const handleClick = (id) => {
//     setSelectedId(id);
//   };

//   const selectedBox = boxes.find(box => box.id === selectedId || console.log(box.id));

//   return (
//     <div className="flex flex-wrap gap-4 p-4">
//       {boxes.map(box => (
//         <TextBox
//           key={box.id}
//           id={box.id}
//           text={box.text}
//           className="cursor-pointer"
//           onClick={handleClick}
//           highlight={selectedBox?.text === box.text && selectedBox.id !== box.id}
//         />
//       ))}
//     </div>
//   );
// };

// export default TouchedCon;

const initialState = [
    { id: 'box1', text: 'Hello' },
    { id: 'box2', text: 'World' },
    { id: 'box3', text: 'Hello' },
    { id: 'box4', text: 'Next.js' },
    { id: 'box5', text: 'Pavan' },
    { id: 'box6', text: 'Next.js' },
    { id: 'box7', text: 'Pavan' },
    { id: 'box8', text: 'Frontend' },
    { id: 'box9', text: 'Next.js' },
    { id: 'box10', text: 'Frontend' },
    { id: 'box11', text: 'World' },
  ];

export const touchedConSlice = createSlice({
    name: 'touched_box',
    initialState,
    reducers:{
        selectBox: (state)=>{
            state = state.payload;
        }
    }
})

export const { selectBox } = touchedConSlice.actions;

export default touchedConSlice.reducer;