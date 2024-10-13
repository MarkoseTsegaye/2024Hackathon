import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import floorsLayout from "../floors.ts";
import HazardButton from "../Buttons/HazardButton";

import React, { useState, useEffect } from "react";
import { Stage, Layer, Image as KonvaImage } from "react-konva";
import floor_plan_1 from "/floor_plan_1.png";
import floor_plan_2 from "/floor_plan_2.png";
import floor_plan_3 from "/floor_plan_3.png";
import floor_plan_4 from "/floor_plan_4.png";
import floor_plan_5 from "/floor_plan_5.png";
import floor_plan_6 from "/floor_plan_6.png";
import floor_plan_7 from "/floor_plan_7.png";

const imageMap: { [key: string]: string } = {
  "Floor 1": floor_plan_1,
  "Floor 2": floor_plan_2,
  "Floor 3": floor_plan_3,
  "Floor 4": floor_plan_4,
  "Floor 5": floor_plan_5,
  "Floor 6": floor_plan_6,
  "Floor 7": floor_plan_7,
};

const MapView: React.FC = () => {
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const [floorPlan, setFloorPlan] = useState<string | null>(null);

  const handleChange = (
    event: React.SyntheticEvent,
    newValue: string | null
  ) => {
    setFloorPlan(newValue);
    console.log("Selected value:", newValue);
  };

  useEffect(() => {
    if (floorPlan) {
      const img = new window.Image();
      img.src = imageMap[floorPlan]; // Use the selected floor plan's image
      img.onload = () => {
        setImage(img);
      };
    }
  }, [floorPlan]); // Re-run when floorPlan changes

  return (
    <div className="h-full flex flex-col overflow-x-hidden justify-center items-center">
      <div>
        <Autocomplete
          className="rounded-lg bg-white"
          disablePortal
          disableClearable
          options={Object.keys(imageMap)} // Use the keys from imageMap as options
          onChange={handleChange} // Corrected to use the handleChange function
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField {...params} label="Choose Floor" />
          )}
        />
      </div>
      <div className="">
        <Stage width={500} height={480}>
          <Layer>
            {/* Render the image when it's loaded */}
            {image && (
              <KonvaImage
                image={image}
                x={50}
                y={50}
                width={400}
                height={480}
              />
            )}
          </Layer>
        </Stage>
      </div>
      <div className="w-full">
        <HazardButton title="Report A Fire"></HazardButton>{" "}
      </div>
    </div>
  );
};

export default MapView;
