import db from "../src/config/database.js";

async function cars() {
  await db.cars.createMany({
    data: [
      {
        model: "HB20",
        licensePlate: "ABC9090",
        year: 2001,
        color: "AZUL",
      },
      {
        model: "SONATA",
        licensePlate: "EZD3035",
        year: 2010,
        color: "PRETO",
      },
      {
        model: "X1",
        licensePlate: "FBI2231",
        year: 2018,
        color: "BRANCO",
      },
      {
        model: "CIVIC",
        licensePlate: "LPA1019",
        year: 2021,
        color: "CINZA",
      },
      {
        model: "ONIX",
        licensePlate: "HFA2713",
        year: 2023,
        color: "AMARELO",
      },
      {
        model: "EVOLUTION",
        licensePlate: "EPR6655",
        year: 2005,
        color: "CINZA",
      },
      {
        model: "UNO",
        licensePlate: "DMP7935",
        year: 2000,
        color: "PRETO",
      },
      {
        model: "320i",
        licensePlate: "LAS5546",
        year: 2017,
        color: "BRANCO",
      },
    ],
  });
}

cars()
  .then(() => {
    console.log("Registrou os carros com sucesso!");
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
