import { useState } from "react";
import de from "date-fns/locale/de";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import Stack from "@mui/material/Stack";

const Calendar = ({ setCurrentAnswer }) => {
  const [date, setDate] = useState(new Date());
  const monthInGerman = {
    jan: "Januar",
    feb: "Februar",
    mar: "März",
    apr: "April",
    may: "Mai",
    jun: "Juni",
    jul: "Juli",
    aug: "August",
    sep: "September",
    okt: "Oktober",
    nov: "November",
    dec: "Dezember",
  };

  const weekDayInGerman = {
    mon: "Montag",
    tue: "Dienstag",
    wed: "Mittwoch",
    thu: "Donnerstag",
    fri: "Freitag",
    sat: "Samstag",
    sun: "Sonntag",
  };

  const handleDateChange = (date) => {
    setDate(date);
    date = String(date).slice(0, 15);
    let [weekDay, month, day, year] = date.split(" ");
    month = month.toLowerCase();
    weekDay = weekDay.toLowerCase();
    date = `${weekDayInGerman[weekDay]} ${day}. ${monthInGerman[month]} ${year}`;
    setCurrentAnswer(date);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={de}>
      <Stack spacing={3}>
        <MobileDatePicker
          value={date}
          onChange={(newValue) => {
            handleDateChange(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
};

export default Calendar;
