class BooksController < ApplicationController

	def search
		render :search
	end

	def result
		@title = params[:book]
  		@details = HTTParty.get("https://www.googleapis.com/books/v1/volumes?q=title:#{@title}")
  		@src = @details["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
  		@about = @details["items"][0]["volumeInfo"]["description"]
  		@author = @details["items"][0]["volumeInfo"]["authors"][0]
		render :result
	end

end 