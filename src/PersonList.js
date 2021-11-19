import axios from "axios";
import React, { Fragment } from "react";
import { useEffect } from "react";
import { useState } from "react";
import PersonDetails from "./PersonDetails";

export default function PersonList() {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    getAllPersons();
  }, []);

  const getAllPersons = () => {
    axios.get(`https://randomuser.me/api/?results=10`).then((res) => {
      console.log(res.data.results);
      setPersons(res.data.results);
    });
  };

  return (
    <div>
      {persons.map((person) => (
        <PersonDetails key={person.login.uuid} user={person} />
      ))}
    </div>
  );
}
