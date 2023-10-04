Hacker rank - Climbing the leaderboard

-Summary
	. Input: 2 arrays. 
		1. Already ranked scores. Example, ranked scores = [100, 100, 50, 40, 40, 20, 10]. This input will be in descending order.
		2. New players scores. Example, new scores = [5, 40, 50, 120]. This input will be in ascending order

	. We have to find the rank of new scores

	.The player with the highest score is ranked number 1 on the leaderboard

	.Players who have equal scores receive the same ranking number, and the next player receive the immediately following ranking number

	.And finally we have to return the rank. The output will be like [6,3,2,1]


-Logic

	SAMPLE INPUT -> RANKED SCORES => [100, 100, 50, 40, 40, 20, 10] , NEW SCORES => [5, 40, 50, 120]            OUTPUT -> NEW SCORES RANK => [6,3,2,1]

		
	.The player with the highest score will get rank number 1 and player with the least score will get the last rank. 

	.Initially we have to remove the duplicate scores in array. UNIQUE SCORES => [100,50,40,20,10]

	.Now we have to initialize an array for the rank. RANK = []
	
	.If we take the first value of new scores array -> 5. This is the least value. So the rank will be length of array + 1 = 6 --> because index value starts from 0. This value will be pushed in rank array => [6]

	.Second value -> 40, this is not the highest or lowest score. We can find the rank of the value using binary search. In binary search, we will divide the array into 2 halves and we check if the value lies in first half or second half. If it is in first half, we will not check the second half and vice-versa.

	.We have to find mid value. Here mid value is 2. UniqueScores[2] = 40. Both the values are same (40 === 40). So we can return the (mid + 1) -> because index value starts from 0. => [6,3]

	.Third value -> 50. Mid value is 2. We should check 50 is greater than mid value and less than mid+1 value. If so we return mid + 2. Else return mid - 1. If both condition fails, we have to check score is greater than mid. If so we should change the end value as END = MID - 1. Else START = MID + 1.

	.Here, 40(mid value) < 50(current value) and also we check 50 is less than (mid - 1) => 50 < 40. If not, we should change the end value as (mid - 1) and start value will be the same -> 0

	. [100,50] -> Now mid value is 1. If mid === current value. We have to return mid + 1 = 2 => [6,3,2]

	. Fourth value -> 120. This is the highest score. So we return 1. The final output will be => [6,3,2,1]