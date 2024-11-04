module.exports = (req, res, next) => {
    const currentDate = new Date();
    const day = currentDate.getDay();
    const hour = currentDate.getHours();

    if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
        next();
    } else {
        res.status(403).render('closed', { title: 'Hors horaires' });
    }
};
