from PIL import Image
import numpy as np

def convert_image_to_array(image_path):
    # Open the image file
    img = Image.open(image_path)

    # Convert the image to grayscale (so we only deal with one channel)
    gray_img = img.convert('L')

    # Resize the image to make it easier to work with (optional)
    resized_img = gray_img.resize((50, 50))  # Resize to 50x50 pixels, adjust as necessary

    # Convert the grayscale image to a numpy array
    img_array = np.array(resized_img)

    # Normalize the array: set 1 for walkable (lighter areas), 0 for non-walkable (darker areas)
    threshold = 128  # You can adjust this value based on the image
    walkable_array = np.where(img_array > threshold, 1, 0)

    return walkable_array

# Path to the floor plan image
image_path = '../frontend/frontend/public/floor_plan_1.png'  # Replace with the actual path

# Convert the image to a walkable array
floor_plan_array = convert_image_to_array(image_path)

# Print the resulting array
print(floor_plan_array)
