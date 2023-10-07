// priority: 50

// Visit the wiki for more info - https://kubejs.com/

const ingotStackType = ['copper', 'iron', 'dark_steel']
const ingotPlateType = ['copper',         'dark_steel']

function replaceList(event, toReplace, replaceWith, outputs) {
  for (var i = 0; i < outputs.length; i++) {
    event.replaceInput(
      { output: outputs[i] }, // Arg 1: the filter
      toReplace,            // Arg 2: the item to replace
      replaceWith         // Arg 3: the item to replace it with
      // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
      )
  }
}

// Add tags for plates
ServerEvents.tags('item', event => {
  for (var i = 0; i < ingotPlateType.length; i++) {
      event.add(`forge:plates/${ingotPlateType[i]}`, `kubejs:plate_${ingotPlateType[i]}`)
  }
})

// Recipies for stacks and plates
ServerEvents.recipes(event => { //listen for the "recipes" server event.
  // Stacks recipies
  for (var i = 0; i < ingotStackType.length; i++) {
    event.shaped(
      Item.of(`kubejs:stack_${ingotStackType[i]}_ingot`, 1), [ 
        'A', 
        'A',
        ], { A: `#forge:ingots/${ingotStackType[i]}`, }
    )
  }

  // Plate recipies
  for (var i = 0; i < ingotPlateType.length; i++) {
    event.shapeless(
      Item.of(`kubejs:plate_${ingotPlateType[i]}`, 1),
      [ 
        '#mm:hammers', 
        `kubejs:stack_${ingotPlateType[i]}_ingot`
      ]
      ).damageIngredient(0).keepIngredient(0)
  }

  // Override iron plate recipie from Ad Astra
  event.remove({ output: 'ad_astra:iron_plate' })
  event.shapeless(
    Item.of(`ad_astra:iron_plate`, 1),
    [ 
      '#mm:hammers', 
      `kubejs:stack_iron_ingot`
    ]
    ).damageIngredient(0).keepIngredient(0)
  
  // Using plates
  replaceList(event, 'minecraft:iron_ingot', '#forge:plates/iron', ['mekanism:basic_smelting_factory',
                                                                    'mekanism:basic_enriching_factory',
                                                                    'mekanism:basic_crushing_factory',
                                                                    'mekanism:basic_compressing_factory',
                                                                    'mekanism:basic_combining_factory',
                                                                    'mekanism:basic_purifying_factory',
                                                                    'mekanism:basic_injecting_factory',
                                                                    'mekanism:basic_infusing_factory',
                                                                    'mekanism:enrichment_chamber',
                                                                    'mekanism:metallurgic_infuser',
                                                                    'mekanism:electrolytic_seperator',
                                                                    'mekanism:precision_sawmill',
                                                                    'mekanism:basic_fluid_tank',
                                                                    'mekanism:advanced_fluid_tank',
                                                                    'mekanism:elite_fluid_tank',
                                                                    'mekanism:ultimate_fluid_tank',
                                                                    'mekanism:basic_energy_cube',
                                                                    'mekanismgenerators:solar_generator',
                                                                    'mekanismgenerators:advanced_solar_generator',
                                                                    'mekanismgenerators:bio_generator',
                                                                    'minecraft:piston',
                                                                    'minecraft:bucket',
                                                                    'minecraft:minecart',
                                                                    'enderio:fluid_tank',
                                                                    'mekanism:boiler_casing',

                                                                    'ae2:blank_pattern',
                                                                    'ae2:item_cell_housing',
                                                                    'ae2:view_cell',
                                                                    'ae2:spatial_storage_cell_2',
                                                                    'ae2:spatial_storage_cell_16',
                                                                    'ae2:spatial_storage_cell_128',
                                                                    'ae2:item_storage_cell_1k',
                                                                    'ae2:item_storage_cell_4k',
                                                                    'ae2:item_storage_cell_16k',
                                                                    'ae2:item_storage_cell_64k',
                                                                    'ae2:item_storage_cell_256k'])

  replaceList(event, 'minecraft:copper_ingot', '#forge:plates/copper', ['mekanismgenerators:heat_generator',
                                                                        'ae2:fluid_cell_housing',
                                                                        'ae2:fluid_storage_cell_1k',
                                                                        'ae2:fluid_storage_cell_4k',
                                                                        'ae2:fluid_storage_cell_16k',
                                                                        'ae2:fluid_storage_cell_64k',
                                                                        'ae2:fluid_storage_cell_256k'])
  replaceList(event, 'enderio:dark_steel_ingot', '#forge:plates/dark_steel', ['enderio:stirling_generator','enderio:alloy_smelter','enderio:sag_mill','dark_steel_pressure_plate','enderio:pressurized_fluid_tank','enderio:dark_steel_door','enderio:dark_steel_trapdoor'])
})