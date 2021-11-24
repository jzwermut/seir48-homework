require 'nokogiri'
require 'httparty'
require 'pry'
require 'open-uri'

def linkScraper # Grabs all list elements with a link to listing pages
	url = "https://www.dogzonline.com.au/breeds/puppies.asp"
	unparsed_page = HTTParty.get(url)
	parsed_page = Nokogiri::HTML(unparsed_page)
	allLists = parsed_page.css('ul.general-list li')
	allLists
end

def allLinks #Extracts the url for each listing page and stores it in an array
	lists = linkScraper()
	all = Array.new
	lists.each_with_index do |val, index| 
	all.push("https://www.dogzonline.com.au#{lists[index].css('a')[0].attributes["href"].value}")
	end
	all
end

def scrape (link) #Takes a url and returns an array of objects. Each object represents a single listing
	url = link
	page = Nokogiri::HTML(open(url))
	dogs = Array.new
	dogListings = page.css('article.list-block')
	dogListings.each do |dogListing|
		listing = {
			doglisting: link,
			name: dogListing.css('a')[1].text,
			breeder: dogListing.css('dd').first.text
			# location: dogListing.css('dd')[1].text,
			# description: dogListing.css('p')[1].text
		}
		dogs << listing
	end
	dogs
end

def allPages #Should loop through each link and store the listings data from each page into an array 'allDogs'
	links = allLinks()
	allDogs = Array.new
	links.each do |link|
		dog = scrape("#{link}")
		allDogs << dog
	end
allDogs
end

binding.pry

# scrape "https://www.dogzonline.com.au/breeds/puppies/staffordshire-bull-terrier.asp"



# def getDogNames (url)
#   page = Nokogiri::HTML(open(url))
#   nodes = page.css('h2 a').map {|node| node.text}
# end

# def getDogDetails (url)
#   page = Nokogiri::HTML(open(url))
#   nodes = page.css('dl').map {|node| node.text}
# end

# def allListings
#   x = allLinks()
#   nodes = x.map {|link| puts "#{getDogNames(link)}"}
# end

# image: "https://www.dogzonline.com.au/#{dogListing.css('img').first.attributes["src"].value}"

# phone: dogListing.css('dd')[2].text,
# email: dogListing.css('dd a').first.text
# website: dogListing.css('dd a').last.text,



		