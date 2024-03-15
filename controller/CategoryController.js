import express from 'express';
import bodyParser from 'body-parser';
import {
    Category
} from '../model/Category.js';

const categoryRouter = express.Router();
categoryRouter.use(bodyParser.json());

class CategoryController {
    async getCategoryByName(req, res) {
        try {
            const categoryName = req.params.name;
            const category = await Category.findOne({
                where: {
                    name: categoryName
                }
            });
            res.send(category);
        } catch (err) {
            res.status(500).send({
                error: 'An error occurred when trying to fetch a category.'
            });
        }
    }

    async getCategoryList(req, res) {
        try {
            const categories = await Category.findAll();
            res.send(categories);
        } catch (err) {
            res.status(500).send({
                error: 'An error occurred when trying to fetch the categories.'
            });
        }
    }

    async createCategory(req, res) {
        try {
            const category = await Category.create(req.body);
            res.send(category);
        } catch (err) {
            res.status(500).send({
                error: 'An error occurred when trying to create a category.'
            });
        }
    }

    async updateCategory(req, res) {
        try {
            await Category.update(req.body, {
                where: {
                    id: req.body.id
                }
            });
            res.send(req.body);
        } catch (err) {
            res.status(500).send({
                error: 'An error occurred when trying to update a category.'
            });
        }
    }

    async deleteCategory(req, res) {
        try {
            const category = await Category.findByPk(req.params.categoryId);
            if (!category) {
                return res.status(403).send({
                    error: 'No category to delete.'
                });
            }
            await category.destroy();
            res.send(category);
        } catch (err) {
            res.status(500).send({
                error: 'An error occurred when trying to delete a category.'
            });
        }
    }
}

const categoryController = new CategoryController();

categoryRouter.get('/category/:name', async (req, res) => {
    await categoryController.getCategoryByName(req, res);
});

categoryRouter.get('/categories', async (req, res) => {
    await categoryController.getCategoryList(req, res);
});

categoryRouter.post('/category', async (req, res) => {
    await categoryController.createCategory(req, res);
});

categoryRouter.put('/category', async (req, res) => {
    await categoryController.updateCategory(req, res);
});

categoryRouter.delete('/category/:categoryId', async (req, res) => {
    await categoryController.deleteCategory(req, res);
});

export {
    categoryRouter
};