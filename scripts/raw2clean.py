# libs
import openpyxl
import os
import pandas as pd
import matplotlib.pyplot as plt

# Constants
sas_pre = "https://erstoracc1.dfs.core.windows.net/erblockstorage/bronze/Sales/"
sas_token = "sv=2022-11-02&ss=bfqt&srt=sco&sp=rwdlacupyx&se=2024-08-14T15:15:40Z&st=2024-02-02T07:15:40Z&spr=https&sig=qqqKyJOeYz2SxE7R4KfiaFaH1ohIRaTgnLblwTW3zVU%3D"


def start():
    # read data
    df = pd.read_csv(sas_pre + "Sales_WeeklyCoalPrice.csv?" + sas_token)

    # get items by Benchmark
    benchmarks = df['Benchmark'].unique()

    # get coal type by Coal_Type
    coal_types = df['Coal_Type'].unique()

    # dict by benchmark
    benchmarks_dict = {}

    cnt = 1
    for benchmark in benchmarks:
        coal_types_dict = {}
        for coal_type in coal_types:
            cnt += 1
            # generate data here
            cond1 = df['Benchmark'] == benchmark
            cond2 = df['Coal_Type'] == coal_type
            data = df.where(
                cond1 & cond2
            )
            # clear nan
            data = data.dropna()
            data = data[['Date', 'Per _Price']]
            data['Date'] = pd.to_datetime(
                data['Date'], utc=True, infer_datetime_format=True)
            coal_types_dict[coal_type] = data

        benchmarks_dict[benchmark] = coal_types_dict
        coal_types_dict = {}


if __name__ == "__main__":
    start()
