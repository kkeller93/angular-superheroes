let superheroData = [
  {name: "Superman", phone_number: "6753420990", comic: "DC", photo_url: "http://bit.ly/2mYbmFu"},
  {name: "Batman", phone_number: "7038923128", comic: "DC", photo_url: "http://bit.ly/2mtWtwG"},
  {name: "Green Lantern", phone_number: "4239087812", comic: "DC", photo_url: "http://bit.ly/2mY8Q2b"},
  {name: "Spider-man", phone_number: "9938125390", comic: "Marvel", photo_url: "http://bit.ly/2mxesmy"},
  {name: "Wolverine", phone_number: "5718932123", comic: "Marvel", photo_url: "http://bit.ly/2meYzjN"},
  {name: "Iron Man", phone_number: "4149037456", comic: "Marvel", photo_url: "http://bit.ly/2n76qgz"},
  {name: "Hulk", phone_number: "7531244234", comic: "Marvel", photo_url: "http://bit.ly/2lUjqpH"},
  {name: "Thor", phone_number: "7103968904", comic: "Marvel", photo_url: "http://bit.ly/2mfumAM"},
  {name: "Nightwing", phone_number: "482990121", comic: "DC", photo_url: "http://bit.ly/2mNW0qd"},
  {name: "Green Arrow", phone_number: "8382912835", comic: "DC", photo_url: "http://bit.ly/2my5iWT"},
  {name: "Aquaman", phone_number: "8492349009", comic: "DC", photo_url: "http://bit.ly/2lV6q35"}
]

angular
  .module("superhero", [])
  .controller("superheroCtrl", [superheroController])

  function superheroController() {
    this.superhero = superheroData;

    this.addSuperhero = function() {
      let superhero = {name: this.newName, phone_number:this.newPhoneNumber, comic: this.newComic, photo_url:this.newPhotoURL};
      this.superhero.push(superhero)
    }
  }
