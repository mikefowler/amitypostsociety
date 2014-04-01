require 'sinatra'
require 'haml'

set :pages , %w[introduction circles materials]
set :public_folder, File.dirname(__FILE__) + '/public'

helpers do
  def active?(path = '')
    request.path_info == '/' + path ? 'active' : nil
  end
end

get '/' do
  @body_class = 'home'
  haml :index
end

settings.pages.each do |page|
  get '/' + page do
    @body_class = page.downcase
    haml page.to_sym
  end
end
