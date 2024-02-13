# Blog Post 1: CLI Script


The script was created with the following goals in mind:
1. Create the basic file structure for a website (ie folders and basic boilerplate code).
2. Perform basic tests to ensure everything loads correctly.
3. Run from the command line and include instructions. I also wanted to make it as easy to follow as possible.
4. Allow the user to set the name of the folder (and website).
5. At the end, open everything needed to start working on the website.

## File Structure

The file structure for the project is very simple. A folder is created for the project. Inside, there are folders for images, scripts, html files, stylesheets, and fonts. An index file is created in the project directory and a basic CSS stylesheet is created in the styles folder.

## Basic tests

The index page is created using a simple CSS stylesheet that allows the user to visually confirm if it was created properly.

## Running the script

The script is written in bash, so running it is as simple as typing in ```bash createsite.sh``` while in the directory with the script.

It should be noted that this script was created for Linux systems. I tested it on my MacBook and it appears to largely work, with the exception of not opening the folder. Presumably this could be improved upon if needed.

## Setting the name of the project

When running the script, the user will be prompted to input a name for their project.

> Welcome to the website quick-start script!
Please enter your desired name for your website.

The user's input is used for the name the project folder, as well as some content in the default placeholder files.

## Open everything needed to start working

Once everything is created and ready, the user is asked if they would like to open their project.

> Website setup complete! Would you like to open it? (Y/N)

If the user selects yes (Y), the script will open index.html in the default browser, and the project directory in the default file explorer. It will then exit.

If the user selects no (N), the script will simply exit. It will also display an error if an invalid input is detected (IE, typing "g" instead of "Y" or "N").