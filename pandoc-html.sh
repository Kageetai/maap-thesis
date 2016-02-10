# Generate HTML for preview
	pandoc bibliography.yml metadata.yml markdown/*.md -o dist/index.html \
	-s
