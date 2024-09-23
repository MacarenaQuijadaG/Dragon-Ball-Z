
export const placesOfBirth = (personajes) =>{
    const placeOfBirthList= personajes.map(personaje => personaje.facts.placeOfBirth);
    const unicos = new Set(placeOfBirthList);
    const lugaresUnicos = Array.from(unicos);
    
    return lugaresUnicos;
  }
  // data y valor filtrado
  export const filterData =(personajes, placeOfBirth) =>{
    const personajesFiltrados = personajes.filter(personaje => personaje.facts.placeOfBirth === placeOfBirth)
    return personajesFiltrados
  }
  
  export const orderDataByName = (personajes, orden) => {
    personajes.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB){
        return -1; 
  
      }
      if (nameA > nameB){
        return 1
      }
      return 0;
    })
      
    if(orden === "desc"){
      personajes.reverse() 
    } 
    return personajes
  }