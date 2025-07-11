import React,{useState} from 'react'

const MyComponent12 = () => {
  const [cars, setCars] = useState([])
  const [carYear, setCarYear] = useState(new Date().getFullYear())
  const [carMake, setCarMake] = useState("")
  const [carModel, setCarModel] = useState("")

  function handleAddCar() {
    if (carMake.trim() === "" || carModel.trim() === "") {
      return
    }
    const newCar = {
      year: carYear,
      make: carMake,
      model: carModel
    }
    setCars([...cars, newCar])
    setCarMake("")
    setCarModel("")
    setCarYear(new Date().getFullYear())
  }

  function handleRemoveCar(index) {
    const newCars = cars.filter((_, i) => i !== index)
    setCars(newCars)
  }

  function handleYearChange(event) {
    setCarYear(event.target.value)
  }

  function handleMakeChange(event) {
    setCarMake(event.target.value)
  }

  function handleModelCar(event) {
    setCarModel(event.target.value)
  }

  return (
    <div>
      <h1>List of Car Objects</h1>
      <ul>
        {cars.map((car, index) => (
          <li key={index}>
            {car.year} {car.make} {car.model}{" "}
            <button onClick={() => handleRemoveCar(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <input
        type="number"
        value={carYear}
        onChange={handleYearChange}
        placeholder="Enter Car Year"
      />
      <input
        type="text"
        value={carMake}
        onChange={handleMakeChange}
        placeholder="Enter Car Make"
      />
      <input
        type="text"
        value={carModel}
        onChange={handleModelCar}
        placeholder="Enter Car Model"
      />
      <button onClick={handleAddCar}>Add Car</button>
    </div>
  )
}

export default MyComponent12
