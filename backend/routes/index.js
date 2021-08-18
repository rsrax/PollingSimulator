const express = require("express");
const router = express.Router();

const adminKey = "admin";
const candidates = [];
const voted = [];

// REST API
// GET /api/candidates
router.get("/api/candidates", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.json(candidates);
});

// POST /api/candidates
router.post("/api/candidates", function (req, res, next) {
  // get the candidates from the form
  const candidateID = req.body.candidateID;
  const candidateName = req.body.candidateName;
  const key = req.body.adminKey;
  let msg = "";
  console.log(candidateID);
  console.log(candidateName);
  if (key === adminKey) {
    candidates.push({
      candidateID: candidateID,
      candidateName: candidateName,
      votes: 0,
    });
    msg = "Success";
  } else {
    msg = "Admin key is invalid";
  }
  res.header("Access-Control-Allow-Origin", "*");
  res.json({ status: msg });
});

// PATCH /api/votes
router.post("/api/votes", function (req, res, next) {
  // get candidate id from the form
  const candidateID = req.body.candidateID;
  const studentID = req.body.studentID;
  let msg = "";
  if (voted.includes(studentID)) {
    msg = studentID + ", you have already voted.";
  } else {
    voted.push(studentID);
    msg = studentID + ", your vote has been recorded successfully.";
    //for-of loop through candidates array and update vote of candidate
    candidates.forEach(function (candidate) {
      if (candidate.candidateID === candidateID) {
        candidate.votes++;
      }
    });
  }
  res.header("Access-Control-Allow-Origin", "*");
  res.json({ status: msg });
});

module.exports = router;
