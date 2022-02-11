import math
import os
import random
import re
import sys

#
# Complete the 'dynamicArray' function below.
#
# The function is expected to return an INTEGER_ARRAY.
# The function accepts following parameters:
#  1. INTEGER n
#  2. 2D_INTEGER_ARRAY queries
#

def dynamicArray(n, queries):
	# Write your code here
	arr = [  [] for _ in range(n) ]
	lastAnswer = 0
	answers = []
	for (qtype,x,y) in queries:
		print(qtype,x,y)
		idx = (x ^ lastAnswer) % n
		if qtype == 1:
			arr[idx].append(y)
		else:
			lastAnswer = arr[idx][ (y  % len(arr[idx]) )]
			answers.append(lastAnswer)
	return answers

if __name__ == '__main__':
	fptr = open('output', 'w')
	inputf = open('input','r') 

	first_multiple_input = inputf.readline().rstrip().split()


	n = int(first_multiple_input[0])

	q = int(first_multiple_input[1])

	queries = []

	for _ in range(q):
		queries.append(list(map(int, inputf.readline().rstrip().split())))

	result = dynamicArray(n, queries)

	fptr.write('\n'.join(map(str, result)))
	fptr.write('\n')

	fptr.close()
