 # config valid only for Capistrano 3.1
# lock '3.2.1'
 
set :application, 'blog'
set :repo_url, "https://github.com/kedinn2/comoprogramar.git"

# Default deploy_to directory is /var/www/my_app
set :deploy_to, "/var/www/comoprogramar.org/html"
 
# Default value for :scm is :git
set :scm, :git

# Default value for :log_level is :debug
set :log_level, :debug

# Default value for keep_releases is 5
set :keep_releases, 5

namespace :deploy do

desc 'Restart application'
task :restart do
	on roles(:app), in: :sequence, wait: 5 do
	# Your restart mechanism here, for example:
	# execute :touch, release_path.join('tmp/restart.txt')
	 end
end

before :restart, :build_public do
	on roles(:app) do
		within release_path do
			execute '/home/rails/.rvm/gems/ruby-2.2.0/wrappers/jekyll',  "build --destination public"
		end
	end
end

after :publishing, :restart

end








