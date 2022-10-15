import glob
import psycopg2
import math
import pandas as pd

files = glob.glob('./*.csv')

conn = psycopg2.connect(host="ec2-3-93-206-109.compute-1.amazonaws.com",
                        port=5432,
                        user="sykunrpmuhcxuu",
                        password="ea16846e4222be15302513011404a9ae136613a8a6f182bd4d03807c01562544",
                        database="da04bml2q451u8")

cursor = conn.cursor()


# for i in files:
#     data = pd.read_csv(i)

files = files[20:]

for i in files:
    data = pd.read_csv(i)

    
    position = []
    longitude = []
    latitude = []
    elevation = []

    print('passsed')

    for ind, row in data.iterrows():
        position.append(ind)
        longitude.append(row['Longitude'])
        latitude.append(row['Latitude'])
        elevation.append(row['Elevation'])

    dist = 0
    prevlong = longitude[0]
    prevlat = latitude[0]
    prevelev = elevation[0]
    maxelevation = elevation[0]
    minelevation = elevation[0]

    for j in range(len(longitude)):
        if j == 0:
            continue
        maxelevation = max(maxelevation, elevation[j])
        minelevation = min(minelevation, elevation[j])
        newdist = math.sqrt(pow(111000*(longitude[j]-prevlong), 2) + pow(111000*(latitude[j]-prevlat), 2) + pow(elevation[j]-prevelev, 2))
        prevlong = longitude[j]
        prevlat = latitude[j]
        prevelev = elevation[j]
        dist += newdist
    
    deltaele = maxelevation - minelevation

    counter = 1
    if deltaele > 200:
        counter = counter + 1
    
    if (dist > 8000):
        counter = counter + 1
    
    dist = dist*6.213712e-4
    deltaele = deltaele * 3.28083993602

    cursor.execute(f"""INSERT INTO "Trail" ("id", "name", "collegeid", "image", "distance", "elevationChange", "difficulty") VALUES (gen_random_uuid(), '{i.split('/')[-1].split('.')[0].replace("'", "''")}', (SELECT id from "dm_College" where name = 'Cornell University'), null, {round(dist, 2)}, {round(deltaele, 2)}, {counter})  """)
    conn.commit()



    for a, b, c, d in zip(position, longitude, latitude, elevation):
        cursor.execute(f"""INSERT INTO "TrailPosition" ("id", "trailid", "position", "longitude", "latitude", "elevation") VALUES (gen_random_uuid(), (SELECT id from "Trail" where name = '{i.split('/')[-1].split('.')[0]}'), {a}, {b}, {c}, {d})""")

        conn.commit() # <- We MUST commit to reflect the inserted data


cursor.close()
conn.close()

# print(data)



