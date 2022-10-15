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

for i in files:
    ar = ["d79b02f7-6551-4ed7-bfc2-2c567489f47c"]

    for j in ar:
        cursor.execute(f"""DELETE FROM "TrailPosition" WHERE "trailid" = '{j}'""" )
        conn.commit()
        cursor.execute(f"""DELETE FROM "Trail" WHERE "id" = '{j}'""" )
        conn.commit()
