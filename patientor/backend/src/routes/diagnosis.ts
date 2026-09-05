import express from 'express';
import service from '../service/diagnosis.ts';

const route = express.Router();

route.get("/", (_req, res) => {
  try{
    res.json(service.get());
  } catch {
    res.status(500);
  }
});

export default route;
