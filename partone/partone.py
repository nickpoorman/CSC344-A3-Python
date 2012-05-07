#!/usr/bin/python

import sys
import re

f = open("./inputfile", "r")
text = f.read()

p = re.compile('(<tr>.*?</tr>)', re.IGNORECASE|re.DOTALL)

l = re.split(p, text)

for index in l:
	m = p.search(index)
	if m:
		index = index.strip('\n')
		index = index.replace('\n', '')
		print index
	elif index != '\n':
		index = index.strip('\n')
		index = index.replace('\n', '')
		print index 

