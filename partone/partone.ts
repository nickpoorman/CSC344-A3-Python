Script started on Wed Apr 07 23:19:50 2010
moxie - poorman - partone > cat inputfile 
<table>
<tr>
<th>Name
</th>
<th>Date</th>
<th>Paid
</th>
</tr>
<tr>
<td>Joe R. Student</td>
<td>Jan 18, 1977
</td>
<td>Yes
</td>
</tr>
</table>

moxie - poorman - partone > cat partone.py 
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

moxie - poorman - partone > python partone.py 
<table>
<tr><th>Name</th><th>Date</th><th>Paid</th></tr>
<tr><td>Joe R. Student</td><td>Jan 18, 1977</td><td>Yes</td></tr>
</table>
moxie - poorman - partone > exit
exit

script done on Wed Apr 07 23:20:47 2010
