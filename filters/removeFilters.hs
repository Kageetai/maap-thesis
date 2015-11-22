module Main where

import Text.Pandoc.JSON

main = toJSONFilter removeFootnote

removeFootnote :: Inline -> [Inline]
removeFootnote (Note _) = []
removeFootnote e = [e]