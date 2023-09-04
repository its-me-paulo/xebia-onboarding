import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PageHeaderComponent } from '../components/PageHeader';
import { Button, FormControl, FormHelperText, Grid, Input, TextField } from '@mui/material';

export interface ITeamSetupPageProps {
}

export default function TeamSetupPage(props: ITeamSetupPageProps) {
  const [teamName, setTeamName] = useState("")
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError(false)
    setTeamName(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (handleErrors()) {
      navigate("/ready-player-app")
    }
  }

  function handleErrors(): Boolean {
    if (teamName) {
      return true
    }
    setError(true)
    return false
  }

  return (
    <>
      <PageHeaderComponent header="Team setup" />
      <Grid container display="flex" justifyContent="center" style={{ paddingTop: "35vh" }}>
        <Grid xs={6} item={true}>
          <form onSubmit={handleSubmit}>
            <TextField label="Enter Team name" variant="standard" color={error ? "error" : "secondary"} fullWidth onChange={handleChange} name="test" aria-describedby="component-error-text" />
            {error && <FormHelperText error id="component-error-text">A team name must not be empty</FormHelperText>}
            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
              <Button type="submit" style={{ margin: "20px 0" }} variant='contained'>Start New Game</Button>
            </div>
          </form>
        </Grid>
      </Grid>
    </>
  );
}
