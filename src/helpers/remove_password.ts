export const removePassword = async (data: any) => {
    return {
        id: data.id,
        nombre: data.nombre,
        correo: data.correo,
        edad: data.edad
    }
}