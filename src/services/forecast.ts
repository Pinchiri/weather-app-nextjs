import { API_KEY } from "@/constants/constants";
import axios from "axios";

export async function getForecast(city: string, limit?: number, units?: string) {
  const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${API_KEY}&cnt=${limit}&units=${units}`)
  
  return data
}