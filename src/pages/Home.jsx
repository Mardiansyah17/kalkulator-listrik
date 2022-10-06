import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React, { useState } from "react";
import InputForm from "../components/InputForm";
import Output from "../components/Output";

const Home = () => {
  const [daya, setDaya] = useState("");
  const [waktu, setWaktu] = useState("");
  const [satuanDaya, setSatuanDaya] = useState("watt");
  const [satuanWaktu, setSatuanWaktu] = useState("menit");
  const [tarif, setTarif] = useState("");
  const [hasil, setHasil] = useState(0);
  const valueHandler = (name, val) => {
    if (name == "daya") {
      setDaya(val);
    }

    if (name == "waktu") {
      setWaktu(val);
    }
  };

  const hitung = () => {
    let waktuJam = 0;
    satuanWaktu == "menit" ? (waktuJam = waktu / 60) : (waktuJam = waktu);
    let pemakaianListrik = ((daya * waktuJam) / 1000) * tarif;
    setHasil(Math.ceil(pemakaianListrik));
  };

  return (
    <>
      <div className=" w-full sm:w-3/5 mx-auto p-3">
        <h1 className="font-bold text-lg mb-3">Kalkulator pemakaian listrik</h1>
        <div className="flex space-x-2">
          <InputForm
            label={"Pemakaian Listrik"}
            type="number"
            valueHandler={valueHandler}
            name="daya"
            value={daya}
          />
          <div className="w-32">
            <FormControl fullWidth>
              <InputLabel id="satuanDaya">Satuan</InputLabel>
              <Select
                labelId="satuanDaya"
                value={satuanDaya}
                id="demo-simple-select"
                label="Satuan"
              >
                <MenuItem value={"watt"}>Watt</MenuItem>
                <MenuItem value={20}>Kilo watt</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="flex space-x-2 mt-3">
          <InputForm
            label={"Waktu"}
            type="number"
            valueHandler={valueHandler}
            name="waktu"
            value={waktu}
          />
          <div className="w-32">
            <FormControl fullWidth>
              <InputLabel id="satuanWaktu">Satuan</InputLabel>
              <Select
                labelId="satuanWaktu"
                value={satuanWaktu}
                id="demo-simple-select"
                label="Satuan"
                onChange={(value) => setSatuanWaktu(value.target.value)}
              >
                <MenuItem value={"menit"}>Menit</MenuItem>
                <MenuItem value={"jam"}>Jam</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        <div className="min-w-[30%]   max-w-fit  mt-3">
          <FormControl fullWidth>
            <InputLabel id="daya">Daya Listrik</InputLabel>
            <Select
              value={tarif}
              labelId="daya"
              onChange={(value) => setTarif(value.target.value)}
              label="Daya Listrik"
            >
              <MenuItem value={415}>450 Watt subsidi - Rp415/kWh</MenuItem>
              <MenuItem value={605}>900 Watt subsidi - Rp605/kWh</MenuItem>
              <MenuItem value={1352}>
                900 Watt nonsubsidi - Rp1.352/kWh
              </MenuItem>
            </Select>
          </FormControl>
        </div>
        <Output title={"harian"} biaya={hasil} />
        <Output title={"Bulanan"} biaya={hasil * 30} />
        <div className="mt-3">
          <Button onClick={hitung} variant="outlined">
            Hitung
          </Button>
        </div>
      </div>
    </>
  );
};

export default Home;
