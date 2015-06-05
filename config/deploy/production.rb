# server-based syntax
# ======================
# Defines a single server with a list of roles and multiple properties.
# You can define all roles on a single server, or split them:

# server 'example.com', user: 'deploy', roles: %w{app db web}, my_property: :my_value
# server 'example.com', user: 'deploy', roles: %w{app web}, other_property: :other_value
# server 'db.example.com', user: 'deploy', roles: %w{db}



# role-based syntax
# ==================

# Defines a role with one or multiple servers. The primary server in each
# group is considered to be the first unless any  hosts have the primary
# property set. Specify the username and a domain or IP for the server.
# Don't use `:all`, it's a meta role.

# role :app, %w{deploy@example.com}, my_property: :my_value
# role :web, %w{user1@primary.com user2@additional.com}, other_property: :other_value
# role :db,  %w{deploy@example.com}



# Configuration
# =============
# You can set any configuration variable like in config/deploy.rb
# These variables are then only loaded and set in this stage.
# For available Capistrano configuration variables see the documentation page.
# http://capistranorb.com/documentation/getting-started/configuration/
# Feel free to add new variables to customise your setup.



# Custom SSH Options
# ==================
# You may pass any option but keep in mind that net/ssh understands a
# limited set of options, consult the Net::SSH documentation.
# http://net-ssh.github.io/net-ssh/classes/Net/SSH.html#method-c-start
#
# Global options
# --------------
#set :ssh_options, {
#	keys: %w(/home/rlisowski/.ssh/id_rsa),
#	forward_agent: false,
#	auth_methods: %w(password)
#}
#
# The server-based syntax can be used to override options:
# ------------------------------------
# server 'example.com',
#	user: 'user_name',
##	roles: %w{web app},
#	ssh_options: {
#		user: 'user_name', # overrides user setting above
#		keys: %w(/home/user_name/.ssh/id_rsa),
#		forward_agent: false,
#		auth_methods: %w(publickey password)
#		password: 'please use keys'
#	}




set :stage, :production
 2 
 3 # Extended Server Syntax
 4 # ======================
 5 # This can be used to drop a more detailed server definition into the
 6 # server list. The second argument is a, or duck-types, Hash and is
 7 # used to set extended properties on the server.
 8 
 9 server '104.131.43.158', user: 'root', port: 22, roles: %w{web app}
10 
11 set :bundle_binstubs, nil
12 
13 set :bundle_flags, '--deployment --quiet'
14 set :rvm_type, :user
15 
16 
17 SSHKit.config.command_map[:rake]  = "bundle exec rake"
18 SSHKit.config.command_map[:rails] = "bundle exec rails"
19 
20 namespace :deploy do
21 
22   desc "Restart application"
23   task :restart do
24     on roles(:app), in: :sequence, wait: 5 do
25       # execute :touch, release_path.join("tmp/restart.txt")
26     end
27   end
28 
29   after :finishing, "deploy:cleanup"
30 
31 end