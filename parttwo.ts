Script started on Wed Apr 07 23:15:17 2010
moxie - poorman - np3 > gunzip -c VentInfo.net.tar.gz | tar xvf -
x VentInfo.net, 0 bytes, 0 tape blocks
x VentInfo.net/var, 0 bytes, 0 tape blocks
x VentInfo.net/home, 0 bytes, 0 tape blocks
x VentInfo.net/var/www, 0 bytes, 0 tape blocks
x VentInfo.net/home/nick, 0 bytes, 0 tape blocks
x VentInfo.net/var/www/js, 0 bytes, 0 tape blocks
x VentInfo.net/var/www/images, 0 bytes, 0 tape blocks
x VentInfo.net/var/www/css, 0 bytes, 0 tape blocks
x VentInfo.net/home/nick/csc344, 0 bytes, 0 tape blocks
x VentInfo.net/var/www/js/pngfix, 0 bytes, 0 tape blocks
x VentInfo.net/home/nick/csc344/ventcomments, 0 bytes, 0 tape blocks
x VentInfo.net/README~, 1378 bytes, 3 tape blocks
x VentInfo.net/README, 1378 bytes, 3 tape blocks
x VentInfo.net/var/www/register.py, 1598 bytes, 4 tape blocks
x VentInfo.net/var/www/login.py, 1198 bytes, 3 tape blocks
x VentInfo.net/var/www/old.py, 2047 bytes, 4 tape blocks
x VentInfo.net/var/www/old.py~, 1777 bytes, 4 tape blocks
x VentInfo.net/var/www/login.py~, 1032 bytes, 3 tape blocks
x VentInfo.net/var/www/register.py~, 1532 bytes, 3 tape blocks
x VentInfo.net/var/www/delete.py, 429 bytes, 1 tape blocks
x VentInfo.net/var/www/delete.py~, 156 bytes, 1 tape blocks
x VentInfo.net/var/www/README, 511 bytes, 1 tape blocks
x VentInfo.net/var/www/README~, 261 bytes, 1 tape blocks
x VentInfo.net/var/www/index.py, 5986 bytes, 12 tape blocks
x VentInfo.net/var/www/index.py~, 5924 bytes, 12 tape blocks
x VentInfo.net/var/www/js/slide.js~, 1338 bytes, 3 tape blocks
x VentInfo.net/var/www/js/jquery.min.js, 72174 bytes, 141 tape blocks
x VentInfo.net/var/www/js/jquery.color.js, 3660 bytes, 8 tape blocks
x VentInfo.net/var/www/js/README, 555 bytes, 2 tape blocks
x VentInfo.net/var/www/js/README~, 445 bytes, 1 tape blocks
x VentInfo.net/var/www/js/slide.js, 1649 bytes, 4 tape blocks
x VentInfo.net/var/www/images/tab_r.png, 1067 bytes, 3 tape blocks
x VentInfo.net/var/www/images/tab_m.png, 261 bytes, 1 tape blocks
x VentInfo.net/var/www/images/tab_l.png, 1077 bytes, 3 tape blocks
x VentInfo.net/var/www/images/tab_b.png, 232 bytes, 1 tape blocks
x VentInfo.net/var/www/images/nit.jpg, 20283 bytes, 40 tape blocks
x VentInfo.net/var/www/images/logo.png, 20044 bytes, 40 tape blocks
x VentInfo.net/var/www/images/cross.png, 655 bytes, 2 tape blocks
x VentInfo.net/var/www/images/bt_register.png, 1166 bytes, 3 tape blocks
x VentInfo.net/var/www/images/bt_open.png, 2044 bytes, 4 tape blocks
x VentInfo.net/var/www/images/bt_login.png, 1101 bytes, 3 tape blocks
x VentInfo.net/var/www/images/bt_close.png, 2150 bytes, 5 tape blocks
x VentInfo.net/var/www/images/bg.jpg, 88298 bytes, 173 tape blocks
x VentInfo.net/var/www/images/Thumbs.db, 73728 bytes, 144 tape blocks
x VentInfo.net/var/www/images/Template.png, 230989 bytes, 452 tape blocks
x VentInfo.net/var/www/images/NITLogo.jpg, 20447 bytes, 40 tape blocks
x VentInfo.net/var/www/css/slide.css~, 4602 bytes, 9 tape blocks
x VentInfo.net/var/www/css/style.css, 723 bytes, 2 tape blocks
x VentInfo.net/var/www/css/style.css~, 736 bytes, 2 tape blocks
x VentInfo.net/var/www/css/slide.css, 4737 bytes, 10 tape blocks
x VentInfo.net/var/www/js/pngfix/x.gif, 49 bytes, 1 tape blocks
x VentInfo.net/var/www/js/pngfix/supersleight-min.js, 1446 bytes, 3 tape blocks
x VentInfo.net/home/nick/csc344/ventcomments/README~, 945 bytes, 2 tape blocks
x VentInfo.net/home/nick/csc344/ventcomments/get-comments.py, 1243 bytes, 3 tape blocks
x VentInfo.net/home/nick/csc344/ventcomments/README, 970 bytes, 2 tape blocks
x VentInfo.net/home/nick/csc344/ventcomments/ventrilo_status, 55032 bytes, 108 tape blocks
x VentInfo.net/home/nick/csc344/ventcomments/logs, 3755 bytes, 8 tape blocks
x VentInfo.net/home/nick/csc344/ventcomments/get-comments.py~, 919 bytes, 2 tape blocks
x VentInfo.net/home/nick/csc344/ventcomments/comments.db, 10240 bytes, 20 tape blocks
moxie - poorman - np3 > ls
VentInfo.net  VentInfo.net.tar.gz  partone  partone.ts
moxie - poorman - np3 > cd VentInfo.net
moxie - poorman - VentInfo.net > ls
README  README~  home  var
moxie - poorman - VentInfo.net > cat README
##################################################
# Nicholas Poorman - 2010
# VentInfo.net - A social ventrilo comment website
##################################################

