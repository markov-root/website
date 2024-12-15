import json
import sys
from typing import Dict, List, Any
from pathlib import Path

def load_json_data(file_path: str) -> List[Dict[str, Any]]:
    """Load JSON data from a file."""
    try:
        # If the input is a string of JSON data
        if file_path.strip().startswith('{'):
            return json.loads(f"[{file_path}]")
        # If the input is a file path
        with open(file_path, 'r', encoding='utf-8') as f:
            return json.load(f)
    except Exception as e:
        print(f"Error loading JSON: {e}")
        sys.exit(1)

def categorize_content(data: List[Dict[str, Any]]) -> Dict[str, List[Dict[str, Any]]]:
    """Separate content based on tags."""
    content_types = {
        'manwha': [],
        'manga': [],
        'graphic-novels': [],
        'young-novels': [],
        'western-comic': [],
        'books': []
    }
    
    # Tag mapping to handle variations
    tag_mapping = {
        'graphic-novel': 'graphic-novels',
        'graphic-novels': 'graphic-novels',
        'young-adult': 'young-novels',
        'young-novels': 'young-novels',
        'western-comic': 'western-comic',
        'western-comics': 'western-comic',
        'manga': 'manga',
        'manwha': 'manwha'
    }
    
    for item in data:
        if 'tags' in item and item['tags']:
            categorized = False
            for tag in item['tags']:
                normalized_tag = tag.lower()
                if normalized_tag in tag_mapping:
                    category = tag_mapping[normalized_tag]
                    content_types[category].append(item)
                    categorized = True
                    break
            
            # If item wasn't categorized into any special category, it goes to books
            if not categorized:
                content_types['books'].append(item)
        else:
            # Items with no tags go to books
            content_types['books'].append(item)
    
    return content_types

def save_json_files(content: Dict[str, List[Dict[str, Any]]], output_dir: str = '.'):
    """Save separated content to JSON files."""
    output_path = Path(output_dir)
    output_path.mkdir(exist_ok=True)
    
    for content_type, items in content.items():
        if items:  # Only create files for content types that have items
            output_file = output_path / f"{content_type}.json"
            with open(output_file, 'w', encoding='utf-8') as f:
                json.dump(items, f, indent=2, ensure_ascii=False)
            print(f"Created {output_file} with {len(items)} items")

def main(input_data: str, output_dir: str = '.'):
    """Main function to process and separate JSON content."""
    # Load the JSON data
    data = load_json_data(input_data)
    
    # Separate the content
    separated_content = categorize_content(data)
    
    # Save to files
    save_json_files(separated_content, output_dir)

if __name__ == "__main__":
    # You can either pass JSON data directly or a file path
    if len(sys.argv) > 1:
        input_data = sys.argv[1]
        output_dir = sys.argv[2] if len(sys.argv) > 2 else '.'
        main(input_data, output_dir)
    else:
        print("Please provide JSON data or a file path as an argument")
