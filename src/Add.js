import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { green } from "@mui/material/colors";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export function Add({
  users, setusers, setIndx, setfname, setlname, setemail, setCountry, setNum, fname, lname, email, Country, number, indx
}) {
  var element;
  var userCopy = [...users];
  return (
    <div className="sidebar">
      <ul className="sidelist">
        <li className="input">
          <TextField
            label="First name"
            fullWidth
            variant="outlined"
            size="small"
            value={fname}
            onChange={(event) => setfname(event.target.value)} />
        </li>
        <li className="input">
          <TextField
            label="Last name"
            fullWidth
            variant="outlined"
            size="small"
            value={lname}
            onChange={(event) => setlname(event.target.value)} />
        </li>
        <li className="input">
          <TextField
            label="Email-id"
            fullWidth
            variant="outlined"
            size="small"
            value={email}
            onChange={(event) => setemail(event.target.value)} />
        </li>
        <li className="input">
          <TextField
            label="Country"
            fullWidth
            variant="outlined"
            size="small"
            value={Country}
            onChange={(event) => setCountry(event.target.value)} />
        </li>
        <li className="input">
          <TextField
            label="Phone number with code"
            fullWidth
            variant="outlined"
            size="small"
            value={number}
            onChange={(event) => setNum(event.target.value)} />
        </li>
      </ul>
      <div class="addbuttondiv">
        <Button
          variant="text"
          onClick={() => {
            if (`${fname}` !== "" ||
              `${lname}` !== "" ||
              `${email}` !== "" ||
              `${Country}` !== "") {
              element = {
                fname: `${fname}`,
                lname: `${lname}`,
                email: `${email}`,
                Country: `${Country}`,
                Phone: `${number}`,
              };
              if (indx === null)
                userCopy.push(element);
              else
                userCopy[indx] = element;
              setusers(userCopy);
              setfname("");
              setlname("");
              setemail("");
              setCountry("");
              setNum("");
              alert("saved");
            } else
              alert("Kindly enter the inputs");
            setIndx(null);
          }}
        >
          <AddCircleOutlineIcon sx={{ color: green[500] }} />
        </Button>
      </div>
    </div>
  );
}