Just as a note I have never done any web development before this so learning everything about
        python, mod_pyton, regex, cgi, html, javascript, jquery, cron, sqlite3, and proper apache 
        permissions all had to be learned to complete this project. I also had to figure out 
        how to get the python scripts to interact with the proprietary, closed source Ventrilo protocol.

About:
VentInfo.net grabs the comments from the popular online voice chatting software Ventrilo
        and persists them to a databse. The webiste provides a social networking aspect to
        other users comments.

Future plans:
        Registered users will have the ability to tether their
                Ventrilo server account with their VentInfo.net account.

        Each user will have the ablility to delete their own comments from the site.

        Users will be able to add their own private Ventrilo servers to be monitored
                by the website.

        Users will be able to change their avatar of thier profile on the site. Or
                link to their gravatar account. 

        Each user will have the ability to comment on other users Ventrilo comments.

        The index page will be redone to use proper web design patterns, such as divs
                for the layout instead of a table with CSS.
moxie - poorman - VentInfo.net > ls
README  README~  home  var
moxie - poorman - VentInfo.net > cd home/
moxie - poorman - home > ls
nick
moxie - poorman - home > cd nick/
moxie - poorman - nick > ls
csc344
moxie - poorman - nick > cd csc344
moxie - poorman - csc344 > ls
ventcomments
moxie - poorman - csc344 > cd ventcomments/
moxie - poorman - ventcomments > ls
README   comments.db      get-comments.py~  ventrilo_status
README~  get-comments.py  logs
moxie - poorman - ventcomments > cat README
#########################################################
# Nicholas Poorman - 2010
# VentInfo.net - Backend
#########################################################

ventrilo_status - the program that created the UDP packet to ping the server for its status information

get-comments.py - the python script that parses the info and persists it to the sqlite database
        *Note: Be sure to change the rootdir for the comments.db in the script

logs - the file that any errors get logged to

comments.db - the sqlite3 database file that holds all our information
        *Note: Make sure that the path to the comments.db is readable 
                and writable by the webserver as well as the user running
                the get-comments.py script.

To have the script run every minute on the server add the following to your crontab:

        * * * * * <PATH TO get-comments.py> >> <PATH TO logs> 2>&1

        ex:
        * * * * * /home/nick/csc344/ventcomments/get-comments.py >> /home/nick/csc344/ventcomments/logs 2>&1
moxie - poorman - ventcomments > cat get-comments.py
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

