# A mutation is simply a mistake that occurs during the creation or copying of a nucleic acid, in particular DNA. 
# Because nucleic acids are vital to cellular functions, mutations tend to cause a ripple effect throughout the cell. 
# Although mutations are technically mistakes, a very rare mutation may equip the cell with a beneficial attribute. 
# In fact, the macro effects of evolution are attributable by the accumulated result of beneficial microscopic mutations over many generations.
# The simplest and most common type of nucleic acid mutation is a point mutation, which replaces one base with another at a single nucleotide.
# By counting the number of differences between two homologous DNA strands taken from different genomes with a common ancestor, 
# we get a measure of the minimum number of point mutations that could have occurred on the evolutionary path between the two strands.
# This is called the 'Hamming distance'
# ```
# GAGCCTACTAACGGGAT
# CATCGTAATGACGGCCT
# ^ ^ ^  ^ ^    ^^
# ```
# The Hamming distance between these two DNA strands is 7.
# Write a program that can calculate the Hamming difference between two DNA strands.
require 'pry'

def ham strand1, strand2
	arr1 = strand1.split('')
	arr2 = strand2.split('')
	count = 0
	count += abs arr1.length.abs - arr2.length.abs
	arr1.each_with_index do |val, index|
		if val != arr2[index]
			count += 1
		end
	end
	count 
end

binding.pry
