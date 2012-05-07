##########################################
# Nicholas Poorman - 2010
# index.py - This is the index script that generates the index page for the website
#	TODO: Lots of stuff.
#		-Change the data to be in divs instead of a table. eww
#		-Only display the delete button on comments owned by a logged in user
#		-Make it so other users can comment on people's comments
#		-Whole bunch of other things
#
# This script is not yet completed.
# Note: Be sure to set the rootdir for the sqlite3 comments.db file
##########################################

from cgi import escape
from urllib import unquote
import sqlite3
import re

def index():
	s = """\
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" dir="ltr" lang="en-US">

<head>
	<meta content="text/html; charset=UTF-8" http-equiv="Content-Type">
	<meta content="en-us" http-equiv="Content-Language">
	<!-- Silk icon set 1.3 Mark James http://www.famfamfam.com/lab/icons/silk/-->

	<title>VentInfo.net</title>


	<link rel="stylesheet" href="css/style.css" type="text/css" media="screen" />
	<link rel="stylesheet" href="css/slide.css" type="text/css" media="screen" />


	<!-- PNG FIX for IE6 -->
 	<!-- http://24ways.org/2007/supersleight-transparent-png-in-ie6 -->
	<!--[if lte IE 6]>
		<script type="text/javascript" src="js/pngfix/supersleight-min.js"></script>
	<![endif]-->

	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
	<script type="text/javascript" src="js/jquery.color.js"></script>
	<script src="js/slide.js" type="text/javascript"></script>

	<script type="text/javascript">

	$(function() {

		$(".delbutton").click(function(){
			$(this).parents(".record").animate({ backgroundColor: "#0F1620" }, "fast").animate({ opacity: "hide" }, "slow");
			return false;
		});
	});

	</script>
	<script type="text/javascript">
		String.prototype.parseURL = function() {
			return this.replace(/[A-Za-z]+:\/\/[A-Za-z0-9-_]+\.[A-Za-z0-9-_:%%&\?\/.=]+/, function(url) {
				return url.link(url);		
			});
		};
	</script>
</head>

<body>

<!-- Panel -->
<div id="toppanel">

	<div id="panel">

		<div class="content clearfix">

			<div class="left">

				<h1>Welcome to VentInfo.net</h1>

				<h2>More Control Over Your Comments</h2>		

				<p class="grey">You can register and log in to delete your own comments.</p>

				<h2>Link Your Ventrilo Account</h2>

				<p class="grey">Once you sign up you may link your Ventrilo account for your server to your VentInfo.net account!</p>

			</div>

			<div class="left">

				<!-- Login Form -->

				<form class="clearfix" action="">

					<h1>Member Login</h1>

					<label class="grey" for="log">Username:</label>

					<input class="field" type="text" name="log" id="log" value="" size="23" />

					<label class="grey" for="pwd">Password:</label>

					<input class="field" type="password" name="pwd" id="pwd" size="23" />

	            	<label><input name="rememberme" id="rememberme" type="checkbox" checked="checked" value="forever" /> &nbsp;Remember me</label>

        			<div class="clear"></div>

					<input type="submit" name="submit" value="Login" class="bt_login" />

					<a class="lost-pwd" href="#">Lost your password?</a>

				</form>

			</div>

			<div class="left right">			

				<!-- Register Form -->

				<form action="">

					<h1>Not a member yet? Sign Up!</h1>				

					<label class="grey" for="signup">Username:</label>

					<input class="field" type="text" name="signup" id="signup" value="" size="23" />

					<label class="grey" for="email">Email:</label>

					<input class="field" type="text" name="email" id="email" size="23" />

					<label>A password will be e-mailed to you.</label>

					<input type="submit" name="submit" value="Register" class="bt_register" />

				</form>

			</div>

		</div>

	</div> <!-- /login -->	



    <!-- The tab on top -->	

	<div class="tab">

		<ul class="login">

	    	<li class="left">&nbsp;</li>

	        <li>Hello Guest!</li>

			<li class="sep">|</li>

			<li id="toggle">

				<a id="open" class="open" href="#">Log In | Register</a>

				<a id="close" style="display: none;" class="close" href="#">Close Panel</a>			

			</li>

	    	<li class="right">&nbsp;</li>

		</ul> 

	</div> <!-- / top -->

	

</div>
<!--panel -->

	<div align="center">
		<div id="body">
			<table align="center">
			<tbody>
			<tr>            
			<td width='455' valign="top">
			</td>
			</tr>
			<tr>
			<td>
			<table width="100%%" border="0" cellpadding="0" cellspacing="0">
			%s
			</table>
			</td>
			</tr>
			</tbody>
			</table>
		</div>
	</div>
</body>
</html>

 """


	attribs = ''

	conn = sqlite3.connect('/home/nick/csc344/ventcomments/comments.db', detect_types=sqlite3.PARSE_DECLTYPES|sqlite3.PARSE_COLNAMES)
	conn.row_factory = sqlite3.Row
	c = conn.cursor()
	c.execute('select comment_user, comment_text, comment_id, comment_date from comments order by comment_id DESC')
	rows = c.fetchall()

	for row in rows: 
		attribs += """\
            <tr class="record">

              <td width="51">
                <img src="images/NITLogo.jpg" width="50" height="50"/>
              </td>

              <td width="7" align="right">
              </td>

              <td width="376" class="contentb">

                <strong style="color:#006699;">%s
                </strong>

	      <script type="text/javascript">
		var test = '(%s) %s';
		document.write(test.parseURL());
	      </script>

              </td>

              <TD width="20" bgcolor="#FFFFFF">
                <a href="#" id="%s" class="delbutton">
                  <img src="images/cross.png" style="background:#FFFFFF"/>
                </a>
              </TD>
            </tr>"""

		attribs %= (escape(unquote(str(row[0]))), escape(unquote(str(row[3]))),  escape(unquote(str(row[1]))), escape(unquote(str(row[2]))))
		     
	      
	return s % (attribs)

