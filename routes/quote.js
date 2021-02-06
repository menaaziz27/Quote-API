const router = require('express').Router();

const {
	getQuotes,
	getQuote,
	createQuote,
	getRandom,
	updateQuote,
	deleteQuote,
} = require('../controllers/quoteController.js');

router.get('/api/quotes', getQuotes);
router.get('/api/quotes/random', getRandom);
router.get('/api/quotes/:id', getQuote);
router.post('/api/quotes/new', createQuote);
router.put('/api/quotes/update/:id', updateQuote);
router.delete('/api/quotes/delete/:id', deleteQuote);

module.exports = router;
