// priority: 1


StartupEvents.registry('item', e => {
    e.create('hammer_wood').texture('mm:item/hammer_wood').displayName('Wooden Hammer').unstackable().maxDamage(59)
    e.create('hammer_stone').texture('mm:item/hammer_stone').displayName('Stone Hammer').unstackable().maxDamage(131)
    e.create('hammer_iron').texture('mm:item/hammer_iron').displayName('Iron Hammer').unstackable().maxDamage(250)
    e.create('hammer_gold').texture('mm:item/hammer_gold').displayName('Gold Hammer').unstackable().maxDamage(100)
    e.create('hammer_diamond').texture('mm:item/hammer_diamond').displayName('Diamond Hammer').unstackable().maxDamage(750)
})
