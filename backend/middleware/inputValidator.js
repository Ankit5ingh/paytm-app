const z = require("zod");

const userSchema = z.object({
    email: z.string().email().min(3).max(30).toLowerCase().required(true),
    password: z.coerce.string().min(8).required(true),
    firstname: z.string().required(true),
    lastname: z.string()
});
export default function inputValidator(req, res, next) {
    const user = req.body;
    const validationResult = userSchema.safeParse(user);
    if(validationResult.success) next(validationResult.data);
    else{
        res.status(404).json({msg: validationResult.error})
    }

}