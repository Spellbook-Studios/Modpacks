// priority: 0

// Visit the wiki for more info - https://kubejs.com/
const ingotStackType = ['copper', 'iron', 'dark_steel']
const ingotPlateType = ['copper',         'dark_steel']

StartupEvents.registry('item', e => {
    for (var i = 0; i < ingotStackType; i++) {
        e.create(`stack_${ingotStackType[i]}_ingot`).texture(`mm:item/stack_${ingotStackType[i]}_ingot`).displayName(`${ingotStackType[i]} Ingot Stack`)
    }
    
    for (var i = 0; i < ingotPlateType; i++) {
        e.create(`plate_${ingotPlateType[i]}`).texture(`mm:item/plate_${ingotPlateType[i]}`).displayName(`${ingotPlateType[i]} Plate`)
    }
})
