type tPerson = {
  name: string;
  idade: number;
};

function showPerson(data: tPerson) {
  console.log(data);
}

showPerson({
  name: "Fred",
  idade: 28,
});
