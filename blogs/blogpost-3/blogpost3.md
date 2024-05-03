# Blog Post 3: Content Management Systems (IE WordPress)

Today we put together a common LAMP server, harden it against common attack vectors, and install WordPress on it. The result- the website you're visiting right now!

## L is for Linux
The first and most important part of the LAMP stack is the Linux operating system. In my case, I'm using a Digital Ocean droplet with Ubuntu 22.04 LTS preinstalled.

Digital Ocean does a decent job setting up their virtual machines, but I made a few small changes to get mine up and running properly. The most important part was locking down SSH; to do that, I created an SSH key combo and disabled password authentication and applying a few recommended security settings based on Digital Ocean's guide on improving security. For a web server, this is a very good idea!

I also ran updates (``sudo apt update`` and ``sudo apt upgrade``) to make sure the system is as up to date as possible.

## A is for Apache
Apache is a common open source web server, and quick and easy to install: just run ``sudo apt install apache2`` and you're 90% there!

Next, Apache needs to be let through the firewall. This can be done using the command ``sudo ufw allow 'Apache'``. We can verify the server is set running properly with ``sudo ufw status`` and ``sudo systemctl status apache2``.

The last thing to do is check the server itself. Apache will put a default test page, but I replaced it with my own. Vist [webdev.atringali.org](http://webdev.atringali.org "webdev.atringali.org") if you'd like to see it- I left it up as part of the requirement for this project.

It should be noted that multiple sites can be set up with virtual hosts. I currently have the "Hello World" test site up at [webdev.atringali.org](http://webdev.atringali.org "webdev.atringali.org"). This blog is hosted at [webdev.atringali.org/wordpress](http://webdev.atringali.org/wordpress "webdev.atringali.org/wordpress") . Were I to continue this site's development, I would change the configuration to make WordPress the default instead.

### Virtual Hosts
Virtual hosts are a feature of Apache that allow you to run multiple hosts on the same machine. I used this to keep the default "Hello World" website and this blog separate. More about that can be read in [Digital Ocean's LAMP installation guide.](https://www.digitalocean.com/community/tutorials/how-to-install-lamp-stack-on-ubuntu "Digital Ocean's LAMP installation guide.")

## M is for MySQL
WordPress requires MySQL to run properly. Fortunately, we don't need to do too much to it- just install and set it up. I assure you, the risk of dropping a database is minimal here.

MySQL, like most of the software here, is a single command in your terminal: ``sudo apt install mysql-server.``

Log into the MySQL server with ``sudo mysql.`` Most of the management can be done through phpMyAdmin, but I opted to create the users myself. In this case, I needed two: an account for myself, and one for WordPress. To do that, I used:
``CREATE USER 'USERNAME'@'localhost' IDENTIFIED WITH mysql_native_password BY 'PASSWORD';``

For my admin account, I also granted total access to MySQL using ``GRANT ALL PRIVILEGES ON *.* TO 'andy'@'localhost' WITH GRANT OPTION;`` and ``FLUSH PRIVILEGES;``.

The finishing touch was to run ``sudo mysql_secure_installation``. This applies a few recommended security settings to MySQL.

The rest of the setup can be finished with phpMyAdmin.

## P is for PHP (and phpMyAdmin)
Installing PHP and phpMyAdmin is another simple command line install, ``sudo apt install php phpmyadmin``.  PHP itself doesn't need much after installing, but phpMyAdmin requires some configuration to ensure it is secure. It's also used to configure MySQL to work with WordPress.

### Securing phpMyAdmin
Digital Ocean recommends using Apache's .htaccess authentication to better secure phpMyAdmin. I opted for this method, which can be read about in [Digital Ocean's documentation](https://www.digitalocean.com/community/tutorials/how-to-install-and-secure-phpmyadmin-on-ubuntu-20-04 "Digital Ocean's documentation").

### Configuring MySQL through phpMyAdmin
I used the admin panel to create a database named "wordpress" and grant access to it to the "wordpress" account. This can also be done through MySQL, should that be preferred.

## Installing WordPress
WordPress has a fairly streamlined setup process that can be found [on their website.](http://https://developer.wordpress.org/advanced-administration/before-install/howto-install/ "on their website.") This runs you through how to install the software using a LAMP stack. Since I've already installed and configured the prerequisites, we can skip right to installing WordPress itself.

To do this, I downloaded the WordPress installation .zip and placed it in the server's root directory (/var/www- not the root directory of the Linux install!). That gets us 90% of the way there, but some configuration is required before running the software.

### wp-config.php
WordPress has a default configuration file (wp-config-sample.php) that I simply renamed to wp-config.php and modified. The important part lies here:

> // ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'database_name_here' );
> 
> /** Database username */
define( 'DB_USER', 'username_here' );
> 
> /** Database password */
define( 'DB_PASSWORD', 'password_here' );
> 
> /** Database hostname */
define( 'DB_HOST', 'localhost' );
>
> /** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );
>
> /** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

DB_NAME, DB_USER, and DB_PASSWORD all needed to be changed to match the database name, admin user, and admin user's password. Once that's done, we're largely done here...

Okay, not quite.  For extra security WordPress recommends adding unique phrases here.
> /**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'put your unique phrase here' );
define( 'SECURE_AUTH_KEY',  'put your unique phrase here' );
define( 'LOGGED_IN_KEY',    'put your unique phrase here' );
define( 'NONCE_KEY',        'put your unique phrase here' );
define( 'AUTH_SALT',        'put your unique phrase here' );
define( 'SECURE_AUTH_SALT', 'put your unique phrase here' );
define( 'LOGGED_IN_SALT',   'put your unique phrase here' );
define( 'NONCE_SALT',       'put your unique phrase here' );

WordPress provides a salting page to generate random, secure keys. I generated some and put them here.

### Startup & Configuration

With that, I paid [webdev.atringali.org/wordpress](https://webdev.atringali.org/wordpress "webdev.atringali.org/wordpress") a visit, and finally got the site up and running!

I made some small changes to the site, adding a new theme and adjusting it, and building out a simple homepage. I also installed a Markdown extension that allows me to create posts on markdown, making the process of importing my markdown blog posts more or less instantaneous.

The result is, of course, the site you're looking at now!

## Creating a domain
The final step was to create a domain name to point at the server, so that visitors don't need to know the server's IP address to connect. I already own the domain **atringali.org**, so I created an A record for the Droplet I set up and pointed [webdev.atringali.org](https://webdev.atringali.org "webdev.atringali.org") to redirect to it. 

When you visit that address, you get the placeholder page for Apache. When you go to [webdev.atringali.org/wordpress](https://webdev.atringali.org/wordpress "webdev.atringali.org/wordpress"), you get this site. This is partly by design as the project requires a live test page. Were I to further develop the website, I would have wordpress be the default instead (this can be done with some minor tweaks to Apache's configuration).

## Creating a Post
One of the easiest things to do- simply log into the site, go to "Posts", click "Add new post" and start writing.

In my case, I used the Import Markdown plugin for creating posts. This lets you create posts & pages using markdown formatting instead of the default WordPress editor. You can also import markdown files directly, which is how I imported the previous two blog posts I wrote locally on my computer.

## Resources
Digital Ocean's documentation is excellent, and a great place to get started with a LAMP server and CMS like WordPress.

[Installing LAMP on Ubuntu](https://www.digitalocean.com/community/tutorials/how-to-install-lamp-stack-on-ubuntu "Installing LAMP on Ubuntu")
[Installing phpMyAdmin on Ubuntu](https://www.digitalocean.com/community/tutorials/how-to-install-and-secure-phpmyadmin-on-ubuntu-20-04 "Installing phpMyAdmin on Ubuntu")
[Installing WordPress on Ubuntu w/ LAMP Stack](https://www.digitalocean.com/community/tutorials/how-to-install-wordpress-on-ubuntu-22-04-with-a-lamp-stack "Installing WordPress on Ubuntu w/ LAMP Stack")
[Import Markdown for WordPress](https://wordpress.org/plugins/import-markdown/ "Import Markdown")
[Hardening OpenSSH on Ubuntu](https://www.digitalocean.com/community/tutorials/how-to-harden-openssh-on-ubuntu-20-04 "Hardening OpenSSH on Ubuntu")
