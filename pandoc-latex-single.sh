for file in markdown/*
do
	s=${file##*/}
  pandoc $file -o latex/${s%.*}.tex \
  	--latex-engine=xelatex \
		--filter pandoc-citeproc
done