@echo off
echo Creating Delta Tire website structure...

mkdir app\services\tires
mkdir app\services\brakes
mkdir app\services\maintenance
mkdir app\services\alignments
mkdir app\services\batteries
mkdir app\services\ac-heater
mkdir app\services\truck-accessories
mkdir app\services\inspections
mkdir app\blog
mkdir app\contact
mkdir app\faq
mkdir app\fleet
mkdir app\locations
mkdir app\about

mkdir components\shared
mkdir components\ui

mkdir public\images
mkdir public\logos

mkdir lib\data

mkdir .github\workflows

echo Folders created successfully!
echo Now you can add the website files to these folders.
pause