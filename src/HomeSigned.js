import React from 'react'
import Feed from './Feed'

export default function HomeSigned() {
    const timeOptions = {
        weekday: "short",
        month: "numeric",
        year: "numeric",
        day: "numeric",
      };
      const sampleMeows = [
        {
          sender: "Un gato",
          content: "miau miau miau",
          date: new Date(Date.now()).toString(),
        },
        {
          sender: "Otro gato",
          content: "miau miau",
          date: new Date(Date.now()).toString(),
        },
      ];
    

  return (
    <Feed meows={sampleMeows} />
  )
}
