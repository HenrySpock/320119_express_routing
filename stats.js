const express = require('express');
const app = express();

function calculateMean(numList) {
  return numList.reduce((sum, num) => sum + num) / numList.length; 
} 

function calculateMedian(numList) {
  numList.sort((a, b) => a - b);
  const middleIndex = Math.floor(numList.length / 2);
  const median = numList.length % 2 === 0
    ? (numList[middleIndex - 1] + numList[middleIndex]) / 2
    : numList[middleIndex];
  return median;
}

function calculateMode(numList) {
  const freqMap = {};
  let maxFreq = 0;

  // Loop through the array of numbers and count the frequency of each number
  for (let num of numList) {
    freqMap[num] = freqMap[num] ? freqMap[num] + 1 : 1;
    if (freqMap[num] > maxFreq) {
      maxFreq = freqMap[num];
    }
  }

  // Loop through the frequency map and find all numbers with a frequency equal to the max frequency
  const mode = [];
  for (let num in freqMap) {
    if (freqMap[num] === maxFreq) {
      mode.push(parseInt(num));
    }
  }

  // Construct the result object in the expected format
  const result = {};   
  for (let i = 0; i < mode.length; i++) { 
    result[`value${i+1}`] = mode[i];
    console.log(result)
    console.log(mode)
  }
  return result;
}

function handleStatsRequest(req, res, statsFn) {
  const nums = req.query.nums;
  if (!nums) {
    res.status(400).json({ error: 'nums are required' });
  } else {
    const numList = nums.split(',').map(Number);
    if (numList.includes(NaN)) {
      res.status(400).json({ error: `${nums} is not a number.` });
    } else {
      const statsValue = statsFn(numList);
      const statsName = statsFn.name.toLowerCase();
      const responseObj = { operation: statsName, statsValue };
      res.json(responseObj);
    }
  }
}


app.get('/mean', (req, res) => {
  handleStatsRequest(req, res, calculateMean);
});

app.get('/median', (req, res) => {
  handleStatsRequest(req, res, calculateMedian);
});

app.get('/mode', (req, res) => {
  handleStatsRequest(req, res, calculateMode);
});

app.listen(3001, () => {
  console.log(`Server listening on port ${3001}`);
});

// curl http://localhost:3001/mean?nums=1,2,3,4 
// curl http://localhost:3001/median?nums=1,2,3,4 
// curl http://localhost:3001/mode?nums=1,2,3,4,4