moxie - poorman - ventcomments > ls
README   comments.db      get-comments.py~  ventrilo_status
README~  get-comments.py  logs
moxie - poorman - ventcomments > cat[K[K[Kcd ..
moxie - poorman - csc344 > cd ..
moxie - poorman - nick > cd ..
moxie - poorman - home > ls
nick
moxie - poorman - home > cd ..
moxie - poorman - VentInfo.net > ls
README  README~  home  var
moxie - poorman - VentInfo.net > cd var/www/
moxie - poorman - www > ls
README   delete.py   index.py   login.py   old.py~
README~  delete.py~  index.py~  login.py~  register.py
css      images      js         old.py     register.py~
moxie - poorman - www > cat README
#################################
# Nicholas Poorman - 2010
#################################

These files should be in your root web directory with the appropriate permissions.
The description for each file can be found in the header of the respective file.

css/ - all the css files
images/ - all the image files used on the website
js/ - all the javascript and jquery files

Make sure mod_python is configured properly for the web directory. 
        Also set the PythonHandler to be be default handler. Google it.
moxie - poorman - www > cat index.py
##########################################
# Nicholas Poorman - 2010
# index.py - This is the index script that generates the index page for the website
#       TODO: Lots of stuff.
#               -Change the data to be in divs instead of a table. eww
#               -Only display the delete button on comments owned by a logged in user
#               -Make it so other users can comment on people's comments
#               -Whole bunch of other things
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

moxie - poorman - www > ls
README   delete.py   index.py   login.py   old.py~
README~  delete.py~  index.py~  login.py~  register.py
css      images      js         old.py     register.py~
moxie - poorman - www > cat delete.py
###################
# Nicholas Poorman - 2010
# This will be the script that handles the delete on a given comment in the databse
# A POST will be sent to this script and it will (when finished) delete the comment from the database
#       and return sucess
###################

def index(request):
        post_text = request.POST['post_data']
        return HttpResponse("{'response_text': '"post_text+" recieved.'}", mimetype="application/json")
moxie - poorman - www > cat login.py
##########################################
# Nicholas Poorman - 2010
# login.py - This file will take the POST request
#       grab the username and password sent and check the databse to see if the creds are correct
#       success if they are, fail on invalid
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
moxie - poorman - www > cat old.py
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
moxie - poorman - www > cat register.py
##########################################
# Nicholas Poorman - 2010
# register.py - This file will take the POST request
#       grab the username and email sent and check the databse to see if the creds already exist
#       if the username does not yet exist it will add it to the databse
#       return success if new user is created, fail if it already exists
#       TODO: The jquery script should validate the username on the fly
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
moxie - poorman - www > ls
README   delete.py   index.py   login.py   old.py~
README~  delete.py~  index.py~  login.py~  register.py
css      images      js         old.py     register.py~
moxie - poorman - www > cd css
moxie - poorman - css > ls
slide.css  slide.css~  style.css  style.css~
moxie - poorman - css > cat slide.css
/*
Edits made by:
Name: Nicholas Poorman
Date: 2010
Info: The CSS for the sliding panel at the top of the screen

Original CSS design by:
Name: Sliding Login Panel with jQuery 1.3.2
Author: Jeremie Tisseau
Author URI: http://web-kreation.com/
Script URI: http://web-kreation.com/index.php/tutorials/nice-clean-sliding-login-panel-built-with-jquery/
Date: March 26, 2009
Version: 1.0

        The CSS, XHTML and design is released under Creative Common License 3.0:
        http://creativecommons.org/licenses/by-sa/3.0/

*/ 

/***** clearfix *****/
.clear {clear: both;height: 0;line-height: 0;}
.clearfix:after {content: ".";display: block;height: 0;clear: both;visibility: hidden;}
.clearfix {display: inline-block;}
/* Hides from IE-mac \*/
* html .clearfix {height: 1%;}
.clearfix {display: block;}
/* End hide from IE-mac */
.clearfix {height: 1%;}
.clearfix {display: block;}

/* Panel Tab/button */
.tab {
        background: url(../images/tab_b.png) repeat-x 0 0;
        height: 42px;
        position: relative;
    top: 0;
    z-index: 999;
}

.tab ul.login {
        display: block;
        position: relative;
        float: right;
        clear: right;
        height: 42px;
        width: auto;
        font-weight: bold;
        line-height: 42px;
        margin: 0;
        right: 150px;
        color: white;
        font-size: 80%;
        text-align: center;
}

.tab ul.login li.left {
        background: url(../images/tab_l.png) no-repeat left 0;
        height: 42px;
        width: 30px;
        padding: 0;
        margin: 0;
        display: block;
        float: left;
}

.tab ul.login li.right {
        background: url(../images/tab_r.png) no-repeat left 0;
        height: 42px;
        width: 30px;
        padding: 0;
        margin: 0;
        display: block;
        float: left;
}

.tab ul.login li {
        text-align: left;
        padding: 0 6px;
        display: block;
        float: left;
        height: 42px;
        background: url(../images/tab_m.png) repeat-x 0 0;
}

.tab ul.login li a {
        color: #15ADFF;
}

.tab ul.login li a:hover {
        color: white;
}

.tab .sep {color:#414141}

.tab a.open, .tab a.close {
        height: 20px;
        line-height: 20px !important;
        padding-left: 30px !important;
        cursor: pointer;
        display: block;
        width: 110px;
        position: relative;
        top: 11px;
}

.tab a.open {background: url(../images/bt_open.png) no-repeat left 0;}
.tab a.close {background: url(../images/bt_close.png) no-repeat left 0;}
.tab a:hover.open {background: url(../images/bt_open.png) no-repeat left -19px;}
.tab a:hover.close {background: url(../images/bt_close.png) no-repeat left -19px;}

/* sliding panel */
#toppanel {
    position: absolute;   /*Panel will overlap  content */
    /*position: relative;*/   /*Panel will "push" the content down */
    top: 0;
    width: 100%;
    z-index: 999;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
}

#panel {
        width: 100%;
        height: 270px;
        color: #999999;
        background: #272727;
        overflow: hidden;
        position: relative;
        z-index: 3;
        display: none;
}

#panel h1 {
        font-size: 1.6em;
        padding: 5px 0 10px;
        margin: 0;
        color: white;
}

#panel h2{
        font-size: 1.2em;
        padding: 10px 0 5px;
        margin: 0;
        color: white;
}

