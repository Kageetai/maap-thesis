# Generate PDF for thesis
pandoc metadata.yml content/*.md -o dist/document.pdf \
	--template=template.latex \
	--latex-engine=xelatex \
	--filter pandoc-citeproc \
	--biblio=bibliography.bib
