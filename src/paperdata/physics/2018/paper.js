const API =
  process.env.NODE_ENV === "production"
    ? `https://paperly-114b9e.us1.kinto.io`
    : "http://localhost:5000";

// const API = `https://paperly-114b9e.us1.kinto.io`;

let data = {
  paperId: "1",
  content: {
    title: "Advanced Level 2018 Physics",
    pages: [
      {
        title: `## When the temperature of a metal rod is increased by 100 °C, its fractional change in length is 2.4 x 10 <sup>-5</sup> . The linear expansivity of the material of the rod is \n <img  src='${API}/mathjax/getmathimage?equation=${encodeURIComponent(
          `\\frac{a+b}{1-a^2}`
        )}' style="width:10%;" />         `,
        choices: [
          {
            id: 1,
            text: `2.4 x 10 <sup>-3</sup> °C <sup>-1</sup> <img src='${API}/mathjax/getmathimage?equation=${encodeURIComponent(
              "\\frac{a-b}{1-a^2}"
            )}'/>  `,
          },
          {
            id: 2,
            text: `2.4 x 10 <sup>-4</sup> °C <sup>-1</sup> <img src='${API}/mathjax/getmathimage?equation=${encodeURIComponent(
              "\\sum_{i=0}^n i^2=\\frac{(n^2+n)(2n+1)}{6}"
            )}'/>   `,
          },
          {
            id: 3,
            text: "2.4 x 10 <sup>-5</sup> °C <sup>-1</sup>",
          },
          {
            id: 4,
            text: "2.4 x 10 <sup>-6</sup> °C <sup>-1</sup>",
          },
          {
            id: 5,

            text: "2.4 x 10 <sup>-7</sup> °C <sup>-1</sup>></img>",
          },
        ],
        correctAnswer: 3,
      },
      {
        title:
          "## In a certain thermodynamic process in which an ideal gas is used, the increase of the internal energy of the gas is equal to the heat supplied to the gas. This process is ",
        choices: [
          {
            id: 1,
            text: "a cyclic process.",
          },
          {
            id: 2,
            text: "an adiabatic process.",
          },
          {
            id: 3,
            text: "a constant pressure process.",
          },
          {
            id: 4,
            text: "a constant volume process.",
          },
          {
            id: 5,
            text: "an isothermal process.",
          },
        ],
        correctAnswer: 1,
      },

      {
        title:
          "## A certain transformer has 900 turns in the primary coil and 30 turns in the secondary coil. When 240 V alternating voltage is applied across the primary coil, the voltage across the secondary coil is",
        choices: [
          {
            id: 1,
            text: "0 V",
          },
          {
            id: 2,
            text: "8 V",
          },
          {
            id: 3,
            text: "12 V",
          },
          {
            id: 4,
            text: "72 V",
          },
          {
            id: 5,
            text: "7.2 KV",
          },
        ],
        correctAnswer: 1,
      },

      {
        title:
          "## The logic circuit shown in figure (a) is equivalent to \n <img style='width:60%;' src='https://res.cloudinary.com/paperly-tech/image/upload/v1603812651/papers/physics/2018/10q_adg5ca.png'></img> ",
        choices: [
          {
            id: 1,
            text:
              "<img style='width:100%;' src='https://res.cloudinary.com/paperly-tech/image/upload/v1603812651/papers/physics/2018/1_kuecvj.png'></img>",
          },
          {
            id: 2,
            text:
              "<img style='width:100%;' src='https://res.cloudinary.com/paperly-tech/image/upload/v1603812651/papers/physics/2018/2_qwtvds.png'></img>",
          },
          {
            id: 3,
            text:
              "<img style='width:100%;' src='https://res.cloudinary.com/paperly-tech/image/upload/v1603812651/papers/physics/2018/3_x8hu4z.png'></img>",
          },
          {
            id: 4,
            text:
              "<img style='width:100%;' src='https://res.cloudinary.com/paperly-tech/image/upload/v1603812651/papers/physics/2018/4_s2juxs.png'></img>",
          },
          {
            id: 5,
            text:
              "<img style='width:100%;' src='https://res.cloudinary.com/paperly-tech/image/upload/v1603812651/papers/physics/2018/5_xjpjpr.png'></img>",
          },
        ],
        correctAnswer: 1,
      },

      {
        title:
          "## A, B, C, D and E are five coplanar forces of equal magnitudes acting on a y body as shown in figure (a). Which of the following diagrams best represents the direction of the resultant of these forces? \n <img style='width:50%;' src='https://res.cloudinary.com/paperly-tech/image/upload/v1603813199/papers/physics/2018/12_s7stti.png'></img> ",
        choices: [
          {
            id: 1,
            text:
              "<img style='width:100%;' src='https://res.cloudinary.com/paperly-tech/image/upload/v1603813199/papers/physics/2018/1_jgalzk.png'></img>",
          },
          {
            id: 2,
            text:
              "<img style='width:100%;' src='https://res.cloudinary.com/paperly-tech/image/upload/v1603813199/papers/physics/2018/2_knhxvg.png'></img>",
          },
          {
            id: 3,
            text:
              "<img style='width:100%;' src='https://res.cloudinary.com/paperly-tech/image/upload/v1603813198/papers/physics/2018/3_moku2c.png'></img>",
          },
          {
            id: 4,
            text:
              "<img style='width:100%;' src='https://res.cloudinary.com/paperly-tech/image/upload/v1603813199/papers/physics/2018/4_ch9ryo.png'></img>",
          },
          {
            id: 5,
            text:
              "<img style='width:100%;' src='https://res.cloudinary.com/paperly-tech/image/upload/v1603813199/papers/physics/2018/5_w9g12z.png'></img>",
          },
        ],
        correctAnswer: 1,
      },
    ],
  },
};

export default data;
