import { useState } from "react";
import "./styles.css";

const instrumentTypes = {
  Brass: [
    {
      name: "Cornet",
      img:
        "https://hub.yamaha.com/wp-content/uploads/2021/03/YCR-8335-cornet.jpg",
      info:
        "The cornet is distinguished from it by its conical bore, more compact shape, and mellower tone quality. "
    },
    {
      name: "French horn",
      img:
        "https://5.imimg.com/data5/NG/MU/YI/SELLER-2296536/french-horn-500x500.jpg",
      info:
        "The French horn is a brass instrument made of tubing wrapped into a coil with a flared bell."
    },
    {
      name: "Trombone",
      img:
        "https://www.macmillandictionary.com/external/slideshow/full/152522_full.jpg",
      info:
        "Most brass instruments use valves to alter the pitch, but trombones have a telescoping slide mechanism instead."
    },
    {
      name: "Tuba",
      img:
        "https://www.collinsdictionary.com/images/thumb/tuba_89974153_250.jpg?version=4.0.273",
      info:
        "As with all brass instruments, the sound is produced by lip vibration – a buzz – into a mouthpiece."
    },
    {
      name: "Trumpet",
      img:
        "https://www.tomleemusic.ca/media/catalog/product/cache/7b59eeedc8a9391b10c489498e31e772/t/r/trumpet.jpg",
      info:
        "The trumpet is a brass instrument commonly used in classical and jazz ensembles."
    }
  ],
  Keyboards: [
    {
      name: "Harpsichord",
      img:
        "https://www.harvardmagazine.com/sites/default/files/styles/4x3_main/public/img/article/0614/1407_harpischordb.jpg",
      info:
        "Harpsichord, keyboard musical instrument in which strings are set in vibration by plucking."
    },
    {
      name: "Harmonium",
      img:
        "https://cdn.shopify.com/s/files/1/1800/7761/products/BhavaMini-Natural-01_720x.jpg?v=1600292072",
      info:
        "A harmonium, also called a 'melodeon', 'reed organ' or 'pump organ', is a keyboard instrument that is a lot like an organ."
    },
    {
      name: "Organ",
      img:
        "https://www.rodgersinstruments.com/uploads/products/product_groups/overview_large/750x700/infinity-series-5.png",
      info:
        "The pipe organ is a musical instrument that produces sound by driving pressurized air (called wind) through the organ pipes selected from a keyboard."
    },
    {
      name: "Piano",
      img:
        "https://www.musikalessons.com/blog/wp-content/uploads/2017/06/grand-piano--300x300.jpg",
      info:
        "The piano is a stringed keyboard instrument in which the strings are struck by wooden hammers that are coated with a softer material."
    }
  ],
  Percussion: [
    {
      name: "Cymbals",
      img:
        "https://beatlescentre.com/wp-content/uploads/2020/08/hcs460-01-600x600.jpg",
      info:
        " Often used in pairs, cymbals consist of thin, normally round plates of various alloys. "
    },
    {
      name: "Drums",
      img:
        "https://europe.yamaha.com/en/files/Image-Index_PHX_2000x2000_034e377f8e61b7bdddc3092e333b55d6.jpg?impolicy=resize&imwid=396&imhei=396",
      info:
        "A drum kit – also called a drum set, trap set or simply drums – is a collection of drums, cymbals, and other percussion instruments."
    },
    {
      name: "Tabla",
      img:
        "https://images-eu.ssl-images-amazon.com/images/I/51zJNNdCxTL._SY300_SX300_QL70_FMwebp_.jpg",
      info:
        "A tabla is a pair of twin hand drums from the Indian subcontinent. "
    },
    {
      name: "Timpani",
      img:
        "https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/12121892-_1_dqddlj.jpg",
      info:
        " A type of drum categorised as a hemispherical drum, they consist of a membrane called a head stretched over a large bowl traditionally made of copper."
    },
    {
      name: "Xylophone",
      img:
        "https://i0.wp.com/www.majestic-percussion.com/wp-content/uploads/2020/09/X8540H-bk.jpg?fit=1024%2C691&ssl=1",
      info:
        "The xylophone is a musical instrument in the percussion family that consists of wooden bars struck by mallets."
    }
  ],
  Strings: [
    {
      name: "Guitar",
      img:
        "https://superawesomevectors.com/wp-content/uploads/2014/05/gibson-j-45-true-vintage-acoustic-guitar-free-vector-800x565.jpg",
      info:
        "The guitar is a fretted musical instrument that typically has six strings."
    },
    {
      name: "Harp",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdc3SAnIG7ohbVPa7W5ARJap4ckkYlzC1DQA&usqp=CAU",
      info:
        "The harp is a stringed musical instrument that has a number of individual strings running at an angle to its soundboard; the strings are plucked with the fingers. "
    },
    {
      name: "Viola",
      img:
        "https://www.musikalessons.com/blog/wp-content/uploads/2016/10/viola-isolated.jpg",
      info:
        "The viola is a string instrument that is bowed, plucked, or played with varying techniques."
    },
    {
      name: "Violin",
      img:
        "https://www.collinsdictionary.com/images/full/violin_47093287_1000.jpg",
      info:
        "The violin, sometimes known as a fiddle, is a wooden chordophone in the violin family."
    },
    {
      name: "Sitar",
      img:
        "https://cdn.shopify.com/s/files/1/1800/7761/products/SursargamVilayatKhanSitar-03_900x.jpg?v=1607361624",
      info:
        "The sitar is a plucked stringed instrument, originating from the Indian subcontinent, used in Hindustani classical music. "
    }
  ],
  Woodwind: [
    {
      name: "Clarinet",
      img:
        "https://5.imimg.com/data5/CU/OW/MY-78650/jinbao-clarinet-500x500.jpg",
      info: "The clarinet is a type of single-reed woodwind instrument."
    },
    {
      name: "Flute",
      img:
        "https://rukminim1.flixcart.com/image/416/416/k4ehnrk0/flute/k/7/x/kf13-kanha-original-imafnbhxpapybfzu.jpeg?q=70",
      info:
        " Like all woodwinds, flutes are aerophones, i.e. they make sound by vibrating a column of air."
    },
    {
      name: "Oboe",
      img: "https://thumbs.dreamstime.com/b/oboe-white-background-37634543.jpg",
      info: "The oboe is a type of double reed woodwind instrument."
    },
    {
      name: "Recorder",
      img:
        "https://thumbs.static-thomann.de/thumb/padthumb600x600/pics/bdb/166859/12750027_800.jpg",
      info:
        "A recorder can be distinguished from other duct flutes by the presence of a thumb-hole for the upper hand and seven finger-holes: three for the upper hand and four for the lower."
    },
    {
      name: "Saxophone",
      img: "https://m.media-amazon.com/images/I/51Gwbfh+tqL._SL1045_.jpg",
      info:
        "The saxophone is a type of single-reed woodwind instrument with a conical body, usually made of brass."
    }
  ]
};

var typesOfInstruments = Object.keys(instrumentTypes);

export default function App() {
  const [type, setType] = useState("Brass");

  function showInstrumentList(type) {
    console.log(type);
    setType(type);
  }

  return (
    <div className="App">
      <h1>Types of Musical Instruments 🎼</h1>
      <div>
        <div className="outer">
          {typesOfInstruments.map((type) => (
            <button key={type} onClick={() => showInstrumentList(type)}>
              {type}
            </button>
          ))}
        </div>
        <div>
          <ul>
            {instrumentTypes[type].map((iType) => (
              // <li className="list-stl" key={iType}>
              //   {iType.name}
              //   <div>
              //     <img className="list-stl" alt="img" src={iType.img} />
              //   </div>
              // </li>
              <li className="list-stl" key={iType}>
                <img className="hero-img" alt="img" src={iType.img} />
                <div>
                  <div style={{ textDecoration: "underline overline" }}>
                    {iType.name}
                  </div>
                  <p>{iType.info}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
