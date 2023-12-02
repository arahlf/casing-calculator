'use client';

import { Button, Input, ThemeProvider, Typography } from '@material-tailwind/react'
import { ChangeEvent, Dispatch, useState } from 'react';

export default function Home() {
  const defaultCasingWidth = 3.5;
  const defaultReveal = 0.25;

  const [windowInnerWidth, setWindowInnerWidth] = useState(0);
  const [windowInnerHeight, setWindowInnerHeight] = useState(0);
  const [casingWidth, setCasingWidth] = useState(defaultCasingWidth);
  const [reveal, setReveal] = useState(defaultReveal);

  const [headLength, setHeadLength] = useState(0);
  const [legLength, setLegLength] = useState(0);
  const [bottomLength, setBottomLength] = useState(0);

  function onInputChangeHandler(handler: Dispatch<number>) {
    return (event: ChangeEvent<HTMLInputElement>) => {
      var value = parseFloat(event.target.value);

      handler(isNaN(value) ? 0 : value);
    };
  }

  function calculate() {
    // TODO add input-level validations
    if (windowInnerWidth == 0 || windowInnerHeight == 0 || casingWidth == 0) {
      return;
    }

    setBottomLength(windowInnerWidth + (reveal * 2));
    setLegLength(windowInnerHeight + (reveal * 2) + casingWidth);
    setHeadLength(windowInnerWidth + (reveal * 2) + (casingWidth * 2));
  }

  return (
    <ThemeProvider>
    <main className="flex min-h-screen flex-col space-y-6 items-center p-10">
      <Input crossOrigin={undefined} type='number' onChange={onInputChangeHandler(setWindowInnerWidth)} label="Window inner width" />
      <Input crossOrigin={undefined} type='number' onChange={onInputChangeHandler(setWindowInnerHeight)} label="Window inner height" />
      <Input crossOrigin={undefined} type='number' onChange={onInputChangeHandler(setCasingWidth)} label="Casing width" defaultValue={defaultCasingWidth} />
      <Input crossOrigin={undefined} type='number' onChange={onInputChangeHandler(setReveal)} label="Reveal" defaultValue={defaultReveal}/>

      <Button onClick={calculate}>Calculate</Button>

      <Typography variant="h6">Head: {headLength}<br />Legs: {legLength}<br />Bottom: {bottomLength}</Typography>
    </main>
    </ThemeProvider>
  );
}
