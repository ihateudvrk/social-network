// Imports
const router = require("express").Router();

// functions from userController.js
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/userController");

router.route("/").get(getUsers).post(createUser);

router
  .route("/:userId")
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser);
router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

// Exports
module.exports = router;