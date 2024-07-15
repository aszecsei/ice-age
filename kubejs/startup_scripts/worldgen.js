WorldgenEvents.remove(e => {

    const oresToRemove = [
    ]
    e.removeOres(o => {
        o.worldgenLayer = 'underground_ores'
        o.blocks = oresToRemove
    })
})