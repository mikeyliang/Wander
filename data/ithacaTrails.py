import glob
import psycopg2
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

for i in files:
    data = pd.read_csv(i)

    cursor.execute(f"""INSERT INTO "Trail" VALUES (gen_random_uuid(), (SELECT id from "dm_College" where name = 'Cornell University'), '{i.split('/')[-1].split('.')[0]}')  """)
    conn.commit()
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


    for a, b, c, d in zip(position, longitude, latitude, elevation):
        cursor.execute(f"""INSERT INTO "TrailPosition" ("id", "trailid", "position", "longitude", "latitude", "elevation") VALUES (gen_random_uuid(), (SELECT id from "Trail" where name = '{i.split('/')[-1].split('.')[0]}'), {a}, {b}, {c}, {d})""")

        conn.commit() # <- We MUST commit to reflect the inserted data


cursor.close()
conn.close()

# print(data)



