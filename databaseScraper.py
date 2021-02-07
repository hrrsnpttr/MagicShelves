from Adafruit_IO import *
import time
import firebase_admin
from firebase_admin import credentials, firestore

cred = credentials.Certificate("serviceAccountKey.json")
firebase_admin.initialize_app(cred)
db = firestore.client()

aio = Client('harrypotteryeah', 'aio_HLbA77UvpCI2MInVOs6XoB1T0zmc')
espDoc = db.document('toESP32/readThisData')

lastData = str(-1)
lastGoogle = str((aio.receive('finditem')).value)

while True:
    time.sleep(2) # Updates ever X seconds, min is 2 seconds

    curGoogle = str((aio.receive('finditem')).value)
    curGoogle = (curGoogle).lower()
    if(curGoogle != lastGoogle):
        shelf1 = (db.document('shelves/shelf1')).get().to_dict()
        if((shelf1['space1']).lower() == curGoogle):
            db.document('shelves/shelf1').update({ 'space1': " " })
            db.document('toESP32/readThisData').update({ 'pos': 1})
        if((shelf1['space2']).lower() == curGoogle):
            db.document('shelves/shelf1').update({ 'space2': " " })
            db.document('toESP32/readThisData').update({ 'pos': 1})
        if((shelf1['space3']).lower() == curGoogle):
            db.document('shelves/shelf1').update({ 'space3': " " })
            db.document('toESP32/readThisData').update({ 'pos': 1})
        if((shelf1['space4']).lower() == curGoogle):
            db.document('shelves/shelf1').update({ 'space4': " " })
            db.document('toESP32/readThisData').update({ 'pos': 1})

        shelf2 = (db.document('shelves/shelf2')).get().to_dict()
        if((shelf2['space1']).lower() == curGoogle):
            db.document('shelves/shelf2').update({ 'space1': " " })
            db.document('toESP32/readThisData').update({ 'pos': 2})
        if((shelf2['space2']).lower() == curGoogle):
            db.document('shelves/shelf2').update({ 'space2': " " })
            db.document('toESP32/readThisData').update({ 'pos': 2})
        if((shelf2['space3']).lower() == curGoogle):
            db.document('shelves/shelf2').update({ 'space3': " " })
            db.document('toESP32/readThisData').update({ 'pos': 2})
        if((shelf2['space4']).lower() == curGoogle):
            db.document('shelves/shelf2').update({ 'space4': " " })
            db.document('toESP32/readThisData').update({ 'pos': 2})

        shelf3 = (db.document('shelves/shelf3')).get().to_dict()
        if((shelf3['space1']).lower() == curGoogle):
            db.document('shelves/shelf3').update({ 'space1': " " })
            db.document('toESP32/readThisData').update({ 'pos': 3})
        if((shelf3['space2']).lower() == curGoogle):
            db.document('shelves/shelf3').update({ 'space2': " " })
            db.document('toESP32/readThisData').update({ 'pos': 3})
        if((shelf3['space3']).lower() == curGoogle):
            db.document('shelves/shelf3').update({ 'space3': " " })
            db.document('toESP32/readThisData').update({ 'pos': 3})
        if((shelf3['space4']).lower() == curGoogle):
            db.document('shelves/shelf3').update({ 'space4': " " })
            db.document('toESP32/readThisData').update({ 'pos': 3})

        shelf4 = (db.document('shelves/shelf2')).get().to_dict()
        if((shelf4['space1']).lower() == curGoogle):
            db.document('shelves/shelf4').update({ 'space1': " " })
            db.document('toESP32/readThisData').update({ 'pos': 4})
        if((shelf4['space2']).lower() == curGoogle):
            db.document('shelves/shelf4').update({ 'space2': " " })
            db.document('toESP32/readThisData').update({ 'pos': 4})
        if((shelf4['space3']).lower() == curGoogle):
            db.document('shelves/shelf4').update({ 'space3': " " })
            db.document('toESP32/readThisData').update({ 'pos': 4})
        if((shelf4['space4']).lower() == curGoogle):
            db.document('shelves/shelf4').update({ 'space4': " " })
            db.document('toESP32/readThisData').update({ 'pos': 4})

    lastGoogle = curGoogle
    doc = espDoc.get()
    if doc.exists:
        rawData = str(doc.to_dict())
        curData = rawData[8:9]
        print(curData)
        if curData != lastData:
            aio.send('thisone', curData)
        lastData = curData
    