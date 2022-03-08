import axios from "axios";
import { useEffect, useState } from "react";

export const useGetUserIp = () => {
  const [ip, setIp] = useState();

  const getData = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    console.log(res.data);
    setIp(res.data.IPv4);
  };

  useEffect(() => {
    getData();
  }, []);
  return { ip };
};
