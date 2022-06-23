const radio = {

    stations: [
      {name: 'KPOP',
       song: [{title: 'Dynamite', artist: 'BTS'}, {title: 'Trap', artist: 'Eun Sun'}, {title: 'Haru Haru', artist: 'Big Bang'}]},
      {name: 'Country',
       song: [{title: 'Breal up in a small town', artist: 'Same Hunt'}, {title: 'Hurricane', artist: 'Luke Combs'}, {title: 'Speechless', artist: 'Dan and Shay'}]},
     {name: 'Hmong',
     song: [{title: 'Txij Hnub No', artist: 'David Yang'}, {title: 'Kuv Tos Koj', artist: 'Cedric Vang'}, {title: 'Ib Tug Phoojywg', atist: 'Chenning Xiong'}]}],
  
  changeStation() {
       let x = Math.floor(Math.random()* this.stations.length)
       let ranStation = this.stations[x].name
  
       let y = Math.floor(Math.random()* this.stations[x].song.length)
       let ranSong = this.stations[x].song[y]
  
       console.log(" Station " + ranStation + " Now Playing " + ranSong.title + " by " + ranSong.artist)
    }
  
  }
  
  radio.changeStation()
  
  console.log(radio.stations[3].song[3])
    