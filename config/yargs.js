const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}



const argv = require('yargs')
    .command('crear', 'Crea un elemento para hacer', descripcion)
    //.command('listar', 'Enlista los documentos', { descripcion, completado })
    .command('actualizar', 'Actualiza el estado completado de la tarea', { descripcion, completado })
    .command('borrar', 'Elimina de la lista de tareas, esa tarea', descripcion)
    .help()
    .argv;


module.exports = {
    argv
}

/*
comando crear 'crear un elemnto por hacer'

--descripcion - d

comando actualizar 'Actualiza el estado completado de la tarea'
    --descripcion - d
    --completado - c valor de defecto true

--help*/