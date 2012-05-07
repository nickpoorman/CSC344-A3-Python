###################
# Nicholas Poorman - 2010
# This will be the script that handles the delete on a given comment in the databse
# A POST will be sent to this script and it will (when finished) delete the comment from the database
#	and return sucess
###################

def index(request):
	post_text = request.POST['post_data']
	return HttpResponse("{'response_text': '"post_text+" recieved.'}", mimetype="application/json")
