/* 
    TODO for students
        General Setup:
            - This object is framed for you to fill out the values to help customize your game.
            - This will alter the browser to display your game title. The "Quick Notes" modal will also detail your information along with the description (desc) of what your game is about. It is important to highlight key commands that you want the player to use.
            - The startingRoomDescription will display what the player sees upon coming to your project.

        Do NOT alter the name of this object.

        Both exports are required in order for this project to run.

        - index.html should be running in your browser through the build process.
            - use your browsers console throughout testing.
*/

export const gameDetails = {   
    title: 'Forkington',
    desc: 'Welcome to the world of restaurant work!!!',
    author: 'Andy Ugarte',
    cohort: 'PTSD-2023',
    startingRoomDescription: 'What you see before you is the lobby of a Mexican restaurant, from here you can go to the kitchen',
    playerCommands: [
        // replace these with your games commands as needed
        'enter', 'view', 'pickup', ]
    // Commands are basic things that a player can do throughout the game besides possibly moving to another room. This line will populate on the footer of your game for players to reference. 
    // This shouldn't be more than 6-8 different commands.
}

// Your code here
// const items = [ "couch", "matches", "stove", "pot","fountain", "glass","toilet", "tissue"]

class Item {
    constructor(name, description, location, move) {
      this.name = name;
      this.description = description;
      this.location = location;
      this.move = move;
    }
}

let couch = new Item ('couch', 'brown sofa', 'lobby', false);
console.log(couch);

let matches = new Item ('matches','you picked up fire sticks','lobby',true);
console.log(matches);

let stove = new Item ('stove','cooktop', 'kitchen', false);
console.log(stove);

let pot = new Item ('pot','you picked up a pot','kitchen', true);
console.log(pot);

let fountain = new Item ('fountain', 'soft drink dispenser', 'busCloset', false);
console.log(fountain);

let glass = new Item ('glass', 'you picked up a cup', 'busCloset', true);
console.log(glass);

let toilet = new Item ('toilet', 'el water', 'bathroom', false);
console.log(toilet);

let tissue = new Item ('tissue','you picked up a kleanex', 'bathroom', true);
console.log(tissue);

const items = {
    // movable items
    matches: matches,
    pot: pot,
    cup: cup,
    tissue: tissue,
    // non move items
    couch: couch,
    stove: stove,
    fountain: fountain,
    toilet: toilet
} 


class Location {
    constructor(avaibleExits, description, accessItems) {
      this.avaibleExits = avaibleExits;
      this.description = description;
      this.accessItems = accessItems;
    }
}

let lobby = new Location (['kitchen'], 'host are front of house, from here you can go to the kitchen',['matches', 'couch'])
console.log(lobby);

let kitchen = new Location (['busCloset' , 'lobby'], 'a place where one cooks, from here you can go to the busCloset', ['pot','stove'])
console.log(kitchen);

let busCloset = new Location (['bathroom', 'kitchen'], 'a closet with basic restaurant supplies, from here you can go to the bathroom', ['cup','fountain'])
console.log(busCloset);

let bathroom = new Location (['window'], 'a room with toilets and sinks, from here you can leave from the window', ['tissue','toilet']);
console.log(bathroom);

let window = new Location (['bathroom'], 'an exit, that leads you to bathroom' ) 

const locations = {
    lobby: lobby , 
    kitchen: kitchen,
    busCloset: busCloset,
    bathroom: bathroom,
    window: window,
    


  }
  console.log(locations.lobby);


let currentLocation = lobby 

export const domDisplay = (playerInput) => {
    // look up.split "method" ()
    // "action" "target"
    //write IF statmnts. 

let input = playerInput.split(" ")
    console.log(input);
let command = input[0]

let target = input[1]

if(command === 'enter' && currentLocation.avaibleExits.includes(target)) {
    currentLocation = locations[target] //locations.kitchen
    return currentLocation.description
} else if (command === 'pickup' && currentLocation.accessItems.includes(target)) {
    //currentAccessItems = locations 
    // have a value for item looking will be tager target, variable set current item, so if current ittem is = true or = false.
    // if else (maybe inside else if. )
    return items[target].description
    console.log('this works');
    //code picking up object 
}







    /* 
        TODO: for students
        - This function must return a string. 
        - This will be the information that is displayed within the browsers game interface above the users input field.

        - This function name cannot be altered. 
        - "playerInput" is whatever text the user is typing within the input field in the browser after hitting the ENTER key.
            - test this out with a console log.

        What your player should be able to do (checklist):
            - move between rooms
            - view current rooms
            - pickup moveable items
                - there should be at least 2 items that cannot be moved.
            - view player inventory
        
        Stretch Goals:
            - drop items in "current room" (if a player picks up an item in one room and moves to another, they should be able to remove it from their inventory)
            - create win/lose conditions.
                - this could be a puzzle that may require an item to be within the players inventory to move forward, etc.

        HINTS:
            - consider the various methods that are available to use.
            - arrays are a great way to hold "lists".
            - You are not limited to just the exported function. Build additional functions and don't forget to hold the return within a variable.
            - Review notes!
                - Have them open as you build.
                - break down each problem into small chunks
                    - What is the process of picking up an item exactly? ex: Look. Pick from a list of items. Put into players list of items... 
    */

    // Your code here
} 
