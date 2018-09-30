class App < Sinatra::Base
  use DevServerProxy if development?

  get '/' do
    erb :app
  end
end
