import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";
import { animalsType } from "../../api/AnimalType";
import { NextPageContext } from "next";

export interface NameType {
  animals: animalsType[] | undefined;
}

const Name = ({ animals }: NameType) => {
  // const router = useRouter();

  return (
    <div>
      <p>Race: {animals[0].race}</p>
      <p>Name: {animals[0].name}</p>
      <Link href="/detail">
        <a>Back to list</a>
      </Link>
    </div>
  );
};

Name.getInitialProps = async ({ query }: NextPageContext) => {
  const response = await fetch(
    "http://localhost:4001/animals?race=" + query.race + "&name=" + query.name
  );
  const animals: animalsType[] | undefined = await response.json();

  return { animals: animals };
};

export default Name;
