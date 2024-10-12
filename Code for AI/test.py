import heapq
import requests

# Azure OpenAI Setup
API_URL = "https://fire-ai-test.openai.azure.com/"
API_KEY = "24b9c7d7b23d4a369378e7c0505f9505"

# Define Node class for pathfinding
class Node:
    def __init__(self, position, parent=None):
        self.position = position
        self.parent = parent
        self.g = 0  # Distance from start node
        self.h = 0  # Heuristic (estimated distance to goal)
        self.f = 0  # Total cost (g + h)

    # Comparison method to allow heap operations
    def __lt__(self, other):
        return self.f < other.f


# A* Search Algorithm
def a_star_search(start, end, grid):
    open_list = []
    closed_list = set()
    start_node = Node(start)
    end_node = Node(end)
    heapq.heappush(open_list, (start_node.f, start_node))

    while open_list:
        _, current_node = heapq.heappop(open_list)

        # Check if we have reached the goal (exit)
        if current_node.position == end_node.position:
            return reconstruct_path(current_node)

        closed_list.add(current_node.position)

        # Generate children (neighbors)
        for new_position in [(0, 1), (0, -1), (1, 0), (-1, 0)]:  # 4 directions (right, left, down, up)
            node_position = (current_node.position[0] + new_position[0], current_node.position[1] + new_position[1])

            # Check if within bounds of the grid
            if not (0 <= node_position[0] < len(grid) and 0 <= node_position[1] < len(grid[0])):
                continue

            # Ignore blocked paths (X), leased areas (L), or retail spaces (R)
            if grid[node_position[0]][node_position[1]] in ['X', 'L', 'R']:
                continue

            child_node = Node(node_position, current_node)

            if child_node.position in closed_list:
                continue

            # Calculate g, h, and f
            child_node.g = current_node.g + 1
            child_node.h = abs(child_node.position[0] - end_node.position[0]) + abs(child_node.position[1] - end_node.position[1])
            child_node.f = child_node.g + child_node.h

            # Check if the child is already in the open list with a lower f
            if any(open_node[1].position == child_node.position and open_node[1].f <= child_node.f for open_node in open_list):
                continue

            heapq.heappush(open_list, (child_node.f, child_node))

    return None  # No path found

# Reconstruct the path
def reconstruct_path(current_node):
    path = []
    while current_node is not None:
        path.append(current_node.position)
        current_node = current_node.parent
    return path[::-1]  # Reverse the path

# Update the grid with real-time user inputs (e.g., blocked paths or fire)
def update_grid_with_user_input(grid, user_reports):
    for report in user_reports:
        position = report['position']
        status = report['status']

        if status == 'fire' or status == 'blocked':
            grid[position[0]][position[1]] = 'X'  # Mark as blocked or fire area

    return grid

# Main function to compute the safe route
def compute_safe_route(start_position, exit_position, building_layout, user_reports):
    updated_layout = update_grid_with_user_input(building_layout, user_reports)
    safe_route = a_star_search(start_position, exit_position, updated_layout)

    if safe_route:
        return safe_route
    else:
        return "No safe route found"

# Communicate with Azure OpenAI API to generate directions based on route
def generate_instructions_from_route(route):
    if not route or route == "No safe route found":
        return "No safe route available. Please remain in place and await instructions."

    # Prepare prompt for Azure OpenAI model
    route_description = " -> ".join([f"({x},{y})" for x, y in route])
    prompt = f"Generate step-by-step evacuation instructions for the following route in a building: {route_description}. Make it clear and easy to follow."

    # Send the request to Azure OpenAI API
    headers = {
        'Content-Type': 'application/json',
        'api-key': API_KEY
    }
    data = {
        "prompt": prompt,
        "max_tokens": 150,
        "temperature": 0.7,
        "top_p": 0.9
    }
    
    response = requests.post(API_URL, headers=headers, json=data)
    
    if response.status_code == 200:
        result = response.json()
        return result['choices'][0]['text'].strip()
    else:
        return "Error generating instructions. Please try again."

# Detailed first-floor layout
# 'L': Leased Area, 'R': Retail, 'G': GMU Area, 'S': Shared Lab, 'A': Amenities, 'X': Blocked, ' ': Walkable, 'E': Exit
building_layout = [
    ['L', 'L', 'L', 'L', ' ', ' ', ' ', 'E'],  # Row 1 (Leased areas, some walkable paths, and an exit)
    ['L', 'L', 'L', 'L', ' ', 'X', ' ', ' '],  # Row 2 (Leased, blocked path due to fire or obstruction)
    [' ', ' ', ' ', 'G', 'G', 'G', ' ', ' '],  # Row 3 (George Mason University Area)
    ['R', 'R', 'R', 'S', 'S', 'S', ' ', ' '],  # Row 4 (Retail and shared lab)
    [' ', ' ', ' ', 'A', 'A', 'A', ' ', ' '],  # Row 5 (Amenities and walkable paths)
]

# Starting position ('S' for the user at (4, 0)) and an exit ('E' at (0, 7))
start_position = (4, 0)
exit_position = (0, 7)

# Simulated user reports (e.g., blocked paths or fire locations)
user_reports = [
    {'position': (1, 5), 'status': 'fire'},  # Blocked path due to fire
    {'position': (3, 1), 'status': 'blocked'},  # Blocked path for some reason
]

# Compute the safest route
route = compute_safe_route(start_position, exit_position, building_layout, user_reports)
print("Safe Route:", route)

# Generate human-readable instructions using Azure OpenAI
instructions = generate_instructions_from_route(route)
print("Instructions for Evacuation:", instructions)
