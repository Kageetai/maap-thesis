# Generate LaTex file for other conversion (just in case)
pandoc metadata.yml content/*.md -o dist/document.tex \
	-s \
	--template=template.latex \
	--latex-engine=xelatex \
	--filter pandoc-citeproc \
	--biblio=bibliography.bib
