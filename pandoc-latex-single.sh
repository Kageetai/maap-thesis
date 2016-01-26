for file in markdown/*
do
	s=${file##*/}
  pandoc $file -o latex/${s%.*}.tex
done