#panel p {
        margin: 5px 0;
        padding: 0;
}

#panel a {
        text-decoration: none;
        color: #15ADFF;
}

#panel a:hover {
        color: white;
}

#panel a-lost-pwd {
        display: block;
        float: left;
}

#panel .content {
        width: 960px;
        margin: 0 auto;
        padding-top: 15px;
        text-align: left;
        font-size: 0.85em;
}

#panel .content .left {
        width: 280px;
        float: left;
        padding: 0 15px;
        border-left: 1px solid #333;
}

#panel .content .right {
        border-right: 1px solid #333;
}

#panel .content form {
        margin: 0 0 10px 0;
}

#panel .content label {
        float: left;
        padding-top: 8px;
        clear: both;
        width: 280px;
        display: block;
}

#panel .content input.field {
        border: 1px #1A1A1A solid;
        background: #414141;
        margin-right: 5px;
        margin-top: 4px;
        width: 200px;
        color: white;
        height: 16px;
}

#panel .content input:focus.field {
        background: #545454;
}

/* BUTTONS */
/* Login and Register buttons */
#panel .content input.bt_login,
#panel .content input.bt_register {
        display: block;
        float: left;
        clear: left;
        height: 24px;
        text-align: center;
        cursor: pointer;
        border: none;
        font-weight: bold;
        margin: 10px 0;
}

#panel .content input.bt_login {
        width: 74px;
        background: transparent url(../images/bt_login.png) no-repeat 0 0;
}

#panel .content input.bt_register {
        width: 94px;
        color: white;
        background: transparent url(../images/bt_register.png) no-repeat 0 0;
}

#panel .lost-pwd {
        display: block;
        float:left;
        clear: right;
        padding: 15px 5px 0;
        font-size: 0.95em;
        text-decoration: underline;
}

moxie - poorman - css > cat style.css
/*
Name: Nicholas Poorman
Date: 2010
Info: The CSS for the content on the index page
*/

