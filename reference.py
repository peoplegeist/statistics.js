from scipy import stats
x1 = [12, 2, 1, 12, 2, 12]
x2 = [1, 4, 7, 1, 0, 0]
res = stats.kendalltau(x1, x2)
print(res.statistic)
print(res.pvalue)