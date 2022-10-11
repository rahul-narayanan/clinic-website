import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { green } from "@mui/material/colors";
import { Avatar, Grid } from "@mui/material";

export default function BlogCard({ data }) {
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
                <Grid item xs={9}>
                    <Typography variant="h6">
                        {data.authorName}
                    </Typography>
                    <Typography variant="overline">
                        {data.authorTitle}
                    </Typography>
                </Grid>
            </Grid>
        );
    }

    return (
        <Card sx={{ p: 2, pb: 3 }}>
            <CardContent>
                <Typography
                    variant="h5"
                    gutterBottom
                    textAlign="center"
                >
                    {data.title}
                </Typography>
                <Typography component="div" mt={2}>
                    {data.description}
                </Typography>
            </CardContent>
            <CardActions sx={{ bgcolor: green[50], p: 2 }}>
                {renderAuthor()}
            </CardActions>
        </Card>
    );
}
