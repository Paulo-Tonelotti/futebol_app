class Team {
  id: string;

  name: string;

  country: string;

  logo: string;

  constructor(id: string, name: string, country: string, logo: string) {
    this.id = id;
    this.name = name;
    this.country = country;
    this.logo = logo;
  }
}

export { Team };
