class Team {
  id: string;

  name: string;

  country: string;

  constructor(id: string, name: string, country: string){
    this.id = id;
    this.name = name;
    this.country = country;
  }
}

export { Team }