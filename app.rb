class App < Sinatra::Base
  use DevServerProxy if development?

  helpers do
    def javascript_pack_tag(name)
      "<script src=\"/packs/#{name}.js\"></script>"
    end

    def stylesheet_pack_tag(name)
      if settings.environment == :production
        "<link rel=\"stylesheet\" href=\"/packs/#{name}.css\" />"
      end
    end
  end

  get '/' do
    erb :app
  end

  get '/products' do
    products = [
      { id: 1, name: 'cerulean', year: 2000, color: '#98B2D1', pantone_value: '15-4020' },
      { id: 2, name: 'fuchsia rose', year: 2001, color: '#C74375', pantone_value: '17-2031' },
      { id: 3, name: 'true red', year: 2002, color: '#BF1932', pantone_value: '19-1664' }
    ]

    json products
  end
end
