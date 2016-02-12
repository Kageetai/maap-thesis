# Generate LaTex file for other conversion (just in case)
pandoc bibliography.yml metadata.yml content/*.md -o dist/document.tex \
	-s \
	--template=templates/template.latex \
	--latex-engine=xelatex \
	--filter pandoc-citeproc \
	--biblio=bibliography.bib
