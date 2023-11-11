// priority: 100

ServerEvents.recipes(event => {
    // Override iron plate recipie from Ad Astra
    event.remove({ output: 'enderio:basic_capacitor_bank' })
    event.remove({ output: 'enderio:advanced_capacitor_bank' })
    event.remove({ output: 'enderio:vibrant_capacitor_bank' })
})