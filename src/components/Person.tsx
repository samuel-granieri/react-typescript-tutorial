import * as React from 'react';
import {FC, useState, ChangeEvent} from 'react';

export enum HairColor{
    Blonde = 'You hair is blonde, good for you',
    Brown = 'Cool hair color',
    Pink = 'Wow this is so cool'
}


interface Props {
    name: string,
    age: number,
    email: string,
    hairColor: HairColor
}


export const Person: FC<Props> = ({name, age, email, hairColor})=>{

    const [country, setCountry] = useState<string | null>(null)

    const handleChange = (event: ChangeEvent<HTMLInputElement>)=>{
        setCountry(event.target.value)
    }

  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{email}</h1>

      <input placeholder='Write down your country...' onChange={(e)=>{handleChange(e)}}/>

      {country}
      {HairColor.Blonde}
    </div>
  );
}
