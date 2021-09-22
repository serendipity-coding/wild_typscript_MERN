import { Request, Response } from 'express';
import WilderModel from '../models/Wilder'

const wilderController = {
  create: async (req: Request, res: Response): Promise<void> => {
    try {
      if (!req.body.name) {
        res.status(400).send({ message: "Please enter a valid name" });
        return;
      }
      if (!req.body.city) {
        res.status(400).send({ message: "Please enter a valid city" });
        return;
      }
      await WilderModel.init();
      const wilder = new WilderModel(req.body);
      const result = await wilder.save();
      res.json({ success: true, result });
    } catch (err) {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    }
  },
  findAll: async (req: Request, res: Response): Promise<void> => {
    try {
      const result = await WilderModel.find();
      res.json({ success: true, result });
    } catch (err) {
      res.json({ success: false, result: err });
    }
  },
  update: (req: Request, res: Response): void => {
    WilderModel.updateOne({ _id: req.body._id }, req.body)
      .then((result) => {
        if (!result) {
          res.json({ success: false, result: 'No such wilder exists' });
        }

        res.json(result);
      })
      .catch((err) => {
        res.json({ success: false, result: err });
      });
  },
  delete: (req: Request, res: Response): void => {
    WilderModel.findByIdAndRemove(req.params.id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete wilder`
          });
        } else {
          res.send({
            message: "wilder was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: err
        });
      });
  },
  deleteAll: (req: Request, res: Response): void => {
    WilderModel.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} wilders were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all tutorials."
        });
      });

  },
  searchWilder: (req: Request, res: Response) => {
    const { filter } = req.params
    WilderModel.find(
      { $text: { $search: filter } }
    )
      .then(data => {
        if (data.length === 0)
          res.status(404).send({ message: "Ops Nothing found " });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: `Error searching for ${filter}`, err });
      });
  }


};

export default wilderController;
