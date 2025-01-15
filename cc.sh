#!/bin/bash

# Default directory
dir="src/components"

# Parse arguments for --dir flag
while [[ $# -gt 0 ]]; do
    case $1 in
        --dir)
            dir="$2"
            shift 2
            ;;
        *)
            break
            ;;
    esac
done

# Check if at least one component name is provided
if [ $# -lt 1 ]; then
    echo "Please provide at least one component name"
    echo "Usage: $0 [--dir <directory_path>] <component_name> [more_components...]"
    exit 1
fi

# Create the directory if it doesn't exist
mkdir -p "$dir"

# Loop through arguments as component names
for name in "$@"; do
    # Create the component file
    cat > "$dir/$name.tsx" << EOL
export function $name() {
  return (
    <div>
      <div>$name</div>
    </div>
  )
}
EOL

    echo "Created $dir/$name.tsx"
done
