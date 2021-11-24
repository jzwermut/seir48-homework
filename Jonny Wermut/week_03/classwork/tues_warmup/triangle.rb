def triangle (a,b,c)
	if a + b > c and a + c > b and b + c > a
		"true"
	else
		"false"
	end 
end 

def collectInput
	puts "Please enter the 3 side lengths and I'll tell you if it can make a triangle"
	puts "Enter the 1st side length"
	one = gets.to_i
	puts "Enter the 2nd side length"
	two = gets.to_i
	puts "Enter the 3rd side length"
	three = gets.to_i
	answer = triangle(one, two, three)
	if answer == 'true'
		puts "This is a valid triangle"
	else
		puts "This is not a valid triangle"
	end
	collectInput
end 

collectInput