import { Router } from "express";
import User from "./models/User";

const router = Router()


//autenticacion//
router.post("/auth/register", async (req, res) => {
 const user = new User(req.body)


 await user.save(req.body)

 res.send("registro creado correctamente")

})

    

export default router