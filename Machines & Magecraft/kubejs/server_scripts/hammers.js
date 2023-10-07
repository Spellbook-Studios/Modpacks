// priority: 1
const hammerTypes = ["wood","stone","iron","gold","diamond"]
const hammerMat = ["#minecraft:planks","#minecraft:stone_tool_materials","minecraft:iron_ingot","minecraft:gold_ingot","minecraft:diamond"]

ServerEvents.tags('item', event => {
    for(var i = 0; i < hammerTypes.length; i++) {
        event.add('mm:hammers', `kubejs:hammer_${hammerTypes[i]}`)
    }
})

ServerEvents.recipes(event => { //listen for the "recipes" server event.
    // Hammer recipies
    for(var i = 0; i < hammerTypes.length; i++) {
        event.shaped(
            Item.of(`kubejs:hammer_${hammerTypes[i]}`, 1),
            [ 
                ' B ', 
                ' AB',
                'A  '  
            ],
            {
                A: '#forge:rods', 
                B: `${hammerMat[i]}`
            }
            )
    }

    // Remove ad astra hammer
    event.remove({ output: 'ad_astra:hammer' })
    event.replaceInput(
        { input: 'ad_astra:hammer' }, // Arg 1: the filter
        'ad_astra:hammer',            // Arg 2: the item to replace
        '#mm:hammers'         // Arg 3: the item to replace it with
        // Note: tagged fluid ingredients do not work on Fabric, but tagged items do.
        )
})