const TryGetTrails = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/trail/?collegeid=ef8f0795-9036-4301-b56f-48995494fcfe`)
  
      const json = response.data
      
      console.log(json)  

      
    } catch (error) {
      console.log("Error could not push data")
    }
}

export default TryGetTrails