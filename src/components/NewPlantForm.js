import React, {useState} from "react";

function NewPlantForm({addPlant}) {
  const [newPlant, setNewPlant] = useState({
    name: '',
    image: '',
    price: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPlant((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPlant(newPlant);
    setNewPlant({
      name: "",
      image: "",
      price: "",
    });
  };

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={newPlant.name} placeholder="Plant name" onChange={handleChange}/>
        <input type="text" name="image" value={newPlant.image} placeholder="Image URL" onChange={handleChange}/>
        <input type="number" name="price" value={newPlant.price} step="0.01" placeholder="Price" onChange={handleChange}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
