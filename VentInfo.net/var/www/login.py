##########################################
# Nicholas Poorman - 2010
# login.py - This file will take the POST request
#	grab the username and password sent and check the databse to see if the creds are correct
#	success if they are, fail on invalid
# This script is not yet completed as a fail should prompt again for a login with an error notice
# Note: Be sure to set the rootdir for the sqlite3 comments.db file
##########################################

import cgi
from datetime import datetime
import sqlite3
from cgi import escape
from urllib import unquote
import re

def show(req):
	final = ''

	name = req.form.getfirst('name')
	password = req.form.getfirst('password')

	s = """\
<div class="content clearfix">
	<div class="left right">
		<h1>Success!</h1>
		<h2>You are now logged in as: %s</h2>
	</div>
</div>
"""

	conn = sqlite3.connect('/home/nick/csc344/ventcomments/comments.db', detect_types=sqlite3.PARSE_DECLTYPES|sqlite3.PARSE_COLNAMES)
	conn.row_factory = sqlite3.Row
	c = conn.cursor()

	item = c.execute('select * from users where user_name=? and user_password=?', (name, password)).fetchone()
	if item is None:
		final = 'Fail' 
	else:	
		final = s % name

	return final
