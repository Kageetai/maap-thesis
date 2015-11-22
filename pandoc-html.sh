# Generate HTML for preview
	pandoc metadata.yml content/*.md -o dist/index.html \
	-s \
	--filter filters/removeFilters.exe \
	--template templates/template.html \
	-c style.css
