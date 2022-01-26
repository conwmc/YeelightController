import firebase_admin
from firebase_admin import db
import json
from datetime import datetime


cred_object = firebase_admin.credentials.Certificate('fiorthionscnamh-firebase-adminsdk-aah1b-31eeb3a865.json')
default_app = firebase_admin.initialize_app(cred_object, {
	'databaseURL' :'https://fiorthionscnamh-default-rtdb.europe-west1.firebasedatabase.app/'
	})


ref = db.reference("/")

'''
x = {
  "3000042790052":
    {
	"bliain": "2022",
	"mi": "1",
	"data": "22",
	"la": "1",
	"am": "15:24",
	}
}'''
time = datetime.now()

epoch = str(int(round(time.timestamp())))

#datetime_obj = datetime.fromtimestamp(int(unix_timestamp)) # https://devenum.com/unix-timestamp-to-datetime-in-python/

bliain = str(time.strftime("%y"))
mi = str(time.strftime("%m"))
data = str(time.strftime("%d"))
la = str(time.isoweekday())
am = str(time.strftime("%H:%M"))
soicind = str(time.strftime("%S"))

'''
#x.replace("3000042790052", str(int(time.time())))
x.update({"am": str(100)})

x.update({"bliain": bliain})
x.update({"mi": mi})
x.update({"data": data})
x.update({"la": la})
x.update({"am": am})
'''

x = {
  epoch:
    {
        "bliain": bliain,
        "mi": mi,
        "data": data,
        "la": la,
        "am": am,
	"soicind": soicind,
        }
}


x = json.dumps(x, indent=4)

with open("data.json", "w") as f:
	f.write(x)


with open("data.json", "r") as f:
	file_contents = json.load(f)
ref.update(file_contents)
