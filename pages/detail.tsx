import Link from "next/link";
import { animalsType } from "../api/AnimalType";

export interface detailsProps {
  animals?: animalsType[];
}

const details = ({ animals }: detailsProps) => {
  const animalList = () => {
    return animals?.map((animal, index) => {
      return (
        <div key={animal.name}>
          <Link href={`/${animal.race}/${animal.name}`}>
            <a>
              Visite {animal.name} the {animal.race}
            </a>
          </Link>
        </div>
      );
    });
  };

  return <div>{animalList()}</div>;
};

details.getInitialProps = async () => {
  const response = await fetch("http://localhost:4001/animals");
  const animals: animalsType[] | undefined = await response.json();
  return { animals: animals };
};

export default details;
