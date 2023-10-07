// priority: 0

// Visit the wiki for more info - https://kubejs.com/

/* 
 * ServerEvents.recipes() is a function that accepts another function,
 * called the "callback", as a parameter. The callback gets run when the 
 * server is working on recipes, and then we can make our own changes.
 * When the callback runs, it is also known as the event "firing". 
*/

// Listen to item tag event
ServerEvents.tags('item', event => {
  event.add('forge:plates/copper', 'kubejs:plate_copper')
})

ServerEvents.recipes(event => { //listen for the "recipes" server event.
    // Stacks
    event.shaped(
      Item.of('kubejs:stack_copper_ingot', 1),
      [ 
        'A', 
        'A',
        ],
      {
        A: '#forge:ingots/copper',
      }
      )

  // Plates
  event.shapeless(
    Item.of('kubejs:plate_copper', 1),
    [ 
      'ad_astra:hammer', 
      'kubejs:stack_copper_ingot'
    ]
    ).damageIngredient(0).keepIngredient(0)
  
  // Using plates
  event.replaceInput(
    { output: 'mekanismgenerators:heat_generator' }, // Arg 1: the filter
    'kubejs:stack_copper_ingot',            // Arg 2: the item to replace
    '#forge:plates/copper'         // Arg 3: the item to replace it with
    // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
    )
  event.replaceInput(
    { output: 'mekanismgenerators:heat_generator' }, // Arg 1: the filter
    'minecraft:copper_ingot',            // Arg 2: the item to replace
    '#forge:plates/copper'         // Arg 3: the item to replace it with
    // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
    )
})