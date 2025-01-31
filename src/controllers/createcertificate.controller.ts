

import { Response, Request } from "express";
import { Certificate } from "../entity/certificate.entity";
import { UserInfo } from "../entity/user.entity";
import { AppDataSource } from "../config";

export const createCertifi = async (req: Request, res: Response) => {
  const { UserId, courseName } = req.body;
      //get  from body in postman 
  const certificateRepo= AppDataSource.getRepository(Certificate); 
      // create new varival = AppDataSource that connect to database.getRepository (class name in database (entity))
  const userRepo = AppDataSource.getRepository(UserInfo);
   // create new varival = AppDataSource that connect to database.getRepository (class name in database (entity))



  try {
    const user = await userRepo.findOne({ where: { id: req.params?.id },}); 
     //await userInfoRepo find user muy id muy na

    if (!user) {
      return res.status(404).json({ message: "User not found." });
      //if can not find user id
    }
    const certificate = new Certificate(); 

    certificate.user = UserId; 
    certificate.courseName = courseName; 
    await certificateRepo.save(certificate); 

    res.status(200).json({
      id: certificate.id,
      UserId: user.id,
      courseName: courseName,
    });
  } catch (error) {
    console.error(error);
  }
};
export const getAllquiz = async (req: Request, respon:Response) =>{

}
