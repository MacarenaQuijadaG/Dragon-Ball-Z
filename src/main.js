import { placesOfBirth, filterData, orderDataByName} from './dataFunctions.js';
import { renderOptions, renderItems} from './view.js';
import { data }from './data/dataset.js';


const lugares = placesOfBirth(data)

const selectPlaces = document.querySelector("#select-filter")
selectPlaces.innerHTML = renderOptions(lugares)

const cardsList = document.querySelector("#root")
cardsList.innerHTML = renderItems(data)


let resultadosActuales = data
const selectPlanetas = document.querySelector("#select-filter")
selectPlanetas.addEventListener("change", (e)=> {
  const value = e.target.value 
  resultadosActuales = filterData(data,value)
  cardsList.innerHTML = renderItems(resultadosActuales)
})

const selectOrden = document.querySelector("#select-sort")
selectOrden.addEventListener("change", (e)=> {
  const value = e.target.value 
    
  cardsList.innerHTML = renderItems(orderDataByName(resultadosActuales,value))
})

const clearButton = document.querySelector('[data-testid="button-clear"]');

clearButton.addEventListener('click', function () {

  cardsList.innerHTML = renderItems(data)

});