# Generate Markdown for Github etc.
	pandoc content/*.md -o dist/document.md \
	-s \
	--filter filters/removeFilters.exe
