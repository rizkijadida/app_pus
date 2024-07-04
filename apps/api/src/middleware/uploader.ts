import { Request } from "express";
import multer from "multer";
import { join } from "path";

type DestinationCallback = (error: Error | null, destination: string) => void;
type FileNameCallback = (eror: Error | null, filename: string) => void;

export const uploader = (filePrefix: string, folderName?: string) => {
  const defaultDir = join(__dirname, "../../public");

  const storage = multer.diskStorage({
    // untuk menentukan destination file kita (mau ditaro ke folder mana)
    destination: (
      req: Request,
      file: Express.Multer.File,
      cb: DestinationCallback
    ) => {
        const destination = folderName ? defaultDir + folderName : defaultDir;
        cb(null, destination);
    },

    // untuk mengubah nama default file kita menjadi ada prefix yang kita butuhkan
    filename: (
        req: Request,
        file: Express.Multer.File,
        cb:FileNameCallback
    ) => {
        const originalnameParts = file.originalname.split(".")
        const fileExtention = originalnameParts[originalnameParts.length -1];
        const newFileName = filePrefix + Date.now() + "." + fileExtention;

        cb(null, newFileName);
    }
  });

  return multer({storage});
};
