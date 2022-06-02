// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.
import Server from "webpack-dev-server";
import React from "react";
import Spinner from './Spinner'
import { render, screen, fireEvent } from "@testing-library/react";


test('Spinner is not rendering', async() => {
  render(<Spinner/>)
 
})