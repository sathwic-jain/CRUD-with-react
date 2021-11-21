import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { pink, purple } from "@mui/material/colors";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import PhoneIcon from "@mui/icons-material/Phone";
import PersonIcon from "@mui/icons-material/Person";
import { useHistory } from "react-router";

export function Carddata({
  users, setusers, setIndx, setfname, setlname, setemail, setCountry, setNum,
}) {
  var history = useHistory();
  var userCopy;
  return (
    <div className="cardbody">
      {users.map((each, index) => (
        <div className="eachcard">
          <Card>
            <div className="details">
              <h2>
                <PersonIcon sx={{ color: purple[300] }} />
                {each.fname} {each.lname}
              </h2>
              <span>
                <EmailIcon color="disabled" /> {each.email}
              </span>
              <p>
                <HomeIcon color="disabled" /> {each.Country}
              </p>
              <p>
                <PhoneIcon color="disabled" /> {each.Phone}
              </p>
            </div>
            <div className="buttons">
              <Button
                variant="text"
                onClick={() => {
                  setIndx(index);
                  setfname(users[index].fname);
                  setlname(users[index].lname);
                  setemail(users[index].email);
                  setCountry(users[index].Country);
                  setNum(users[index].Phone);
                  history.push("/Add");
                }}
              >
                <EditIcon />
              </Button>
              <Button
                variant="text"
                onClick={() => {
                  setIndx(index);
                  userCopy = users.filter((ele, idx) => index !== idx);
                  setusers(userCopy);
                }}
              >
                <DeleteOutlineOutlinedIcon sx={{ color: pink[500] }} />
              </Button>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
}
