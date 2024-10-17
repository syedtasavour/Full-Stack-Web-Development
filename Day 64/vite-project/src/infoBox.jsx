// import {result} from "./SearchBox.jsx";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import './infoBox.css';

export default function InfoBox({info}) {

  return (
    <div className="infobox" >
        <h2>WeatherInfo - {info.description}</h2>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://images.unsplash.com/photo-1595258509634-cc693e91e899?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3l8ZW58MHx8MHx8fDA%3D"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <Typography variant="body2" color="text.secondary" component={"span"} >
            <div>temp ={info.temp}&deg;C</div>
            <div>tempMin ={info.tempMin}&deg;C</div>
            <div>tempMax ={info.tempMax}&deg;C</div>
            <div>humidity ={info.humidity}</div>
            <div>feels like = {info.feels_like}</div>
            <div>description ={info.description}</div>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
