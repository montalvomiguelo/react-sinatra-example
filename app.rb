class App < Sinatra::Base
  get '/' do
    erb :app
  end
end
