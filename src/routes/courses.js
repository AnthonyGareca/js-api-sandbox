const { Router } = require('express');
const router = Router();
const _ = require('underscore');

const courses = require('../../data/data');

router.get('/', (req, res) => {
    res.json(courses);
});

router.post('/', (req, res) => {
    const { title, description, date, rating } = req.body;
    if (title && description && date && rating) {
        const id = courses.length + 1;
        const newCourse = { ...req.body, id };
        courses.push(newCourse);
        res.json(courses);
    } else {
        res.status(500).json({"error": "Something was wrong..."});
    }
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { title, description, date, rating } = req.body;
    if (title && description && date && rating) {
        _.each(courses, (course, index) => {
            if (course.id == id) {
                course.title = title;
                course.description = description;
                course.date = date;
                course.rating = rating;
            }
        });
        res.json(courses);
    } else {
        res.json({"error": "Something was wrong..."});
    }
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    _.each(courses, (course, index) => {
        if (course.id == id) {
            courses.splice(index, 1);
        }
    });
    res.send('Deleted');
})

module.exports = router;