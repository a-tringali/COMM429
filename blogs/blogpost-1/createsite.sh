#!/bin/bash

# Andrew Tringali
# COMM429 Blog 1

# This is a simple script to create the framework for a basic website.

# 1. Create folder for website (DONE)
# 2. Inside are folders for images, css, html, js, you name it. (DONE)
# 3. Build a template webpage or two, along with rudimentary css/js (DONE)
# 4. Test that everything loads correctly (DONE)
# 5. Accept argument that sets a folder name variable (DONE)
# 6. Open files/apps needed to start working (DONE)
# 7. Include a .gitignore file to exclude commonly used files (Didn't need to do this)

echo "Welcome to the website quick-start script!"
echo "Please enter your desired name for your website."

read -r sitename
echo "Setting up $sitename"

# Create project structure
# There's a folder for images, scripts (javascript), styling (css), content (html), and fonts
mkdir $sitename
cd $sitename
mkdir images scripts styles html fonts

# Create project files
touch index.html
touch styles/style.css

# Add template code to index.html
cat << EOF > index.html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8"></meta>
        <title>$sitename</title>
        <link rel="stylesheet" href="styles/style.css">
    </head>
    <body>
        <h1>Website setup sucessful. Welcome to $sitename!</h1>
        <h2>This text should be red. If it is, CSS has loaded properly!</h2>
        <p>You should be ready to start working on your project now.</p>
    </body>
</html>

EOF

# Add template code to style.css
cat << EOF > styles/style.css
h2 {color:red;}
EOF


# Prompt user if they want to open up the website
# If yes, open index.html in browser and the website directory in default file explorer
# If no, exit out of the script.
while true; do
    read -p "Website setup complete! Would you like to open it? (Y/N) " query
    case $query in
        [Yy]* ) open index.html; xdg-open .; exit;;
        [Nn]* ) exit;;
        * ) echo "Error, try again.";;
    esac
done