# ZooTracker

#### Displays a list of animals at a zoo. Feb 23, 2018

#### Adam Calhoun

## Description
_User can enter an animal's information for the app to keep track of. The app will display a list of all animals entered, and allow the user to show them all, only young (<=2 years), or only mature (>2 years)_

## Setup
* clone repo from GitHub
* navigate terminal to root folder, run:
  * ```npm init```
  * ```npm install```
  * ```bower install```
  * ```gulp build```
* open index.html in your browser

## To Do
Short term:
* make list of animals a bit more readable (thinking split into 2 columns)
  * more ways to sort the list
  * sort vs. filter list
* make the whole thing prettier in general -- styling is mainly functional.
  * instead of separate section for editing, replace animal you're editing right now with edit fields for all sections -- current values as defaults.
* allow the user to add pictures to animals
* timestamps for animal entry; update animal age
  * set animal birthday (if known -- default to entry date otherwise)

Long term:
* proper database back end so the app does not dump everything when it closes
  * required to build 99% of the following:
* Unique ID for each animal
  * paired with database above, can be used to give each animal its own auto-generated web page.
* More detailed taxonomic information input for each animal (genus, phyla, etc.);
  * use to expand search/sort function -- search for all dogs, all mammals, etc.
* Store information about logistical needs of types of animals; estimate things like food needs/week, keep track of veterinary appointments, next shots (auto schedule?),
  * statistical information -- Fluffy has been eating more this week than normal. Moon the Fox has had 12 doses of xyz medicine since being rescued from the wild.
* similar to above, but tracks customer facing events -- there've been 5 dolphin based exhibits in the last year, we should show off the bears who have had none.
  * also keep track of how many guests visit each event.

## Technologies Used
* JavaScript
* Gulp
* Angularjs
* html

### License
*This application is provided as-is under the MIT license.*

Copyright (c) **_Adam Calhoun_**
