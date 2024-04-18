const express = require("express");
const router = express.Router();
const {
  getContract,
  getContracts,
  createContract,
  deleteContract,
  updateContract,
  getActiveContracts,
  getFinishedContracts,
  getFreelancerContracts,
  getFreelancerActiveContracts,
  getFreelancerFinishedContracts
} = require("../controllers/contractController");

// GET all contracts
router.get("/", getContracts);

// GET active contracts
router.get("/active", getActiveContracts);

// GET finished contracts
router.get("/finished", getFinishedContracts);

// GET a specific contract by ID
router.get("/:id", getContract);

router.get("/freelancer/:id",getFreelancerContracts);

router.get("/freelancer/active/:id",getFreelancerActiveContracts);

router.get("/freelancer/finished/:id", getFreelancerFinishedContracts);

// Create a new contract
router.post("/", createContract);

// Delete a contract by ID
router.delete("/:id", deleteContract);

// Update a contract by ID
router.patch("/:id", updateContract);

module.exports = router;
