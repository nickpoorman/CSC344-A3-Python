#!/usr/bin/python
####################################################
# Nicholas Poorman - 2010
# This program will parse the information
#  returned from the ventrilo_status program
#  and persist it into the sqlite3 databse file
#
# Be sure to set the rootdir of the comments.db file
#
####################################################

import re
import subprocess
from datetime import datetime
import sqlite3

rootdir = '/home/nick/csc344/ventcomments/'

conn = sqlite3.connect(rootdir+'comments.db', detect_types=sqlite3.PARSE_DECLTYPES|sqlite3.PARSE_COLNAMES)
conn.row_factory = sqlite3.Row
c = conn.cursor()

rg = re.compile('(?:CLIENT:).*?NAME=(.*?),COMM=(.{1,127})',re.IGNORECASE)
p = subprocess.Popen(rootdir+'ventrilo_status -c2 -tvent.ifgnet.net:32162', shell=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT)
for line in p.stdout.readlines():
	m = rg.search(line)
	if m:
		user=m.group(1)
		comment=m.group(2)
		print("test")
		item = c.execute('select * from comments where comment_user=? and comment_text=?', (user, comment)).fetchone()
		if item is None:
			c.execute('insert into comments (comment_id, comment_user, comment_text, comment_date) values(NULL, ?, ?, ?)', (user, comment, datetime.now()))

conn.commit()

