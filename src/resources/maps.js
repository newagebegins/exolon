define(function () {
  
  var maps = [
    // Level 1
    {
      name: "L01S01",
      type: "tmx",
      src: "maps/L01S01.tmx",
    },
    {
      name: "L01S02",
      type: "tmx",
      src: "maps/L01S02.tmx",
    },
    {
      name: "L01S03",
      type: "tmx",
      src: "maps/L01S03.tmx",
    },
    {
      name: "L01S04",
      type: "tmx",
      src: "maps/L01S04.tmx",
    },
    {
      name: "L01S05",
      type: "tmx",
      src: "maps/L01S05.tmx",
    },
    {
      name: "L01S06",
      type: "tmx",
      src: "maps/L01S06.tmx",
    },
    {
      name: "L01S07",
      type: "tmx",
      src: "maps/L01S07.tmx",
    },
    {
      name: "L01S08",
      type: "tmx",
      src: "maps/L01S08.tmx",
    },
    {
      name: "L01S09",
      type: "tmx",
      src: "maps/L01S09.tmx",
    },
    {
      name: "L01S10",
      type: "tmx",
      src: "maps/L01S10.tmx",
    },
    {
      name: "L01S11",
      type: "tmx",
      src: "maps/L01S11.tmx",
    },
    {
      name: "L01S12",
      type: "tmx",
      src: "maps/L01S12.tmx",
    },
    {
      name: "L01S13",
      type: "tmx",
      src: "maps/L01S13.tmx",
    },
    {
      name: "L01S14",
      type: "tmx",
      src: "maps/L01S14.tmx",
    },
    {
      name: "L01S15",
      type: "tmx",
      src: "maps/L01S15.tmx",
    },
    {
      name: "L01S16",
      type: "tmx",
      src: "maps/L01S16.tmx",
    },
    {
      name: "L01S17",
      type: "tmx",
      src: "maps/L01S17.tmx",
    },
    {
      name: "L01S18",
      type: "tmx",
      src: "maps/L01S18.tmx",
    },
    {
      name: "L01S19",
      type: "tmx",
      src: "maps/L01S19.tmx",
    },
    {
      name: "L01S20",
      type: "tmx",
      src: "maps/L01S20.tmx",
    },
    {
      name: "L01S21",
      type: "tmx",
      src: "maps/L01S21.tmx",
    },
    {
      name: "L01S22",
      type: "tmx",
      src: "maps/L01S22.tmx",
    },
    {
      name: "L01S23",
      type: "tmx",
      src: "maps/L01S23.tmx",
    },
    {
      name: "L01S24",
      type: "tmx",
      src: "maps/L01S24.tmx",
    },
    {
      name: "L01S25",
      type: "tmx",
      src: "maps/L01S25.tmx",
    },
    
    // Level 2
    {
      name: "L02S01",
      type: "tmx",
      src: "maps/L02S01.tmx",
    },
    {
      name: "L02S02",
      type: "tmx",
      src: "maps/L02S02.tmx",
    },
    {
      name: "L02S03",
      type: "tmx",
      src: "maps/L02S03.tmx",
    },
    {
      name: "L02S04",
      type: "tmx",
      src: "maps/L02S04.tmx",
    },
    {
      name: "L02S05",
      type: "tmx",
      src: "maps/L02S05.tmx",
    },
    {
      name: "L02S06",
      type: "tmx",
      src: "maps/L02S06.tmx",
    },
    {
      name: "L02S07",
      type: "tmx",
      src: "maps/L02S07.tmx",
    },
    {
      name: "L02S08",
      type: "tmx",
      src: "maps/L02S08.tmx",
    },
    {
      name: "L02S09",
      type: "tmx",
      src: "maps/L02S09.tmx",
    },
    {
      name: "L02S10",
      type: "tmx",
      src: "maps/L02S10.tmx",
    },
    {
      name: "L02S11",
      type: "tmx",
      src: "maps/L02S11.tmx",
    },
    {
      name: "L02S12",
      type: "tmx",
      src: "maps/L02S12.tmx",
    },
    {
      name: "L02S13",
      type: "tmx",
      src: "maps/L02S13.tmx",
    },
    {
      name: "L02S14",
      type: "tmx",
      src: "maps/L02S14.tmx",
    },
    {
      name: "L02S15",
      type: "tmx",
      src: "maps/L02S15.tmx",
    },
    {
      name: "L02S16",
      type: "tmx",
      src: "maps/L02S16.tmx",
    },
    {
      name: "L02S17",
      type: "tmx",
      src: "maps/L02S17.tmx",
    },
    {
      name: "L02S18",
      type: "tmx",
      src: "maps/L02S18.tmx",
    },
    {
      name: "L02S19",
      type: "tmx",
      src: "maps/L02S19.tmx",
    },
    {
      name: "L02S20",
      type: "tmx",
      src: "maps/L02S20.tmx",
    },
    {
      name: "L02S21",
      type: "tmx",
      src: "maps/L02S21.tmx",
    },
    {
      name: "L02S22",
      type: "tmx",
      src: "maps/L02S22.tmx",
    },
    {
      name: "L02S23",
      type: "tmx",
      src: "maps/L02S23.tmx",
    },
    {
      name: "L02S24",
      type: "tmx",
      src: "maps/L02S24.tmx",
    },
    {
      name: "L02S25",
      type: "tmx",
      src: "maps/L02S25.tmx",
    },
    
    // Level 3
    {
      name: "L03S01",
      type: "tmx",
      src: "maps/L03S01.tmx",
    },
    {
      name: "L03S02",
      type: "tmx",
      src: "maps/L03S02.tmx",
    },
    {
      name: "L03S03",
      type: "tmx",
      src: "maps/L03S03.tmx",
    },
    {
      name: "L03S04",
      type: "tmx",
      src: "maps/L03S04.tmx",
    },
    {
      name: "L03S05",
      type: "tmx",
      src: "maps/L03S05.tmx",
    },
    {
      name: "L03S06",
      type: "tmx",
      src: "maps/L03S06.tmx",
    },
    {
      name: "L03S07",
      type: "tmx",
      src: "maps/L03S07.tmx",
    },
    {
      name: "L03S08",
      type: "tmx",
      src: "maps/L03S08.tmx",
    },
    {
      name: "L03S09",
      type: "tmx",
      src: "maps/L03S09.tmx",
    },
    {
      name: "L03S10",
      type: "tmx",
      src: "maps/L03S10.tmx",
    },
    {
      name: "L03S11",
      type: "tmx",
      src: "maps/L03S11.tmx",
    },
    {
      name: "L03S12",
      type: "tmx",
      src: "maps/L03S12.tmx",
    },
    {
      name: "L03S13",
      type: "tmx",
      src: "maps/L03S13.tmx",
    },
    {
      name: "L03S14",
      type: "tmx",
      src: "maps/L03S14.tmx",
    },
    {
      name: "L03S15",
      type: "tmx",
      src: "maps/L03S15.tmx",
    },
    {
      name: "L03S16",
      type: "tmx",
      src: "maps/L03S16.tmx",
    },
    {
      name: "L03S17",
      type: "tmx",
      src: "maps/L03S17.tmx",
    },
    {
      name: "L03S18",
      type: "tmx",
      src: "maps/L03S18.tmx",
    },
  ];
  
  return maps;
  
});
