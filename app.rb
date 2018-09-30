class App < Sinatra::Base
  use DevServerProxy

  get '/' do
    erb :app
  end
end
