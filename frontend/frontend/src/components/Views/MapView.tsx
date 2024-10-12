import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import floorsLayout from "../floors.ts"
import React, { useState, useEffect } from 'react';
import { Stage, Layer, Image as KonvaImage } from 'react-konva';
import floor_plan_1 from "/floor_plan_1.png"
const MapView = () => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    const img = new window.Image();
    img.src = floor_plan_1; // Use the imported image
    img.onload = () => {
      setImage(img);
    };
  }, []);

  return (
    <div className="h-full flex flex-col overflow-x-hidden align-center justify-center items-center">
      <div>
        <Autocomplete className='rounded-lg bg-white'
        disablePortal
        disableClearable
        options={floorsLayout}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
    />
    </div>
    <div className=''>
    <Stage width={500} height={700}>
      <Layer>
        {/* Render the image when it's loaded */}
        {image && <KonvaImage image={image} x={50} y={50} width={400} height={300} />}
      </Layer>
    </Stage>
    </div>
  </div>
  )
}

export default MapView