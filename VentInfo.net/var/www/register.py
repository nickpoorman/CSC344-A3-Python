##########################################
# Nicholas Poorman - 2010
# register.py - This file will take the POST request
#	grab the username and email sent and check the databse to see if the creds already exist
#	if the username does not yet exist it will add it to the databse
#	return success if new user is created, fail if it already exists
#	TODO: The jquery script should validate the username on the fly
# This script is not yet completed as a fail should prompt again for a new username with an error notice
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
	email = req.form.getfirst('email')
	password = 'tmppass'

	s = """\
<div class="content clearfix">
	<div class="left right">
		<h1>Success!</h1>
		<h2>You are now registered as: %s</h2>
		<p class="grey">Please check your email for your new password.</p>
	</div>
</div>
"""

	conn = sqlite3.connect('/home/nick/csc344/ventcomments/comments.db', detect_types=sqlite3.PARSE_DECLTYPES|sqlite3.PARSE_COLNAMES)
	conn.row_factory = sqlite3.Row
	c = conn.cursor()

	item = c.execute('select * from users where user_name=?', (name, )).fetchone()
	if item is None:
		c.execute('insert into users (user_id, user_name, user_password, email, date_created) values(NULL, ?, ?, ?, ?)', (name, password, email, datetime.now()))
		conn.commit()
		final = s % name
	else:	
		final = 'Fail' 

	return final
