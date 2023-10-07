// priority: 100
ServerEvents.recipes(event => { //listen for the "recipes" server event.
    event.shapeless(
        Item.of(`minecraft:leather`, 1),
        [ 
          'minecraft:rotten_flesh', 
          `minecraft:rotten_flesh`
        ]
    )
})