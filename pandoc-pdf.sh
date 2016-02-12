# Generate PDF for thesis
pandoc bibliography.yml metadata.yml content/*.md -o dist/document.pdf \
	--latex-engine=xelatex \
	--filter pandoc-citeproc \
	--csl=templates/ieee.csl \
	--number-sections --reference-links
rm -rf tex2pdf.*