import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import HazardButton from "../Buttons/HazardButton";
import Snackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import React, { useState, useEffect } from "react";
import { Stage, Layer, Image as KonvaImage } from "react-konva";
import floor_plan_1 from "/floor_plan_1.png";
import floor_plan_2 from "/floor_plan_2.png";
import floor_plan_3 from "/floor_plan_3.png";
import floor_plan_4 from "/floor_plan_4.png";
import floor_plan_5 from "/floor_plan_5.png";
import floor_plan_6 from "/floor_plan_6.png";
import floor_plan_7 from "/floor_plan_7.png";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

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
  const [open, setOpen] = useState(false);
  // Updated handleChange to match the correct signature
  const handleChange = (_: any, newValue: string | null) => {
    setFloorPlan(newValue);
    console.log("Selected value:", newValue);
  };

  const handleCLick = () => {
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );
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
        <HazardButton
          onClick={handleCLick}
          title="Report A Fire"
        ></HazardButton>{" "}
        <Snackbar
          open={open}
          autoHideDuration={2000}
          onClose={handleClose}
          message="Fire Reported!"
          action={action}
          anchorOrigin={{ vertical: "top", horizontal: "center" }} // Position the Snackbar at the top center
        >
          <Alert
            onClose={handleClose}
            severity="success"
            variant="filled"
            sx={{ width: "100%" }}
          >
            Fire Reported!
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
};

export default MapView;
