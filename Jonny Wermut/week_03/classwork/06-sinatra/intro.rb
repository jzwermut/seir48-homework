require 'sinatra'
require 'sinatra/reloader'
require 'pry'

get '/hello' do
	"hello world from sinatra poo poo poo"
end

get '/goodbye' do
	'Goodbye everybody'
end

get '/lucky_number' do
	"Here is your lucky number: #{ rand 1..40 }"
end

get '/uptime' do
	"The server uptime is #{`uptime`}"
end

get '/fanclub/tegan' do
	"Tegan is a member of the Marx Brothers fan club"
end

get '/fanclub/martin' do
	"Martin is a member of the Marx Brothers fan club"
end

get '/fanclub/martin' do
	"Martin is a member of the Marx Brothers fan club"
end

get '/fanclub/:name' do
	"#{ params[:name].capitalize } is a member of the Marx Brothers fan club"
end