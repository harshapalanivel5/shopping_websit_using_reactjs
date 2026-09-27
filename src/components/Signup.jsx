import { SiGnuprivacyguard } from "react-icons/si"
import { Paper,Typography ,TextField ,Button} from "@mui/material";
import {useForm} from "react-hook-form"

let rendercount=0;

function Signup() {
  let paperstyle ={
        width :400,
        margin :"20px auto",
        padding :"20px",
        display : "grid",
        gap :"20px"
    };
    rendercount++;



    let {input,setInput}=useForm()
    let {register ,handleSubmit,formstate,}=useForm();

    let handledata=()=>{

    }

  return (
    <Paper elevation={20} style={paperstyle} component="form" onSubmit={handleSubmit(handledata)}>
      <Typography TextAlign="center">Create Account {rendercount}</Typography>
      <TextField label="Name" {...register("name")} required></TextField>
      <TextField label="Email" {...register("email")}></TextField>
      <TextField label="Age" {...register("age")}></TextField>
      <TextField label="Password" {...register("password")}></TextField>
      <TextField label="confirm password" {...register("confirm password")}></TextField>
      <Button type="submit" variant="contained">Signup</Button>
    </Paper>
  )
}

export default Signup