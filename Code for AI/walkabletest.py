import cv2
import numpy as np

# Function to convert floor plan image to a walkable array
def convert_floor_plan_image(image_path):
    # Load the image
    image = cv2.imread(image_path)

    # Convert the image to grayscale
    gray_image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

    # Apply binary thresholding
    _, binary_image = cv2.threshold(gray_image, 127, 255, cv2.THRESH_BINARY_INV)

    # Convert binary image to a 2D array (0s and 1s)
    walkable_array = (binary_image / 255).astype(int)

    return walkable_array

# Path to your floor plan image
image_path = '2024Hackathon\frontend\frontend\public\floor_plan_1.png'  # Change this to your image path

# Convert the floor plan image to a walkable array
floor_plan_array = convert_floor_plan_image(image_path)

# Print the resulting array
print(floor_plan_array)