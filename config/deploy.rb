 # config valid only for Capistrano 3.1
 2 # lock '3.2.1'
 3 
 4 set :application, 'comoprogramar'
 5 set :repo_url, "git@github.com:kedinn2/#{fetch(:application)}.git"
 6 
 7 # Default deploy_to directory is /var/www/my_app
 8 set :deploy_to, "/var/www/comoprogramar.org/html"
 9 
10 # Default value for :scm is :git
11 set :scm, :git
12 
13 # Default value for :log_level is :debug
14 set :log_level, :debug
15 
16 # Default value for keep_releases is 5
17 set :keep_releases, 5
18 
19 namespace :deploy do
20 
21   desc 'Restart application'
22   task :restart do
23     on roles(:app), in: :sequence, wait: 5 do
24       # Your restart mechanism here, for example:
25       # execute :touch, release_path.join('tmp/restart.txt')
26     end
27   end
28 
29   before :restart, :build_public do
30     on roles(:app) do
31       within release_path do
32         execute '/home/rails/.rvm/gems/ruby-2.2.0/wrappers/jekyll',  "build --destination public"
33       end
34     end
35   end
36 
37   after :publishing, :restart
38 
39 end








