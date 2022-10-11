import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { green } from "@mui/material/colors";
import { Avatar, Grid } from "@mui/material";

import DoubleQuotesImg from "../images/double-quotes.svg";

export default function TestimonialCard({ data }) {
    function renderAuthor() {
        return (
            <Grid
                container
                justifyContent="center"
                alignContent="center"
            >
                <Grid item xs={3}>
                    <Avatar
                        alt={data.authorName}
                        src={data.authorImg}
                        sx={{ width: 60, height: 60 }}
                    />
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h6">
                        {data.authorName}
                    </Typography>
                    <Typography variant="overline">
                        {data.authorTitle}
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Avatar
                        src={DoubleQuotesImg}
                        sx={{ width: 60, height: 60 }}
                    />
                </Grid>
            </Grid>
        );
    }

    return (
        <Card sx={{ p: 1 }}>
            <CardContent>
                <Typography component="div">
                    {data.content}
                </Typography>
            </CardContent>
            <CardActions sx={{ p: 2 }}>
                {renderAuthor()}
            </CardActions>
        </Card>
    );
}
