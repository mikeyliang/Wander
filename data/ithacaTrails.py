import glob

import pandas as pd

files = glob.glob('./*')

print(files)

for i in files:
    data = pd.read_csv(i)
    print(data)