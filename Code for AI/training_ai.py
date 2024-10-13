import os
import json
from PIL import Image

# Directory where the maze images are stored
maze_directory = r"C:\Users\alokh\Downloads\2024Hackathon-main\2024Hackathon\maze_images"
output_jsonl = 'mazes_data.jsonl'

# Solutions for each maze
solutions = [
    # Solution for maze_image1
    "Move right, down, right, up, right, down, left, down, right, up, right, down.",
    # Solution for maze_image2
    "Move right, down, down, left, up, right, right, down, down.",
    # Solution for maze_image3
    "Move down, right, down, right, up, right, down, left.",
    # Solution for maze_image4
    "Move right, up, left, down, right, right, down.",
    # Solution for maze_image5
    "Move down, right, right, up, left, down, right, down.",
    
    # Placeholder solutions for maze_image6 to maze_image10
    "Move right, down, left, down, right, down, right, up, right, down.",  # Solution for maze 6
    "Move right, down, right, up, right, down, left, down, right.",  # Solution for maze 7
    "Move down, right, right, up, left, down, right, right, down.",  # Solution for maze 8
    "Move down, right, up, right, down, left, down, right, right.",  # Solution for maze 9
    "Move down, right, up, left, down, right, up, left, down, right, down."  # Solution for maze 10
]

# Function to convert maze image to grid
def convert_maze_to_grid(image_path):
    img = Image.open(image_path).convert('L')  # Convert to grayscale

    # Convert the image to a grid with walls (X) and paths ( )
    pixels = img.load()
    maze_grid = []
    for i in range(img.size[1]):  # height
        row = []
        for j in range(img.size[0]):  # width
            if pixels[j, i] < 128:  # Dark pixels as walls
                row.append('X')
            else:
                row.append(' ')
        maze_grid.append(row)

    # Return the maze grid as a string for the JSONL prompt
    return "\n".join(["".join(row) for row in maze_grid])

# Open the JSONL file for writing
with open(output_jsonl, 'w') as jsonl_file:
    # Loop through maze_image1.png to maze_image10.png
    for idx in range(1, 11):
        maze_image = f"maze_image{idx}.png"  # Image file name format: maze_image1.png, maze_image2.png, ...
        image_path = os.path.join(maze_directory, maze_image)

        # Check if the image file exists before processing
        if not os.path.exists(image_path):
            print(f"Image file not found: {image_path}")
            continue

        # Convert the maze image to a grid (text format)
        maze_grid_text = convert_maze_to_grid(image_path)

        # Prepare the prompt (maze grid) and completion (solution)
        data_entry = {
            "prompt": maze_grid_text,  # Maze grid as text
            "completion": solutions[idx - 1]  # Corresponding solution for the maze
        }

        # Write the entry to the JSONL file
        jsonl_file.write(json.dumps(data_entry) + '\n')

print(f"JSONL file with 10 mazes created successfully: {output_jsonl}")
