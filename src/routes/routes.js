import { Router } from 'express';

const router = Router();

//crear
router.post('/', (req, res) => {
    console.log(req.body);

    res.status(201).json(req.body);
})

export { Router };