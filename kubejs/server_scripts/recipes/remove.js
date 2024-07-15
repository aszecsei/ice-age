ServerEvents.recipes(event => {
    const recipes = [
        {output: '#forge:gears'},
        {output: '#forge:plates'},
        {output: '#forge:rods'},
    ]

    let amt = 0
    recipes.forEach(recipe => {
        event.remove(recipe)
        amt++
    })
    console.info(`Removed ${amt} recipes`)
})