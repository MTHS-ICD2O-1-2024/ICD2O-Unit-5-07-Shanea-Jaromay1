// Copyright (c) 2025 Shanea Jaromay All rights reserved
//
// Created by: Shanea Jaromay
// Created on: May 2025

// This file contains the JS functions for index.html

"use-strict"

/**
* This function calculate, doing multiplication
*/
// eslint-disable-next-line no-unused-vars
function calculateNumber () {
  //input 
  const userNumber = parseFloat(document.getElementById('user-number').value)

  //process
  const step1 = userNumber / 2
  const step2 = userNumber + 1
  const answer = step1 * step2

  // output
    document.getElementById('answer').innerHTML =
  'Step 1: ' + userNumber + ' / 2 = ' + step1 + '<br>' + 
  'Stpe 2: ' + userNumber + ' + 1 = ' + step2 + '<br>' + 
  'Step 3: ' + step1 + ' * ' + step2 + ' = ' + answer + '<br>' + 
  'Your answer is ' + answer + ' . '
}
