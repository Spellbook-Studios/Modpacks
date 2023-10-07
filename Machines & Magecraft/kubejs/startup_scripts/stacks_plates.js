// priority: 1

// Visit the wiki for more info - https://kubejs.com/
const ingotStackType = ['copper', 'iron', 'dark_steel']
const ingotPlateType = ['copper',         'dark_steel']

StartupEvents.registry('item', e => {
    let fixName = (matIn) => {
        const withSpace = matIn.replace("_", " ")
        const words = withSpace.split(" ");

        for (let i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        }

        return words.join(" ");
    }

    for (var i = 0; i < ingotStackType.length; i++) {
        e.create(`stack_${ingotStackType[i]}_ingot`).texture(`mm:item/stack_${ingotStackType[i]}_ingot`).displayName(fixName(`${ingotStackType[i]} Ingot Stack`))
    }
    
    for (var i = 0; i < ingotPlateType.length; i++) {
        e.create(`plate_${ingotPlateType[i]}`).texture(`mm:item/plate_${ingotPlateType[i]}`).displayName(fixName(`${ingotPlateType[i]} Plate`))
    }
})
