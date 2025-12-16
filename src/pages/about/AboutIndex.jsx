import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti nam
        praesentium unde voluptatem assumenda nulla. Fugiat, hic? Et sed eaque,
        ex officia exercitationem voluptates id, rerum ipsa molestias harum odio
        quod, possimus quae facilis? Officiis at fuga error temporibus provident
        harum, vel, repellendus cum illum rerum ea in. Sit provident eos esse,
        quia soluta, veritatis quo cupiditate veniam commodi nulla ipsum
        exercitationem aliquid eligendi, labore ea dolorum saepe fugiat ab quis
        asperiores necessitatibus numquam similique fugit earum. Cumque dolore
        culpa debitis iusto sint impedit numquam magni, iure aliquid sed dolores
        quo itaque nam, fugit esse quis at voluptatum aut a!
      </p>
      <Link to="education">Education</Link>
      <Link to="experience">Experience</Link>
    </>
  );
}
