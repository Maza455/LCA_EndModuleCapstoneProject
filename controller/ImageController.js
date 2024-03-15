import {
    createRequire
} from 'module';
const require = createRequire(
    import.meta.url);
import multer from 'multer';
import fs from 'fs';

class FileUpload {
    constructor() {
        this.storage = multer.diskStorage({
            destination: (req, file, cb) => {
                const storagePath = "../static/imgs";
                fs.mkdirSync(storagePath, {
                    recursive: true
                });
                cb(null, storagePath);
            },
            filename: (req, file, cb) => {
                cb(null, Date.now() + file.originalname);
            },
        });

        this.fileFilter = (req, file, cb) => {
            if (
                file.mimetype === "image/jpg" ||
                file.mimetype === "image/png" ||
                file.mimetype === "image/jpeg"
            ) {
                cb(null, true);
            } else {
                cb(new Error("Image Upload Problem"), false);
            }
        };

        this.upload = multer({
            storage: this.storage,
            limits: {
                fileSize: 1024 * 1024 * 10,
            },
            fileFilter: this.fileFilter,
        }).array("imageField", 10);
    }

    async uploadProductImage(req, res, next) {
        try {
            this.upload(req, res, function (err) {
                if (err) {
                    return res.send("An error occurred on uploading images");
                } else {
                    next();
                }
            });
        } catch (error) {
            res.status(500).send({
                error: "An error occurred when uploading product image.",
            });
        }
    }
}

export {
    FileUpload
};