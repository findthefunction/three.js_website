import { createRef } from "react"
import { Vector3 } from "three"

const state = {
  sections: 9,
  pages: 8,
  zoom: 100,
  paragraphs: [
    {
      offset: 1,
      factor: 1.75,
      header: "Hi, I'm Christopher",
      image: "/me.jpg",
      aspect: 1.51,
      text: "I like to build structures and explore frameworks. "
    },
    {
      offset: 2,
      factor: 2.0,
      header: "Blockchain + Web3",
      image: "/chain.jpg",
      aspect: 1.5,
      text:
        "Invest - Interact - Identify"
    },
    {
      offset: 3,
      factor: 2.25,
      header: "Data Analytics",
      image: "/birds.jpg",
      aspect: 1.5037,
      text:
        "There are patterns everywhere, what do they show us?"
    },
    {
      offset: 4,
      factor: 2.0,
      header: "Containerization",
      image: "/container.jpg",
      aspect: 0.665,
      text:
        "Security and scalability are cardinal to good ideas"
    },
    {
      offset: 5,
      factor: 1.75,
      header: "Automation",
      image: "/repeat.jpg",
      aspect: 1.55,
      text:
        "Precise - Efficient - Rigorous"
    },
    { offset: 7, factor: 1.05, header: "Communication", image: "/tower.jpg", aspect: 1.77, text: "Discuss new ideas." }
  ],
  stripes: [
    { offset: 0, color: "#000", height: 7 },
    { offset: 6.3, color: "#000", height: 20 }
  ],
  diamonds: [
    { x: 0, offset: 0.15, pos: new Vector3(), scale: 8, factor: 4 },
    { x: 2, offset: 1.1, pos: new Vector3(), scale: 1.8, factor: 2.1 },
    { x: -5, offset: 2, pos: new Vector3(), scale: 1.8, factor: 2.5 },
    { x: 0, offset: 3.2, pos: new Vector3(), scale: 1.8, factor: 1.75 },
    { x: 0, offset: 4, pos: new Vector3(), scale: 1.8, factor: 2.5 },
    { x: 2, offset: 5.5, pos: new Vector3(), scale: 2.25, factor: 0.85 },
    { x: -5, offset: 7, pos: new Vector3(), scale: 1.8, factor: 2 },
    { x: 0, offset: 8, pos: new Vector3(), scale: 2.5, factor: 6 }
  ],
  top: createRef()
}

export default state
