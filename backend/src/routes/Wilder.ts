import { Router } from 'express'
import wilderController from '../controllers/wilder'

const router = Router()

// @route    POST api/wilders
// @desc     Create a new Wilder
// @access   Public
router.post("/", wilderController.create);

// @route    GET api/wilders
// @desc     Get all wilders
// @access   Public
router.get("/", wilderController.findAll);

// @route    GET api/wilders/:id
// @desc     Get wilder by ID
// @access   Ublic
// router.get("/:id", wilderController.findOne);

// @route    PUT api/wilders/
// @desc     Update wilder by ID
// @access   Ublic
router.put("/", wilderController.update);

// @route    DELETE api/wilders/:id
// @desc     Delete a wilder with id
// @access   Public
router.delete("/:id", wilderController.delete);

// @route    DELETE api/wilders/
// @desc     Delete all wilders
// @access   Public
router.delete("/", wilderController.deleteAll);

// @route    GET api/wilders/search/:filter
// @desc     Search for wilder by name
// @access   Public
router.get("/search/:filter", wilderController.searchWilder)



export default router;



