"use client";
import {useEffect, useState} from 'react'

const CountryLookup = () => {
  const [country, setCountry] = useState('India');
  useEffect(() => {
        const getCountry = async () => {
            try {
              const res = await fetch(`https://extreme-ip-lookup.com/json/?key=${process.env.LOOKUP_API_KEY}`)
                        .then((res) => res.json())
                        .then((data) => data.country);

              if(!res) return;
              setCountry(res);
            } catch (error) {
              console.log(error.message);
            }
        }
        // getCountry();
  },[]);

  return (
    <div>{country}</div>
  )
}

export default CountryLookup