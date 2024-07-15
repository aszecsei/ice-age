ServerEvents.recipes(event => {
    const id_prefix = 'iceage:immersiveengineering/metal_press/'
    global.auTags.gears.forEach(material => {
        let gear = global.itemFromTag('gears', material)
        if (gear.isEmpty()) {
            console.log(`${material} does not have a gear tag entry`)
            return
        }

        let ingotTag = Ingredient.of(`#forge:ingots/${material}`)
        if (ingotTag.getFirst().isEmpty()) {
            // check for gem
            ingotTag = Ingredient.of(`#forge:gems/${material}`)
        }

        if (!ingotTag.getFirst().isEmpty()) {
            event.custom({
                type: 'immersiveengineering:metal_press',
                mold: 'immersiveengineering:mold_gear',
                input: {
                    count: 4,
                    base_ingredient: ingotTag.toJson()
                },
                result: gear.toJson(),
                energy: 2400
            }).id(`${id_prefix}gear_${material}`)
        }
    })

    global.auTags.plates.forEach(material => {
        let plate = global.itemFromTag('plates', material)
        if (plate.isEmpty()) {
            console.log(`${material} does not have a plate tag entry`)
            return
        }

        let ingotTag = Ingredient.of(`#forge:ingots/${material}`)
        if (ingotTag.getFirst().isEmpty()) {
            // check for gem
            ingotTag = Ingredient.of(`#forge:gems/${material}`)
        }

        if (!ingotTag.getFirst().isEmpty()) {
            event.custom({
                type: 'immersiveengineering:metal_press',
                mold: 'immersiveengineering:mold_plate',
                input: ingotTag.toJson(),
                result: plate.toJson(),
                energy: 2400
            }).id(`${id_prefix}plate_${material}`)
        }
    })

    global.auTags.rods.forEach(material => {
        let rod = global.itemFromTag('rods', material)
        if (rod.isEmpty()) {
            console.log(`${material} does not have a rod tag entry`)
            return
        }

        let ingotTag = Ingredient.of(`#forge:ingots/${material}`)
        if (ingotTag.getFirst().isEmpty()) {
            // check for gem
            ingotTag = Ingredient.of(`#forge:gems/${material}`)
        }

        if (!ingotTag.getFirst().isEmpty()) {
            event.custom({
                type: 'immersiveengineering:metal_press',
                mold: 'immersiveengineering:mold_rod',
                input: {
                    count: 2,
                    base_ingredient: ingotTag.toJson()
                },
                result: rod.toJson(),
                energy: 2400
            }).id(`${id_prefix}rod_${material}`)
        }
    })
})