import Text.Pandoc.JSON

main = toJSONFilter go
  where go (Link lab (src, tit)) = Span ("",[],[]) [Link lab (src, tit), Note [Plain [Str src]]]
        go x = x