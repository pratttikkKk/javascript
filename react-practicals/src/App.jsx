
import React from "react";

import {
    Button,
    TextField,
    Typography,
    Card,
    CardContent,
    AppBar,
    Toolbar
} from "@mui/material";

function App() {

    return (
        <div>

            {/* 1. AppBar */}
            <AppBar position="sticky">
                <Toolbar>
                    <Typography variant="h6">
                        Student Portal
                    </Typography>
                </Toolbar>
            </AppBar>

            {/* 2. Card */}
            <Card sx={{ maxWidth: 350, margin: 5 }}>
                <CardContent>

                    {/* 3. Typography */}
                    <Typography variant="h5">
                        Registration Form
                    </Typography>

                    {/* 4. TextField */}
                    <TextField
                        label="Enter Name"
                        fullWidth
                        margin="normal"
                    />

                    {/* 5. Button */}
                    <Button variant="contained" fullWidth>
                        Register
                    </Button>

                </CardContent>
            </Card>

        </div>
    );
}

export default App;
