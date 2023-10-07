// priority: 0

// Visit the wiki for more info - https://kubejs.com/

const ingotStackType = ['copper', 'iron', 'dark_steel']
const ingotPlateType = ['copper',         'dark_steel']

// Add tags for plates
ServerEvents.tags('item', event => {
  for (var i = 0; i < ingotPlateType; i++) {
      event.add(`forge:plates/${ingotPlateType[i]}', 'kubejs:plate_${ingotPlateType[i]}`)
  }
})

// Recipies for stacks and plates
ServerEvents.recipes(event => { //listen for the "recipes" server event.
  // Stacks recipies
  for (var i = 0; i < ingotStackType; i++) {
    event.shaped(
      Item.of(`kubejs:stack_${ingotStackType[i]}_ingot`, 1), [ 
        'A', 
        'A',
        ], { A: `#forge:ingots/${ingotStackType[i]}`, }
    )
  }

  // Plate recipies
  for (var i = 0; i < ingotPlateType; i++) {
    event.shapeless(
      Item.of(`kubejs:plate_${ingotPlateType[i]}`, 1),
      [ 
        'ad_astra:hammer', 
        `kubejs:stack_${ingotPlateType[i]}_ingot`
      ]
      ).damageIngredient(0).keepIngredient(0)
  }

  // Override iron plate recipie from Ad Astra
  event.remove({ output: 'ad_astra:iron_plate' })
  event.shapeless(
    Item.of(`ad_astra:iron_plate`, 1),
    [ 
      'ad_astra:hammer', 
      `kubejs:stack_iron_ingot`
    ]
    ).damageIngredient(0).keepIngredient(0)
  
  // Using plates
  event.replaceInput(
    { output: 'mekanismgenerators:heat_generator' }, // Arg 1: the filter
    'minecraft:copper_ingot',            // Arg 2: the item to replace
    '#forge:plates/copper'         // Arg 3: the item to replace it with
    // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
    )
})