// priority: 0

// Visit the wiki for more info - https://kubejs.com/

/* 
 * ServerEvents.recipes() is a function that accepts another function,
 * called the "callback", as a parameter. The callback gets run when the 
 * server is working on recipes, and then we can make our own changes.
 * When the callback runs, it is also known as the event "firing". 
*/

ServerEvents.recipes(event => { //listen for the "recipes" server event.
    // You can replace `event` with any name you like, as 
    // long as you change it inside the callback too!

    event.remove({ output: 'travelersbackpack:standard' })
    
    event.shaped(
      Item.of('travelersbackpack:standard', 1),
      [ 
        'ACA', 
        'EBE',
        'ADA'  
      ],
      {
        A: 'minecraft:leather', 
        B: 'simply_backpacks:backpack',
        C: 'minecraft:gold_ingot',
        D: '#travelersbackpack:sleeping_bags',
        E: 'travelersbackpack:backpack_tank'
      }
    )
})