body {

        color: #000000;
        background-color: #FF6633;

        background: #282828 fixed repeat top left;

        font-family:"Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif; 

        font-size:14px;

        background: #0F1620 url(/images/bg.jpg) no-repeat scroll center top;

    }

    a{color:#0081C2;}

    .delbutton {color: #FFFFFF}
    .delbutton:link {color: #FFFFFF}
    .delbutton:hover {color: #E3E3E3}

    .what {

            font-family:Arial, Helvetica, sans-serif;font-size:1.30em; padding-left:10px;

    }

    .contentb {

            padding-left:10px; background-color:#FFFFFF; border-bottom:dashed #0066CC 1px;

    }   

moxie - poorman - css > cd ..
moxie - poorman - www > ls
README   delete.py   index.py   login.py   old.py~
README~  delete.py~  index.py~  login.py~  register.py
css      images      js         old.py     register.py~
moxie - poorman - www > cd js/
moxie - poorman - js > ls
README  README~  jquery.color.js  jquery.min.js  pngfix  slide.js  slide.js~
moxie - poorman - js > cat README
#################################
# Nicholas Poorman - 2010
#################################

jquery.color.js - a jquery plugin that allows for color animations
        used on the fade out on the index page when deleting a comment

jquery.min.js - the google compacted version of the jquery framework.
        Most sites link directly to the google version

slide.js - the jquery javacript script that handles the sliding menu
        at the top of the index page

pngfix/ - the directory that holds the fix for the stupid IE browser
        The slider on the index page uses this
moxie - poorman - js > cat jquery.c[K[K[K[K[K[K[K[Kslide.js
/*
 slide.js
 Nicholas Poorman - 2010
 This is the jquery javascript script that controls the sliding panel at the top of the index page
 This script is not yet finished as live validation should be done on the forms as data is entered
        The forms use ajax calls to POST their data to the respective scripts
*/

$(document).ready(function() {
        
        // Expand Panel
        $("#open").click(function(){
                $("div#panel").slideDown("slow");
        
        });     
        
        // Collapse Panel
        $("#close").click(function(){
                $("div#panel").slideUp("slow"); 
        });             
        
        // Switch buttons from "Log In | Register" to "Close Panel" on click
        $("#toggle a").click(function () {
                $("#toggle a").toggle();
        });             
                
        //control the registration form
        $(".bt_register").click(function() {
                var name = $("input#signup").val();
                var email = $("input#email").val();             
                var dataString = 'name='+ name + '&email=' + email;
                
                //alert('it worked');
                                
                $.ajax({  
                        type: "POST",
                        url: "./register/show",
                        data: dataString,
                        success: function(ret) {
                                $('#panel').html(ret)
                                        .hide()
                                        .fadeIn('slow', function() {
                                        });
                        }
                });
        return false;           
        });
        
        //control the login form
        $(".bt_login").click(function() {
                var name = $("input#log").val();
                var password = $("input#pwd").val();            
                var dataString = 'name='+ name + '&password=' + password;
                
                //alert('it worked');
                                
                $.ajax({  
                        type: "POST",
                        url: "./login/show",
                        data: dataString,
                        success: function(ret) {
                                $('#panel').html(ret)
                                        .hide()
                                        .fadeIn('slow', function() {
                                        });
                        }
                });
        return false;           
        });


});
moxie - poorman - js > cd ..
moxie - poorman - www > ls
README   delete.py   index.py   login.py   old.py~
README~  delete.py~  index.py~  login.py~  register.py
css      images      js         old.py     register.py~
moxie - poorman - www > cd images/
moxie - poorman - images > ls -a[K[K
NITLogo.jpg   bg.jpg        bt_open.png      logo.png   tab_l.png
Template.png  bt_close.png  bt_register.png  nit.jpg    tab_m.png
Thumbs.db     bt_login.png  cross.png        tab_b.png  tab_r.png
moxie - poorman - images > cd ..
moxie - poorman - www > ls
README   delete.py   index.py   login.py   old.py~
README~  delete.py~  index.py~  login.py~  register.py
css      images      js         old.py     register.py~
moxie - poorman - www > cd ..
moxie - poorman - var > ls
www
moxie - poorman - var > cd ,[K../../[K[K[K
moxie - poorman - VentInfo.net > ls
README  README~  home  var
moxie - poorman - VentInfo.net > cd ..
moxie - poorman - np3 > exit
exit

script done on Wed Apr 07 23:19:23 2010
