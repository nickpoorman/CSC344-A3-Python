##########################################
# Nicholas Poorman - 2010
# old.py - This script displays a plain html table for debuging the databse information
# Note: Be sure to set the rootdir for the sqlite3 comments.db file
##########################################


from cgi import escape
from urllib import unquote
import sqlite3
import re

def index():
   s = """\
<html><head>
<style type="text/css">
td {padding:0.2em 0.5em;border:1px solid black;}
table {border-collapse:collapse;}
</style>
</head><body>
<table cellspacing="0" cellpadding="0">%s</table>
</body></html>
"""
   attribs = ''

   conn = sqlite3.connect('/home/nick/csc344/ventcomments/comments.db', detect_types=sqlite3.PARSE_DECLTYPES|sqlite3.PARSE_COLNAMES)
   conn.row_factory = sqlite3.Row
   c = conn.cursor()
   c.execute('select comment_date, comment_user, comment_text from comments order by comment_date DESC')
   rows = c.fetchall()

   rg = re.compile(escape('^(?#Protocol)(?:(?:ht|f)tp(?:s?)\:\/\/|~\/|\/)?(?#Username:Password)(?:\w+:\w+@)?(?#Subdomains)(?:(?:[-\w]+\.)+(?#TopLevel Domains)(?:com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum|travel|[a-z]{2}))(?#Port)(?::[\d]{1,5})?(?#Directories)(?:(?:(?:\/(?:[-\w~!$+|.,=]|%[a-f\d]{2})+)+|\/)+|\?|#)?(?#Query)(?:(?:\?(?:[-\w~!$+|.,*:]|%[a-f\d{2}])+=?(?:[-\w~!$+|.,*:=]|%[a-f\d]{2})*)(?:&(?:[-\w~!$+|.,*:]|%[a-f\d{2}])+=?(?:[-\w~!$+|.,*:=]|%[a-f\d]{2})*)*)*(?#Anchor)(?:#(?:[-\w~!$+|.,*:=]|%[a-f\d]{2})*)?'),re.IGNORECASE|re.DOTALL)

   for row in rows:
      attribs += '<tr><td>%s</td><td>'
      comment = ''
      m = rg.search(escape(unquote(str(row[2]))))
      if m:
	      attribs += '<a href="%s">%s</a>'
      else:
	      attribs += '%s'
      
      attribs += '</td><td>%s</td></tr>'

      if m:
	      attribs %= (escape(unquote(str(row[1]))), escape(unquote(str(row[2]))), escape(unquote(str(row[2]))), escape(unquote(str(row[0])))) 
      else:
	      attribs %= (escape(unquote(str(row[1]))), escape(unquote(str(row[2]))), escape(unquote(str(row[0])))) 
	      
   return s % (attribs)
