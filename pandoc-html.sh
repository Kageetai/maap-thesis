# Generate HTML for preview
	pandoc bibliography.yml metadata.yml markdown/*.md -o dist/index.html \
	-s \
	--template templates/template.html \
	-c style.css
	cp templates/style.css dist/style.css
	mkdir -p dist/images/
	cp images/* dist/images/